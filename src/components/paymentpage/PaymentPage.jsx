import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import bgPic from '../../../public/congra.avif';  // Background image import
import BASE_URL from '../../../baseUrl';  // Base URL import

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract the query parameters from the URL
  const queryParams = new URLSearchParams(location.search);
  const service = queryParams.get('service');
  const price = queryParams.get('price');

  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    console.log({ paymentMethod, cardNumber, expiryDate, cvv });

    // You can use BASE_URL here if needed for any API calls
    // Example: fetch(`${BASE_URL}/payment`, { method: 'POST', body: ... });

    // After payment process, navigate to a confirmation page
    navigate('/confirm-order');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgPic})` }}  // Setting the background image using inline style
    >
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg mx-auto bg-opacity-90 backdrop-blur-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Payment for {service}</h1>
        <p className="text-lg text-gray-700 mb-4">Amount: <span className="font-semibold">{price}</span></p>

        <form onSubmit={handlePayment}>
          {/* Payment Method */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Payment Method</label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="credit-card">Credit Card</option>
              <option value="debit-card">Debit Card</option>
              <option value="upi">UPI</option>
              <option value="net-banking">Net Banking</option>
            </select>
          </div>

          {/* Show card details if payment method is credit/debit card */}
          {(paymentMethod === 'credit-card' || paymentMethod === 'debit-card') && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                />
              </div>

              <div className="flex justify-between mb-4 space-x-4">
                <div className="w-1/2">
                  <label className="block text-gray-700 font-medium mb-2">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    required
                  />
                </div>

                <div className="w-1/2">
                  <label className="block text-gray-700 font-medium mb-2">CVV</label>
                  <input
                    type="password"
                    placeholder="•••"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    required
                  />
                </div>
              </div>
            </>
          )}

          {/* Payment Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Pay {price}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
