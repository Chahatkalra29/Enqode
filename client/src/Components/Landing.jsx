import React from "react";
import logo from "../assets/logo-transparent-bg.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div className=" font-sf-pro min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="border-b bg-txt-dark border-grey-soft text-bg-light shadow-md py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Enqode Logo" className="h-10 w-10" />
            <span className="text-xl font-semibold tracking-wider">Enqode</span>
          </Link>
          <ul className="flex space-x-4 text-base font-medium">
            <li>
              <Link
                to="/login"
                className="px-4 py-2 text-white hover:bg-royal-blue/80 rounded-md"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="px-4 py-2 bg-royal-blue text-white hover:bg-royal-blue/80 rounded-md"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <main className=" bg-txt-dark flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10 flex-1">
        {/* Left: Content */}
        <div className="max-w-xl text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Create Beautiful{" "}
            <span className="bg-gradient-to-r from-royal-blue to-lav bg-clip-text text-transparent">
              QR Codes
            </span>{" "}
            in Seconds
          </h1>

          <p className="text-gray-400 text-lg">
            Enqode helps you create stunning, customizable QR codes for your
            business, products, or personal use. Easy to generate, customize,
            and track.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link to="/register">
              <button className="px-6 py-3 bg-royal-blue text-white rounded-md hover:bg-royal-blue/90 shadow-md">
                Get Started Free
              </button>
            </Link>
            <Link to="/">
              <button className="px-6 py-3 border border-white/20 text-white rounded-md hover:bg-white/10">
                See Examples
              </button>
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center gap-2 text-sm text-gray-400 pt-2 justify-center md:justify-start">
            <div className="flex items-center text-bg-light text-lg">
              <span className="bg-royal-blue rounded-full w-6 h-6 flex items-center justify-center">
                ✓
              </span>
              <span className="bg-royal-blue rounded-full w-6 h-6 -ml-2 flex items-center justify-center">
                ✓
              </span>
              <span className="bg-royal-blue rounded-full w-6 h-6 -ml-2 flex items-center justify-center">
                ✓
              </span>
            </div>
            <span>Trusted by 10,000+ users worldwide</span>
          </div>
        </div>

        {/* Right: Glowing Animation/Logo */}
        <div className="relative">
          <div className="rounded-xl bg-[#2c3340] p-4 shadow-[0_0_60px_10px_rgba(102,99,255,0.3)] animate-float w-[300px] md:w-[400px] lg:w-[450px]">
            <img
              src={logo}
              alt="Enqode or Animation"
              className="rounded-xl w-full"
            />
          </div>
        </div>
      </main>
      <div
        className="bg-[#262b33]
      "
      >
        <div className="flex flex-col text-bg-light justify-center items-center space-y-3">
          <h2 className="bg-gradient-to-r from-royal-blue to-lav bg-clip-text text-transparent text-3xl">Premium features</h2>
          <p className="text-bg-light text-xl">Everything you need to create professional QR codes</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Landing;
