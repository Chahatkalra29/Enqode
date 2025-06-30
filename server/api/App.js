const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const serverless = require("serverless-http");
require("events").EventEmitter.defaultMaxListeners = 20;

// const userModel = require('./Models/User.jsx')
// http://localhost:5000/userapi/testuser
const userRouter = require("../Routes/UserRoute");

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "https://enqode.vercel.app",
    credentials: true,
  })
);

app.use("/userapi", userRouter);


mongoose.connect(process.env.DB_URL);

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected successfully");
});

mongoose.connection.on("error", (error) => {
  console.log(`It is a ${error}, please try again.`);
});

module.exports = {
  app,
  handler: serverless(app),
  mongoose,
};
