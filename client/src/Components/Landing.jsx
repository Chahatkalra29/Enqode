import React from "react";
import logo from "../assets/logo-transparent-bg.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="bg-txt-dark font-sf-pro h-screen">
      <nav className="bg-txt-dark border-b border-grey-soft text-bg-light  font-sf-pro shadow-md py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Enqode Logo" className="h-10 w-10" />
            <span className="text-xl font-semibold tracking-wider">Enqode</span>
          </Link>
          {/*Login- Register */}
          <ul className="flex space-x-4 items-center text-base font-medium tracking-wide">
            <li>
              <Link to="/login" className="px-4 py-2  text-white rounded-md hover:bg-royal-blue/80">
                Login
              </Link>
            </li>
            <li>
                <Link to="/register" className="px-4 py-2 bg-royal-blue text-white rounded-md hover:bg-royal-blue/80">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div><div><div><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-bg-light">
              Create Beautiful <span className=" font-bold bg-gradient-to-r from-royal-blue to-lav bg-clip-text text-transparent">QR Codes</span> in Seconds
            </h1>
            <h2 className="text-gray-400/90">Enqode lets you generate and customize QR codes from URLs or text — with full control over color, background, and size. Save or download in seconds.</h2></div></div></div>
    </div>
  );
};

export default Landing;
