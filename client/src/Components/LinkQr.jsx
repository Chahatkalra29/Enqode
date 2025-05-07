import React, { useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const LinkQr = () => {
const location = useLocation()
const qrData = location.state?.qrData || null;

  
  // const [qrLinks, setQrLinks] = useState("");
  const [qrLinks, setQrLinks] = useState(qrData?qrData.qrLinks:"");
  // const [qrColor, setQrColor] = useState("#000000");
  const [qrColor, setQrColor] = useState(qrData?qrData.qrColor:"#000000");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const qRef = useRef();
  const navigate = useNavigate();

  const downloadQr = () => {
    const canvas = qRef.current.querySelector("canvas");
    if (!canvas) return;

    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "qrcode.png";
    a.click();
  };

  const saveQrCode = async () => {
    if (!qrLinks) {
      setError("Please enter a URL");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const utoken = localStorage.getItem("utoken");
      if (!utoken) {
        setError("No authentication token found. Please log in again.");
        setLoading(false);
        navigate("/login");
        return;
      }

      let response
      if(qrData){
        response = await axios.post(
          `http://localhost:5000/userapi/editqr/${qrData._id}`,
          {
            qrLink: qrLinks,
            qrColor: qrColor,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${utoken}`,
            },
          }
        );
      }else{
        response = await axios.post(
          "http://localhost:5000/userapi/addlinkqr",
          {
            qrLink: qrLinks,
            qrColor: qrColor,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${utoken}`,
            },
          }
        );
      }
      

      console.log("QR code saved:", response.data);
      setLoading(false);

      setTimeout(() => {
        navigate("/allLinks");
      }, 2000);
    } catch (err) {
      console.error("Error saving QR code:", err);
      setError(
        "Failed to save QR code: " + (err.response?.data?.error || err.message)
      );
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 font-sf-pro">
      <Helmet>
        <title>Enqode-Links</title>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">Create QR Code</h1>

      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label htmlFor="url" className="block text-gray-700 font-medium mb-2">
            Enter URL
          </label>
          <input
            id="url"
            type="text"
            
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com"
            value={qrLinks}
            onChange={(e) => setQrLinks(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="color"
            className="block text-gray-700 font-medium mb-2"
          >
            QR Code Color
          </label>
          <div className="flex items-center">
            <input
              id="color"
              type="color"
              className="w-12 h-8 border border-gray-300 rounded"
              value={qrColor}
              onChange={(e) => setQrColor(e.target.value)}
            />
            <span className="ml-2 text-gray-600">{qrColor}</span>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <div className="flex flex-col items-center" ref={qRef}>
          {qrLinks ? (
            <QRCodeCanvas
              value={qrLinks}
              size={200}
              fgColor={qrColor}
              level="H"
              className="mb-4 border border-gray-200 rounded"
            />
          ) : (
            <div className="w-[200px] h-[200px] border border-gray-200 rounded flex items-center justify-center mb-4">
              <p className="text-gray-400">Enter a URL to generate QR code</p>
            </div>
          )}

          <div className="flex space-x-4 mt-4">
            <button
              onClick={downloadQr}
              disabled={!qrLinks}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 disabled:opacity-50"
            >
              Download
            </button>
            <button
              onClick={saveQrCode}
              disabled={loading || !qrLinks}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkQr;
