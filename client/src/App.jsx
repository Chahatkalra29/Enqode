import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Register.jsx";
import Login from "./Components/Login.jsx";
import { HelmetProvider } from "react-helmet-async";
import Dashboard from "./Components/Dashboard.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx"
import LinkQr from "./Components/LinkQr.jsx";
import AllLinks from "./Components/LinkQr.jsx";
 
const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          < Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute/>}>
          <Route path="/enqodeLink" element={<LinkQr/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/allLinks" element={<AllLinks/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
