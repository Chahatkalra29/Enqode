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
      <div className="bg-[#262b33] h-9/12"> <div className=""><div className="flex flex-col text-bg-light justify-center items-center space-y-2">
          <h2 className="bg-gradient-to-r from-royal-blue to-lav bg-clip-text text-transparent text-3xl pt-3">
            Premium features
          </h2>
          <p className="text-bg-light/50 text-xl">
            Everything you need to create professional QR codes
          </p><div className=" flex items-center justify-center px-4 pb-5 space-x-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl ">
            {/* Customizable Designs */}
            <div
              className="flex flex-col items-center bg-grey-soft/40 p-6 rounded-xl border border-grey-soft shadow-md hover:ring-1 hover:ring-royal-blue hover:scale-105 transition delay-75
            "
            >
              <div className="mb-4 text-bg-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Customizable Designs
              </h3>
              <p className="text-gray-400 text-sm text-center">
                Change QR color, background color, and size to match your style.
              </p>
            </div>

            {/* Password Protection */}
            <div className=" flex flex-col items-center bg-grey-soft/40 p-6 rounded-xl border border-grey-soft shadow-md hover:ring-1 hover:ring-royal-blue hover:scale-105 transition delay-75">
              <div className="mb-4 text-bg-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Password Protection
              </h3>
              <p className="text-gray-400 text-sm text-center">
                Save, delete, and edit your QR codes securely with password
                protection.
              </p>
            </div>

            {/* Export Option */}
            <div className="flex flex-col items-center bg-grey-soft/40 p-6 rounded-xl border border-grey-soft shadow-md hover:ring-1 hover:ring-royal-blue hover:scale-105 transition delay-75">
              <div className="mb-4 text-bg-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Export Option
              </h3>
              <p className="text-gray-400 text-sm text-center">
                Download your QR codes in high-quality PNG format.
              </p>
            </div>
          </div>
        </div>
        </div></div>
        
        
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
