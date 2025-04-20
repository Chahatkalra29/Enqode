require('dotenv').config()
const jwt = require('jsonwebtoken')

const userAuthentication = (req,res,next)=>{
        const header = req.header('Authorization')
        if(!header || typeof header !== 'string' || !header.startsWith("Bearer ")){
            res.jsn({token_sts:"1", msg:"Token not found or Inavlid token"})
        }else{
            const token =  header.split('')[1]
            try{
                const verified = jwt.verify(token, process.env.JWT_USER_SECRET)
                req.user= verified
                next()
            }catch(error){
                res.json({token_sts:"2",msg:"error"})
            }
        }
}

module.exports = userAuthentication