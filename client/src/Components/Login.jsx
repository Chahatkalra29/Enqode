import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import logo from "../assets/logo-transparent-bg.png";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [errorTrigger, setErrorTrigger] = useState(false);

  const [userDetails, setUserDetails] = useState({
    uemail: "",
    upass: "",
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
      const loginDetails = await axios.post(
        "http://localhost:5000/userapi/loguser",
        userDetails
      );
      console.log(loginDetails);
      if (loginDetails.data.loginsts === "0") {
        localStorage.setItem("utoken", loginDetails.data.token);
        navigate("/dashboard");
      } else {
        console.log("Error from server:", loginDetails.data.msg);
        setError(loginDetails.data.msg);
        setErrorTrigger((prev) => !prev);
      }
      // const token = localStorage.getItem("utoken")
    } catch (error) {
      console.log(error);
      toast.error("Server error. Please try again later.", {
        position: "top-center",
        theme: "dark",
        transition: Bounce,
      });
    }
  };
  useEffect(() => {
    if (error) {
      console.log("Error detected: ", error);
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });

      setError("");
    }
  }, [errorTrigger]);

  return (
    <div className="flex  flex-col justify-center items-center  min-h-screen bg-txt-dark relative overflow-hidde font-sf-pro">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#D6D4FF]/10 rounded-full filter blur-[120px] animate-pulse"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#6C63FF]/10 rounded-full filter blur-[120px] animate-pulse"></div>

      <Helmet>
        <title>Login-Enqode</title>
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
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lav/10 rounded-full filter blur-3xl "></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-lav/10 rounded-full filter blur-3xl"></div>
      <div className="h-2/3 p-8 w-1/4  bg-txt-dark rounded-2xl space-y-3 shadow-xl border border-bg-light/10">
        <div className="flex flex-col items-center mb-6">
          <img className="h-17 w-17" src={logo} alt="Enqode Logo" />
          <h1 className="text-2xl font-bold  text-bg-light">Welcome Back</h1>
          <p className="text-bg-light mt-1">Log in to your Enqode account</p>
        </div>
        <div>
          <label htmlFor="uemail" className="block text-sm text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            name="uemail"
            placeholder="Enter your registered email"
            required
            className="w-full bg-grey-soft text-white border border-grey-soft rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-royal-blue transition"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="upass" className="block text-sm text-gray-300 mb-1">
            Password
          </label>
          <input
            type="password"
            name="upass"
            placeholder="Password"
            required
            className="w-full bg-grey-soft text-white border border-grey-soft rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-royal-blue transition"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-end">
          <Link
            to={"/forgetPass"}
            className="text-royal-blue text-xs hover:text-royal-blue/80"
          >
            Forgot Password?{" "}
          </Link>
        </div>

        <button
          className=" w-full py-3 mt-2 bg-royal-blue hover:from-lav hover:to-royal-blue rounded-xl text-bg-light font-bold tracking-wide shadow-lg hover:shadow-lav/40 transition-all duration-300"
          onClick={handleFormSubmit}
        >
          Login
        </button>
        {/* <button
          className=" w-full py-3 mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-500 hover:to-purple-600 rounded-xl text-white font-bold tracking-wide shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          onClick={msg}
        >
          Test Toast
        </button> */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">Don't have an account yet?</p>
          <Link
            to={"/register"}
            className="text-royal-blue hover:text-royal-blue/50 "
          >
            Register here{" "}
          </Link>
        </div>

        <br />
      </div>
      <div className="text-center mt-8 text-gray-400 text-xs">
          <p>© {new Date().getFullYear()} Enqode. All rights reserved.</p>
        </div>
    </div>
  );
};

export default Login;
