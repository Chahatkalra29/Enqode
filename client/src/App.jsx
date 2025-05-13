import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Register.jsx";
import Login from "./Components/Login.jsx";
import { HelmetProvider } from "react-helmet-async";
import Dashboard from "./Components/Dashboard.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx"
import LinkQr from "./Components/LinkQr.jsx";
import AllLinks from "./Components/AllLinks.jsx";
import ForgetPass from "./Components/ForgetPass.jsx";
import ResetPass from "./Components/ResetPass.jsx";
import { ToastContainer  } from "react-toastify";
import Landing from "./Components/Landing.jsx";
 
const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpass" element={<ForgetPass/>} />
          <Route path="/reset-pass/:token" element={<ResetPass/>} />

          <Route element={<ProtectedRoute/>}>
          <Route path="/enqodeLink" element={<LinkQr/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/allLinks" element={<AllLinks/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </HelmetProvider>
  );
};

export default App;
