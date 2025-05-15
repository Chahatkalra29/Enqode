import React from "react";
import logo from "../assets/logo-transparent-bg.png"; // Adjust path as needed

const Footer = () => {
  return (
    <footer className="bg-[#262b33] py-10 border-t border-white/10 font-sf-pro">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo & Brand */}
        <div className="flex items-center space-x-1">
          <img src={logo} alt="Enqode Logo" className="h-10 w-10" />
          <span className="text-white text-xl font-semibold tracking-wider">Enqode</span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#" className="text-gray-400 hover:text-royal-blue transition">Terms</a>
          <a href="#" className="text-gray-400 hover:text-royal-blue transition">Privacy</a>
          <a href="#" className="text-gray-400 hover:text-royal-blue transition">Contact</a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Enqode — Made with ♥ by Chahat Kalra.
      </div>
    </footer>
  );
};

export default Footer;
