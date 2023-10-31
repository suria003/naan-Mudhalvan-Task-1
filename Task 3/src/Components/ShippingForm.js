import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./ShippingForm.css"

const ShippingForm = () => {
  const [shippingAddress, setShippingAddress] = useState('');
  const navigate = useNavigate();

  const handleProceedToHome = () => {
    navigate('/home');
  };

  return (
    <div className="shipping-container">
      <h2>Shipping Information</h2>
      <div className="shipping-form">
        <input
          type="text"
          placeholder="Enter your shipping address"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
        />
        <button onClick={handleProceedToHome}>Proceed to Home</button>
      </div>
    </div>
  );
};

export default ShippingForm;
