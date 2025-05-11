const mongoose = require('mongoose')

const LinkQrSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref: "user_data",
        required:true,
    },
    qrLink:{
        type: String,
        required: true,
    }, qrColor:{
        type: String,
        required: true,
    },
    qrType: {
  type: String,
  enum: ['url', 'text'],
  required: true,
},status:{
        type:String,
        enum:['enable','disable'],
        default:'enable'
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

module.exports = mongoose.model("linkqr_data", LinkQrSchema)