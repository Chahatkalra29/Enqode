import React, { useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const LinkQr = () => {
  const [qrLink, setQrLink] = useState("");
  const [qrColor, setQrColor] = useState("#000000");

  const qRef = useRef();

  const downloadQr = () => {
    const canvas = qRef.current.querySelector("canvas");
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "qrcode.png";
    a.click();
  };

  const saveQr = async () => {
    const utoken = localStorage.getItem("utoken");
    try {
      const response = await axios.post(
        "http://localhost:5000/userapi/addlinkqr",
        {
          qrLink: qrLink,
          qrColor: qrColor,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${utoken}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Link-Enqode</title>
      </Helmet>
      <h1>ENQODE</h1>
      <h2>Link to QR generator</h2>
      <input
        type="text"
        placeholder="Enter the URL"
        onChange={(e) => setQrLink(e.target.value)}
      />
      <input
        type="color"
        value={qrColor}
        onChange={(e) => {
          setQrColor(e.target.value);
        }}
      />
      <div ref={qRef}>
        <QRCodeCanvas value={qrLink} fgColor={qrColor} size={200} />
      </div>
      <button onClick={saveQr}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
          />
        </svg>
      </button>
      <button onClick={downloadQr}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      </button>
    </div>
  );
};

export default LinkQr;
