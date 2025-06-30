import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import logo from "../assets/logo-transparent-bg.png";
import { toast, ToastContainer, Bounce } from "react-toastify";

const Register = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  
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
    setIsLoading(true); // Start loading

    // Add immediate visual feedback
    toast.info("Creating your account...", {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
      transition: Bounce,
    });

    try {
      const res = await axios.post(`${backendUrl}userapi/reguser`, userDetails);
      console.log(res.data);
      
      toast.success("Registered successfully, Login to continue", {
        position: "top-center",
        theme: "dark",
        transition: Bounce,
      });
      
      // Clear form after successful registration
      setUserDetails({
        uname: "",
        email: "",
        pass: "",
      });
      
    } catch (error) {
      console.error(error);
      toast.error("Server error. Please try again later.", {
        position: "top-center",
        theme: "dark",
        transition: Bounce,
      });
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-txt-dark relative overflow-hidden font-sf-pro">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#D6D4FF]/10 rounded-full filter blur-[120px] animate-pulse"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#6C63FF]/10 rounded-full filter blur-[120px] animate-pulse"></div>

      <Helmet>
        <title>Register-Enqode</title>
      </Helmet>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lav/10 rounded-full filter blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-lav/10 rounded-full filter blur-3xl"></div>
      
      <div className="h-2/3 p-8 w-1/4 bg-txt-dark rounded-2xl space-y-3 shadow-xl border border-bg-light/10">
        <div className="flex flex-col items-center mb-6">
          <img className="h-17 w-17" src={logo} alt="Enqode Logo" />
          <h1 className="text-2xl font-bold text-bg-light tracking-wider">
            Create Account
          </h1>
          <p className="text-bg-light mt-1">
            Join Enqode and start creating QR codes
          </p>
        </div>
        
        <div>
          <label htmlFor="uname" className="block text-sm text-gray-300 mb-1">
            Full name
          </label>
          <input
            type="text"
            name="uname"
            placeholder="Enter your Name"
            required
            value={userDetails.uname}
            disabled={isLoading} // Disable during loading
            onChange={handleInputChange}
            className={`w-full bg-grey-soft text-white border border-grey-soft rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-royal-blue transition ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={userDetails.email}
            disabled={isLoading} // Disable during loading
            onChange={handleInputChange}
            className={`w-full bg-grey-soft text-white border border-grey-soft rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-royal-blue transition ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          />
        </div>
        
        <div>
          <label htmlFor="pass" className="block text-sm text-gray-300 mb-1">
            Password
          </label>
          <input
            type="password"
            name="pass"
            placeholder="Set password"
            value={userDetails.pass}
            disabled={isLoading} // Disable during loading
            onChange={handleInputChange}
            className={`w-full bg-grey-soft text-white border border-grey-soft rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-royal-blue transition ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          />
        </div>
        
        <button
          onClick={handleFormSubmit}
          disabled={isLoading}
          className={`w-full py-3 mt-2 rounded-xl text-bg-light font-bold tracking-wide shadow-lg transition-all duration-300 flex items-center justify-center ${
            isLoading
              ? 'bg-royal-blue/50 cursor-not-allowed'
              : 'bg-royal-blue hover:from-lav hover:to-royal-blue hover:shadow-lav/40'
          }`}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Creating Account...
            </>
          ) : (
            'Register'
          )}
        </button>
        
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">Already have an account?</p>
          <Link
            to="/login"
            className="text-royal-blue hover:text-royal-blue/50"
          >
            Login here
          </Link>
        </div>
      </div>
      
      <div className="text-center mt-8 text-gray-400 text-xs">
        <p>© {new Date().getFullYear()} Enqode. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Register;