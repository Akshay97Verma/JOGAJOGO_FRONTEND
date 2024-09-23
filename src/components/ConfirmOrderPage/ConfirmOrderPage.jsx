import React from 'react';
import { useNavigate } from 'react-router-dom';
import pic from '../../../public/13.jpeg'; // Image import

const ConfirmOrderPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/home'); // Navigates to the homepage
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-300 to-green-500">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg mx-auto transform transition-transform hover:scale-105 border border-green-400">
        <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">🎉 Order Confirmed!</h1>
        <p className="text-lg text-gray-800 mb-4 text-center">Thank you for your purchase. Your payment was successful!</p>
        <p className="text-gray-700 mb-4 text-center">Your order will be processed shortly. You will receive a confirmation email with the details of your purchase.</p>

        <p className="mt-4 text-gray-500 text-center">Order ID: <strong>#123456789</strong></p>

        <button
          onClick={handleGoHome}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 mt-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out shadow-lg transform hover:translate-y-1"
        >
          Back to Home
        </button>

        <div className="mt-6">
          <img src={pic} alt="Confirmation" className="w-full h-auto rounded-lg shadow-xl border-4 border-white transform transition-transform hover:scale-105" />
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrderPage;
