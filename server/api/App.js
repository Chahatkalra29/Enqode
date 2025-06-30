const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const serverless = require("serverless-http");


const app = express();

// Middleware
app.use(bodyParser.json());
app.use(
  cors({
    origin: ["https://enqode.vercel.app", "http://localhost:3000", "http://localhost:5173"],
    credentials: true,
  })
);

// Root route for health check
app.get('/', (req, res) => {
  res.json({ 
    message: 'Enqode Backend API is working!',
    timestamp: new Date().toISOString()
  });
});

// Import and use user routes with error handling
try {
  const userRouter = require("../Routes/UserRoute");
  app.use("/userapi", userRouter);
} catch (error) {
  console.error("Error loading UserRoute:", error);
  
  // Fallback route if UserRoute fails to load
  app.post("/userapi/reguser", (req, res) => {
    res.status(503).json({ 
      error: "Service temporarily unavailable",
      message: "User routes not loaded properly"
    });
  });
}

// MongoDB connection with serverless optimization
let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    if (!process.env.DB_URL) {
      throw new Error("DB_URL environment variable is not set");
    }

    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
    });

    isConnected = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    // Don't throw error - let the function continue without DB for now
  }
};

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Express error:', error);
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Not found',
    path: req.originalUrl,
    message: 'The requested endpoint does not exist'
  });
});

// Serverless handler with DB connection
const handler = serverless(app);

module.exports = async (req, res) => {
  // Connect to DB on each invocation (serverless best practice)
  await connectDB();
  return handler(req, res);
};