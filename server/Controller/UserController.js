exports.testuser = async (req, res) => {
  res.json({
    msg: "Just a test user",
  });
};
const LinkQr = require("../Models/LinkQr");
const linkQrModel = require("../Models/LinkQr");
const userModel = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.addLinkQr = async (req, res) => {
  const qrLink = req.body.qrLink;
  const qrColor = req.body.qrColor;

  const user = req.user._id;
  try {
    const newLinkQr = new linkQrModel({ qrLink, qrColor, user });
    const saveQr = await new LinkQr.save();
    res.json(saveQr);
  } catch (error) {
    res.json({ "error:": error });
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
      { expiresIn: "10m" }
    );

    res.json({ loginsts: "0", token: token });
  } catch (error) {
    res.json({ error: error.message });
  }
};
