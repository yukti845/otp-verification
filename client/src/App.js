import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import SendOTP from './components/SendOTP';
// import VerifyOTP from './components/VerifyOTP';
import Popup from './components/Popup';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import VerifyOTP from './components/VerifyOTP';
import  toast, { Toaster } from 'react-hot-toast';

const AppHeader = () => {
  const [isVerified, setVerification] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
  }
  return(
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
      {showPopup && (
        <Popup isVerified={isVerified} onClose={closePopup} />
      )}

      </div>
      </header>
  )
}

function App() {;
  return (
    <div className="App">
      <Router>
      <AppHeader/>
        <Routes>
        <Route exact path="/" element={<SendOTP />} />
        <Route exact path="/verify/:phoneNumber" element={<VerifyOTP />} />
        </Routes>
      </Router>
      <Toaster/>
    </div>
  );
}

export default App;
