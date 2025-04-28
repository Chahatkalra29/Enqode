import React, { useState } from 'react'
import { Helmet } from "react-helmet-async";
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const ResetPass = () => {
  const {token}= useParams()
  const [password,setPassword]= useState("")
 const handlePasswordReset = async () => {
  try {
    const response = await axios.post(`http://localhost:5000/userapi/reset-pass/${token}`,{password})
   
  } catch (error) {
    console.log(error)
  }
 }
  return (
    <div  className="flex justify-center items-center h-screen">
      <Helmet>
        <title>Reset Password-Enqode</title>
      </Helmet>
      <div className="h-2/3 p-8 w-1/4  bg-[#151525] rounded-2xl space-y-3 shadow-xl border border-[#1f1f38]">
        <h2 className="text-2xl mt-3 font-semibold text-cyan-400 tracking-widest text-center">
          ENQODE
        </h2>
        <input
          type="password"
          name="upass"
          placeholder="Enter your new password"
          required
          className="w-full bg-[#1a1a2e] text-white border border-[#2e2e48] rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          onChange={(e)=>setPassword(e.target.value)}
        />
       
        <button
          className=" w-full py-3 mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-500 hover:to-purple-600 rounded-xl text-white font-bold tracking-wide shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          onClick={handlePasswordReset}
        >
          Save Password
        </button> 
       
           
      </div>
    </div>
  )
}

export default ResetPass