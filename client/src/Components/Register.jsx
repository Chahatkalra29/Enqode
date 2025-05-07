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
    <div className="flex flex-col justify-center items-center  min-h-screen bg-txt-dark relative overflow-hidden font-sf-pro">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#D6D4FF]/10 rounded-full filter blur-[120px] animate-pulse"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#6C63FF]/10 rounded-full filter blur-[120px] animate-pulse"></div>

      <Helmet>
        <title>Register-Enqode</title>
      </Helmet>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lav/30 rounded-full filter blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-lav/30   rounded-full filter blur-3xl"></div>
      <div className="h-2/3 p-8 w-1/4  bg-txt-dark rounded-2xl space-y-3 shadow-xl border border-bg-light/10">
      <div className="flex flex-col items-center mb-6">
          <img className="h-17 w-17" src={logo} alt="Enqode Logo" />
          <h1 className="text-2xl font-bold text-bg-light">Create Account</h1>
          <p className="text-bg-light mt-1">
            Join Enqode and start creating QR codes
          </p>
        </div>
        <div><label htmlFor="uname" className="block text-sm text-gray-300 mb-1">
            Full name
          </label>
          <input
          type="text"
          name="uname"
          placeholder="Enter your Name"
          required
          onChange={handleInputChange}
          className="w-full bg-grey-soft text-white border border-grey-soft rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-royal-blue transition"  /></div>
        <div><label htmlFor="email" className="block text-sm text-gray-300 mb-1">
            Email
          </label><input
          type="email"
          name="email"
          placeholder="Enter your Email"
          onChange={handleInputChange}
          className="w-full bg-grey-soft text-white border border-grey-soft rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-royal-blue transition"
        /></div>
        <div><label htmlFor="pass" className="block text-sm text-gray-300 mb-1">
            Password
          </label><input
          type="password"
          name="pass"
          placeholder="Set password"
          onChange={handleInputChange}
          className="w-full bg-grey-soft text-white border border-grey-soft rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-royal-blue transition"        />
        </div>
        <button
          onClick={handleFormSubmit}
          className="w-full py-3 mt-2 bg-royal-blue hover:from-lav hover:to-royal-blue rounded-xl text-bg-light font-bold tracking-wide shadow-lg hover:shadow-lav/40 transition-all duration-300"
        >
          Register
        </button>
        <div className="text-center mt-6"><p className="text-sm text-gray-400">Already have an account?</p>
        <Link to="/login" className="text-royal-blue hover:text-royal-blue/50">
          Login here
        </Link></div>
        
      </div>
      <div className="text-center mt-8 text-gray-400 text-xs">
          <p>© {new Date().getFullYear()} Enqode. All rights reserved.</p>
        </div>
    </div>
  );
};

export default Register;
