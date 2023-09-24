import React, { useState } from 'react';
import  toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const base_url="http://localhost:5000"

function VerifyOTP({ setVerification }) {
  const [otp, setOTP] = useState('');
    const {phoneNumber} = useParams()

    console.log("11>>>>>>>>>>>>>>>>>", phoneNumber)
//   const fullPhoneNumber = countryCode+phoneNumber

  const verifyOTP = async () => {
    try {
      const response = await fetch(`${base_url}/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber, otp:otp }),
      });

      console.log("v erify api called>>")
      console.log("Response>>>>>>", response)

      if (response.ok) {
        toast.success("OTP Verified!")
        setVerification(true);
        
      } else {
        // Handle OTP verification failure
        toast.error("OTP verification failed")
        console.log(response.message)
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <div className='space-x-2'>
      <h1 className='m-4 p-4 text-lg '>Verify OTP</h1>
      <div>
        <div className='m-4 p-4 text-lg '>Phone Number: {phoneNumber}</div>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          className='border border-gray-400 p-2 mt-2 rounded text-black '
        />
      </div>
      <button onClick={verifyOTP} className='bg-[#282c34] text-white p-2 mt-2 rounded hover:bg-blue-200 hover:text-black '>Verify OTP</button>
    </div>
  );
}

export default VerifyOTP;