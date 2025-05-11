import React from "react";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <div className="bg-txt-dark font-sf-pro">
      <Helmet>
        <title>Dashboard-Enqode</title>
      </Helmet>
      <div className="flex justify-between items-center h-24 px-14">
        <div>
          {" "}
          <h2 className="text-2xl font-bold text-bg-light tracking-wide">Your QR Links</h2>
          <h4 className="text-gray-400">Manage your saved QR codes</h4>
        </div>

        <button
          className="px-4 py-2 bg-royal-blue text-white rounded-md hover:bg-royal-blue/80"
          onClick={() => (window.location.href = "/enqodeLink")}
        >
          Create New QR
        </button>
      </div>
      <div className="bg-txt-dark h-screen"></div>
        
    </div>
  );
};

export default Dashboard;
