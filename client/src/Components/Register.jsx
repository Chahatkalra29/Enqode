import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import logo from "../assets/logo-transparent-bg.png";

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    uname: "",
    email: "",
    pass: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/userapi/reguser",
        userDetails
      );
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center  min-h-screen bg-txt-dark relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#D6D4FF]/10 rounded-full filter blur-[120px] animate-pulse"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#6C63FF]/10 rounded-full filter blur-[120px] animate-pulse"></div>

      <Helmet>
        <title>Register-Enqode</title>
      </Helmet>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lav rounded-full filter blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-lav rounded-full filter blur-3xl"></div>
      <div className="h-2/3 p-8 w-1/4  bg-txt-dark rounded-2xl space-y-3 shadow-xl border border-txt-dark">
      <div className="flex flex-col items-center mb-6">
          <img className="h-17 w-17" src={logo} alt="Enqode Logo" />
          <h1 className="text-2xl font-bold text-bg-light">Create Account</h1>
          <p className="text-bg-light mt-1">
            Join Enqode and start creating QR codes
          </p>
        </div>
        <input
          type="text"
          name="uname"
          placeholder="Enter your Name"
          required
          onChange={handleInputChange}
          className="w-full bg-[#1a1a2e] text-white border border-[#2e2e48] rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          onChange={handleInputChange}
          className="w-full bg-[#1a1a2e] text-white border border-[#2e2e48] rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
        />
        <input
          type="password"
          name="pass"
          placeholder="Set password"
          onChange={handleInputChange}
          className="w-full bg-[#1a1a2e] text-white border border-[#2e2e48] rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
        />
        <button
          onClick={handleFormSubmit}
          className="w-full py-3 mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-500 hover:to-purple-600 rounded-xl text-white font-bold tracking-wide shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
        >
          Register
        </button>
        <div className="text-center mt-6"><p className="text-sm text-gray-400">Already have an account?</p>
        <Link to="/login" className="text-royal-blue hover:underline">
          Login here
        </Link></div>
        
      </div>
    </div>
  );
};

export default Register;
