import React from "react";
import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProtectedRoute = () => {
  const utoken = localStorage.getItem("utoken");
  if (!utoken) {
    return <Navigate to="/login" />;
  }
  try {
    const decodeToken = jwtDecode(utoken);
    const currentTime = Math.floor(Date.now() / 1000);
    if (decodeToken.exp < currentTime) {
      localStorage.removeItem("utoken");
      return <Navigate to="/login" />;
    } else {
      return (
        <div className="bg-txt-dark min-h-screen text-bg-light">
          <Navbar />
          <Outlet />
          
        </div>
      );
    }
  } catch (error) {
    localStorage.removeItem("utoken");
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
