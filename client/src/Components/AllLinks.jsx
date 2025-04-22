import React, { useEffect, useState } from "react";
import axios from "axios";

const AllLinks = () => {
  const [qrLinks, setQrLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const fetchQrLinks = async () => {
    try {
      const utoken = localStorage.getItem("utoken");
      console.log("Token used for request:", utoken ? "Token exists" : "No token found");
      
      if (!utoken) {
        setError("No authentication token found. Please log in again.");
        setLoading(false);
        return;
      }
      
      const response = await axios.get("http://localhost:5000/userapi/getqrlinks", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${utoken}`,
        },
      });
      
      console.log("API Response data:", response.data);
      
      if (response.data.length === 0) {
        console.log("No QR links found for this user");
      }
      
      setQrLinks(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching QR links:", error.response?.data || error.message);
      setError("Failed to load QR links: " + (error.response?.data?.error || error.message));
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQrLinks();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-40">
      <p className="text-lg font-medium">Loading your links...</p>
    </div>;
  }

  if (error) {
    return <div className="p-4 bg-red-50 border border-red-200 rounded-md">
      <p className="text-red-600">{error}</p>
      <button 
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={() => window.location.href = '/login'}
      >
        Return to Login
      </button>
    </div>;
  }

  if (qrLinks.length === 0) {
    return <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
      <p className="text-yellow-700">No QR links found. Create some QR codes first!</p>
      <button 
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={() => window.location.href = '/enqodeLink'}
      >
        Create New QR Code
      </button>
    </div>;
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Your QR Links</h2>
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => window.location.href = '/enqodeLink'}
        >
          Create New QR
        </button>
      </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-2">QR Links</th>
            <th className="border border-gray-300 p-2">QR Color</th>
            <th className="border border-gray-300 p-2">QR Status</th>
          </tr>
        </thead>
        <tbody>
          {qrLinks.map((qr, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
              <td className="border border-gray-300 p-2">
                <a href={qr.qrLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {qr.qrLink}
                </a>
              </td>
              <td className="border border-gray-300 p-2">
                <div className="flex items-center">
                  <div 
                    className="w-4 h-4 rounded-full mr-2" 
                    style={{ backgroundColor: qr.qrColor }}
                  ></div>
                  {qr.qrColor}
                </div>
              </td>
              <td className="border border-gray-300 p-2">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  qr.status === 'enable' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {qr.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllLinks;