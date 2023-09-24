import React from 'react';

function Popup({ isVerified, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded shadow-md">
        <h2>{isVerified ? 'Verification Successful' : 'Verification Failed'}</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Popup;