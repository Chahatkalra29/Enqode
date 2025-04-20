const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')

// const userModel = require('./Models/User.jsx')
// http://localhost:5000/userapi/testuser
const userRouter = require('./Routes/UserRoute')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use('/userapi',userRouter)

const port = process.env.PORT || 5000

app.listen(port,(req,res)=>{
    console.log(`Server is running on: http://localhost:${port}`)
})
mongoose.connect(process.env.DB_URL)

mongoose.connection.on("connected",()=>{
    console.log("MongoDB connected successfully")
})

mongoose.connection.on("error",(error)=>{
    console.log(`It is a ${error}, please try again.`)
})

module.exports = mongoose;