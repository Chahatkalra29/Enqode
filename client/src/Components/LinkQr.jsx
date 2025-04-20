import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Helmet } from "react-helmet-async";

const LinkQr = () => {
  const [qrLink, setQrLink] = useState("https://chatgpt.com/");
  const [qrColor, setQrColor] = useState("#000000");

  return (
    <> <Helmet>
    <title>Link-Enqode</title>
  </Helmet>
  <p>Here is a QR code for your Link</p>
  <QRCodeCanvas value={qrLink}/>
  </>
    
    
  );
};

export default LinkQr;
