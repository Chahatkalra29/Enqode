import React, { useEffect, useState } from "react";
import axios from "axios";
import { QRCodeCanvas } from "qrcode.react";
import { ShowToast } from "../Utilities/ShowToast";
import { useNavigate } from "react-router-dom";

const AllLinks = () => {
  const [qrLinks, setQrLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  const fetchQrLinks = async () => {
    try {
      const utoken = localStorage.getItem("utoken");
      if (!utoken) {
        setError("No authentication token found. Please log in again.");
        setLoading(false);
        return;
      }

      const response = await axios.get(
        "http://localhost:5000/userapi/getqrlinks",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${utoken}`,
          },
        }
      );

      setQrLinks(response.data);
      setLoading(false);
    } catch (error) {
      setError(
        "Failed to load QR links: " +
          (error.response?.data?.error || error.message)
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQrLinks();
  }, []);

  const deleteQr = async (qrid) => {
    try {
      const utoken = localStorage.getItem("utoken");
      const response = await axios.get(
        `http://localhost:5000/userapi/deleteqr/${qrid}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${utoken}`,
          },
        }
      );

      if (response.data.delete_sts == "0") {
        ShowToast(response.data.msg, "success");
        setQrLinks(qrLinks.filter((qr) => qr._id !== qrid));
      } else {
        ShowToast(response.data.msg, "error");
      }
    } catch (error) {
      ShowToast(error, "error");
    }
  };

  const navigate = useNavigate();

  const editQr = (qr) => {
    navigate("/enqodeLink", { state: { qrData: qr } });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40 bg-txt-dark h-screen">
        <p className="text-lg font-medium text-gray-400 ">Loading your links...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-md">
        <p className="text-red-600">{error}</p>
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => (window.location.href = "/login")}
        >
          Return to Login
        </button>
      </div>
    );
  }

  if (qrLinks.length === 0) {
    return (
      <div className="p-4 bg-txt-dark border border-grey-soft rounded-md">
        <p className="text-gray-400">
          No QR links found. Create some QR codes first!
        </p>
        <button
          className="mt-2 px-4 py-2 bg-royal-blue text-white rounded-md hover:bg-royal-blue/80"
          onClick={() => (window.location.href = "/enqodeLink")}
        >
          Create New QR Code
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 bg-txt-dark font-sf-pro">
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-lav/10 rounded-full filter blur-[120px] animate-pulse"></div>
      <div className="absolute top-0 right-60 w-72 h-72 bg-lav/10 rounded-full filter blur-[120px] animate-pulse"></div>
      
      
      <div className="flex justify-between items-center mb-6 mt-4 ">
        <div>
          {" "}
          <h2 className="text-2xl font-bold text-bg-light tracking-wider">Your QR Links</h2>
          <h4 className="text-gray-400">Manage your saved QR codes</h4>
        </div>

        <button
          className="px-4 py-2 bg-royal-blue text-white rounded-md hover:bg-royal-blue/80"
          onClick={() => (window.location.href = "/enqodeLink")}
        >
          Create New QR
        </button>
      </div>
       <div className="overflow-x-auto rounded-lg shadow-md border-2 border-grey-soft bg-txt-dark ">

      <table className="w-full border-collapse  ">
        <thead className="bg-txt-dark border-b border-grey-soft text-gray-400">
          <tr className="">
            <th className=" p-2  ">
              QR codes
            </th>
            <th className=" p-2 ">
              Color
            </th>
            <th className=" p-2 ">
              Type
            </th>
            <th className=" p-2 ">
              Status
            </th>
            <th
              className=" p-2 "
              colSpan={2}
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody >
          {qrLinks.map((qr, index) => (
            <tr key={index} className="bg-gray-50 border-b border-grey-soft">
              <td className=" p-2 bg-txt-dark text-bg-light flex justify-center items-center">
                <QRCodeCanvas
                  value={qr.qrLink} 
                  size={100}
                  fgColor={qr.qrColor}
                  level="H"
                  className=" border border-grey-soft rounded "
                />
              </td>
              <td className=" p-2 bg-txt-dark text-bg-light text-center">
                {qr.qrColor}
              </td>
              <td className=" p-2 bg-txt-dark capitalize text-gray-400 text-center">
                {qr.qrType}
              </td>
              <td className=" p-2 bg-txt-dark text-gray-400 text-center">
                {qr.status}
              </td>
              <td className=" p-2 bg-txt-dark text-gray-400 text-center">
                <button onClick={() => editQr(qr)} title="Edit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor" 
                    className="size-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>
              </td>
              <td className=" p-2 bg-txt-dark text-gray-400">
                <button onClick={() => deleteQr(qr._id)} title="Delete">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table></div>
    </div>
  );
};

export default AllLinks;
