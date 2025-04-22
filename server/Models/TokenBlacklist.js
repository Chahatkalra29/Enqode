const  mongoose = require('mongoose')

const TokenBlacklistSchema = new mongoose.Schema({
    token:{
        type:String, 
        required: true,
    }
})

module.exports= mongoose.model("blacklist", TokenBlacklistSchema)