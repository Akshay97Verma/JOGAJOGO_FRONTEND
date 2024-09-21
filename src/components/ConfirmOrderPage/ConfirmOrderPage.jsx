import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmOrderPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/home'); // Navigates to the homepage
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-green-900 mb-6">Order Confirmed!</h1>
        <p className="text-lg text-gray-700 mb-4">Thank you for your purchase. Your payment was successful!</p>
        <p className="text-gray-600">Your order will be processed shortly. You will receive a confirmation email with the details of your purchase.</p>

        {/* Add any additional order or confirmation information here */}
        <p className="mt-4 text-gray-500">Order ID: <strong>#123456789</strong></p>

        {/* Button to navigate back to the home page */}
        <button
          onClick={handleGoHome}
          className="w-full bg-blue-500 text-white py-3 mt-6 rounded-lg font-medium hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmOrderPage;
