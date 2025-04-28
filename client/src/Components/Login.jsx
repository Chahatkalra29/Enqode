import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const navigate = useNavigate()
  const[error,setError]= useState("")
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
        navigate('/dashboard')
      } else {
        console.log("Error from server:", loginDetails.data.msg)
        setError(loginDetails.data.msg)
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
    <div className="flex justify-center items-center h-screen">
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
      <div className="h-2/3 p-8 w-1/4  bg-[#151525] rounded-2xl space-y-3 shadow-xl border border-[#1f1f38]">
        <h2 className="text-2xl mt-3 font-semibold text-cyan-400 tracking-widest text-center">
          ENQODE
        </h2>
        <input
          type="email"
          name="uemail"
          placeholder="Enter your registered email"
          required
          className="w-full bg-[#1a1a2e] text-white border border-[#2e2e48] rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="upass"
          placeholder="Password"
          required
          className="w-full bg-[#1a1a2e] text-white border border-[#2e2e48] rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
          onChange={handleInputChange}
        />
        <button
          className=" w-full py-3 mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-500 hover:to-purple-600 rounded-xl text-white font-bold tracking-wide shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
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
        <p className="text-gray-400">Don't have an account yet?</p>
        <Link to={"/register"} className="text-blue-500">
          Register here{" "}
        </Link>
        <br /> <br />
        <Link to={"/forgetPass"} className="text-blue-500">
          Forgot Password?{" "}
        </Link>
      </div>
    </div>
  );
};

export default Login;
