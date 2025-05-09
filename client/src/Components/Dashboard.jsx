import React from "react";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <div className="bg-txt-dark">
      <Helmet>
        <title>Dashboard-Enqode</title>
      </Helmet>
      <h2 className="text-blue-500 text-5xl font-bold flex justify-center h-screen items-center">Welcome to Enqode</h2>
      <h2 className="text-blue-600 text-5xl font-bold flex justify-center h-screen items-center">Enqode – Quick. Clean. QR.</h2>   
    </div>
  );
};

export default Dashboard;
