import React, { useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const LinkQr = () => {
  const location = useLocation();
  const qrData = location.state?.qrData || null;

  const [qrLinks, setQrLinks] = useState(qrData ? qrData.qrLinks : "");
  const [qrColor, setQrColor] = useState(qrData ? qrData.qrColor : "#000000");
  const [bgColor, setBgColor] = useState("#373e49");
  const [qrSize, setQrSize] = useState(256);
  const [tab, setTab] = useState("url");
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
      setError(`Please enter a ${tab === "url" ? "URL" : "text"}`);
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

      let response;
      if (qrData) {
        response = await axios.post(
          `http://localhost:5000/userapi/editqr/${qrData._id}`,
          {
            qrLink: qrLinks,
            qrColor: qrColor,
            qrType: tab,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${utoken}`,
            },
          }
        );
      } else {
        response = await axios.post(
          "http://localhost:5000/userapi/addlinkqr",
          {
            qrLink: qrLinks,
            qrColor: qrColor,
            qrType: tab,
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
      }, 5000);
    } catch (err) {
      console.error("Error saving QR code:", err);
      setError(
        "Failed to save QR code: " +
          (err.response?.data?.error || err.message)
      );
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-txt-dark font-sf-pro text-white p-6">
      <Helmet>
        <title>Enqode-Links</title>
      </Helmet>

      <h1 className="text-3xl font-bold text-center mb-2 text-white tracking-wider">
        Create QR Code
      </h1>
      <p className="text-center text-gray-400 mb-8">
        Customize and generate a QR code for your needs
      </p>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 max-w-5xl mx-auto">
        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 bg-txt-dark p-6 rounded-xl shadow-md border border-bg-light/10">
          {/* Tabs */}
          <div className="flex space-x-2 mb-6">
            <button
              onClick={() => setTab("url")}
              className={`px-4 py-2 rounded-md font-medium ${
                tab === "url"
                  ? "bg-royal-blue text-white"
                  : "bg-gray-700 text-gray-400"
              }`}
            >
              URL
            </button>
            <button
              onClick={() => setTab("text")}
              className={`px-4 py-2 rounded-md font-medium ${
                tab === "text"
                  ? "bg-royal-blue text-white"
                  : "bg-gray-700 text-gray-400"
              }`}
            >
              Text
            </button>
          </div>

          {/* Input Field */}
          <label
            htmlFor="input"
            className="block text-sm font-medium text-white mb-2"
          >
            {tab === "url" ? "Enter URL" : "Enter Text"}
          </label>
          <input
            id="input"
            type="url"
            placeholder={
              tab === "url" ? "https://example.com" : "Enter your text"
            }
            className="w-full mb-6 bg-grey-soft text-white border border-grey-soft rounded-md px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-royal-blue"
            value={qrLinks}
            onChange={(e) => setQrLinks(e.target.value)}
          />

          {/* QR Code Color */}
          <label
            htmlFor="color"
            className="block text-sm font-medium text-white mb-2"
          >
            QR Code Color
          </label>
          <div className="flex items-center mb-6">
            <input
              id="color"
              type="color"
              className="w-10 h-10 p-0 border-none rounded-lg"
              value={qrColor}
              onChange={(e) => setQrColor(e.target.value)}
            />
            <span className="ml-4 bg-grey-soft border border-grey-soft rounded-md px-2 py-2 text-gray-300">{qrColor}</span>
          </div>

          {/* Background Color */}
          <label
            htmlFor="bg-color"
            className="block text-sm font-medium text-white mb-2"
          >
            Background Color
          </label>
          <div className="flex items-center mb-6">
            <input
              id="bg-color"
              type="color"
              className="w-10 h-10 p-0 border-none rounded-lg"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
            <span className="ml-4 bg-grey-soft border border-grey-soft rounded-md px-2 py-2 text-gray-300">{bgColor}</span>
          </div>

          {/* Size Slider */}
          <label className="block text-sm font-medium text-white mb-2">
            Size (px)
          </label>
          <input
            type="range"
            min="128"
            max="512"
            value={qrSize}
            onChange={(e) => setQrSize(parseInt(e.target.value))}
            className="w-full mb-2 accent-royal-blue"
          />
          <div className="text-right text-sm text-gray-400 mb-6">
            {qrSize}px
          </div>

          {/* Generate Button */}
          <button
            onClick={saveQrCode}
            disabled={loading || !qrLinks}
            className="w-full py-2 bg-royal-blue text-white rounded-md hover:bg-royal-blue/90 transition disabled:opacity-50"
          >
            Generate QR Code
          </button>
        </div>

        {/* Right Side - QR Preview */}
        <div className="flex-1 w-full bg-txt-dark p-6 rounded-xl shadow-md flex flex-col items-center justify-center min-h-[380px] border border-bg-light/10 border-t-8 border-t-royal-blue">
          {qrLinks ? (
            <div ref={qRef}>
              <QRCodeCanvas
                value={qrLinks}
                size={qrSize}
                fgColor={qrColor}
                bgColor={bgColor}
                level="H"
                className="mb-4 bg-txt-dark p-2 rounded-md"
              />
            </div>
          ) : (
            <div
              className="flex items-center justify-center mb-4 text-center rounded-md "
              style={{
                width: `${qrSize}px`,
                height: `${qrSize}px`,
                backgroundColor: bgColor,
               borderRadius: '12px',
              }}
            >
              <p className="text-gray-500 px-4">
                Enter a {tab === "url" ? "URL" : "text"} to generate QR code
              </p>
            </div>
          )}

          {/* Download Button */}
          <button
            onClick={downloadQr}
            disabled={!qrLinks}
            className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition disabled:opacity-50"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkQr;
