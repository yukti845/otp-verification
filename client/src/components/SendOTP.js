import React, { useState } from 'react';
// import VerifyOTP from './VerifyOTP';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast'

const base_url="http://localhost:5000"

function SendOTP({ setVerification }) {
    const [countryCode, setCountryCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate()
  
  const [isOTPSent, setIsOTPSent] = useState(false);

  const sendOTP = async () => {
    try {
        console.log(countryCode, phoneNumber)
      const response = await fetch(`${base_url}/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ countryCode, phoneNumber }),
      });

      const fullPhoneNumber = countryCode+phoneNumber

      if (response.ok) {
        setIsOTPSent(true);
        toast.success("OTP sent!")
        navigate(`/verify/${fullPhoneNumber}`)
      } else {
        // Handle API error
        toast.error("OTP was not sent!")
        console.log(response.message)

      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };


  const onChangeHandler =(e) => {
    if(e.target.name==="countryCode"){
        console.log(e.target.value)
        setCountryCode(e.target.value)
    }
    if(e.target.name==="phoneNumber"){
        console.log(e.target.value)
        setPhoneNumber(e.target.value)
    }
  }

  return (
    <div className='space-x-2'>
      <h1 className='m-4 p-4 text-lg '>Send OTP</h1>
      <input
        type="text"
        name="countryCode"
        placeholder="+91"
        value={countryCode}
        onChange={onChangeHandler}
        className='border w-20 border-gray-400 p-2 mt-2 rounded text-black '
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Enter Phone Number"
        value={phoneNumber}
        onChange={onChangeHandler}
        className='border border-gray-400 p-2 mt-2 rounded text-black '
      />
      <button onClick={sendOTP} className='bg-[#282c34] text-white p-2 mt-2 rounded hover:bg-blue-200 hover:text-black '>Send OTP</button>
      {/* {isOTPSent && (
        <VerifyOTP countryCode={countryCode} phoneNumber={phoneNumber} setVerification={setVerification} />
      )} */}
    </div>
  );
}

export default SendOTP;