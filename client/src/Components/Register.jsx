import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";

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
      const res = await axios.post("http://localhost:5000/userapi/reguser", userDetails);
      console.log(res.data); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
    <Helmet>
          <title>Register-Enqode</title>
        </Helmet>
      <div className="h-2/3 p-8 w-1/4 bg-[#151525] rounded-2xl space-y-3 shadow-xl border border-[#1f1f38]">
        <h2 className="text-2xl mt-3 font-semibold text-cyan-400 tracking-widest text-center">
          ENQODE
        </h2>
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
        <p className="text-gray-400">Already have an account?</p>
        <Link to="/login" className="text-blue-500 hover:underline">
          Login here
        </Link>
        
      </div>
    </div>
  );
};

export default Register;
