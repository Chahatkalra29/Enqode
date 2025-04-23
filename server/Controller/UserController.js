exports.testuser = async (req, res) => {
  res.json({
    msg: "Just a test user",
  });
};
const LinkQr = require("../Models/LinkQr");
const linkQrModel = require("../Models/LinkQr");
const TokenBlacklist = require("../Models/TokenBlacklist");
const userModel = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.addLinkQr = async (req, res) => {
  const { qrLink, qrColor } = req.body;
  const user = req.user.id; 

  if (!qrLink || !qrColor) {
    return res.status(400).json({ error: "QR link and color are required" });
  }

  try {
    const newLinkQr = new LinkQr({ 
      qrLink, 
      qrColor, 
      user 
    });
    
    const saveQr = await newLinkQr.save();
    res.status(201).json(saveQr);
  } catch (error) {
    console.error("Error saving QR link:", error);
    res.status(500).json({ error: error.message });
  }
};
// exports.debug = async(req,res)=>{
//     const uname = req.body.uname

//     try{
//         const newUsername = new userModel({
//             "user_name":uname
//         })
//     }catch(error){
//         res.json({"error":error})
//     }
// }

exports.regUser = async (req, res) => {
  const uname = req.body.uname;
  const uemail = req.body.email;
  const upass = await bcrypt.hash(req.body.pass, 12);

  try {
    const newUser = new userModel({
      user_name: uname,
      user_email: uemail,
      user_password: upass,
    });
    const saveUser = await newUser.save();
    res
      .status(201)
      .json({ message: "User registered successfully", user: saveUser });
    console.log("User saved to DB:", saveUser);
  } catch (error) {
    res.json({ error: error });
  }
};

exports.loginuser = async (req, res) => {
  const uemail = req.body.uemail;
  const upass = req.body.upass;

  try {
    const userLogin = await userModel.findOne({ user_email: uemail });
    if (!userLogin) {
      return res.json({ loginsts: "1", msg: "User not found" });
    }

    const isMatch = await bcrypt.compare(upass, userLogin.user_password);
    if (!isMatch) {
      return res.json({ loginsts: "2", msg: "Wrong password" });
    }

    const token = jwt.sign(
      {
        id: userLogin._id,
        user_email: userLogin.user_email,
      },
      process.env.JWT_USER_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ loginsts: "0", token: token });
  } catch (error) {
    res.json({ error: error.message });
  }
};
exports.getQrLinks = async (req, res) => {
  try {
    console.log("User ID from token:", req.user.id);
    const qrLinks = await linkQrModel.find({user: req.user.id});
    console.log("Found links:", qrLinks);
    
    if (!qrLinks || qrLinks.length === 0) {
      return res.json([]);  // Return empty array instead of error if no links found
    }
    
    res.json(qrLinks);
  } catch (error) {
    console.error("Error in getQrLinks:", error);
    res.status(500).json({"error": error.message});
  }
};


exports.logoutuser = async (req,res) => {
  const token = req.headers.authorization?.split(" ")[1]
    if(!token){
     return res.json({"msg":"No Token Found"})
    }try {
      const tokenData = new TokenBlacklist({token})
      const saveBlacklistToken = await tokenData.save()
      res.json(saveBlacklistToken)
    } catch (error) {
      res.json({"error": error})
    }
}