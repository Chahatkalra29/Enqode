import React from 'react'
import { Helmet } from "react-helmet-async";
import { useParams } from 'react-router-dom';

const ResetPass = () => {
  const {token}= useParams()
  return (
    <div>
    <Helmet>
            <title>Reset Password-Enqode</title>
          </Helmet>ResetPass</div>
  )
}

export default ResetPass