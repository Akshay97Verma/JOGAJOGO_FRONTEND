import React, { useState } from 'react';
import bgPic from '../../../public/a2.jpg'; // Importing your background image
import { FaSpinner } from 'react-icons/fa'; 
import { useSelector } from 'react-redux';
import { useThemeColors } from '../../utils/useThemeColor';

const Address = () => {

  const isDarkEnabled = useSelector((state)=> state.darkmode.dark);
  const colors = useThemeColors(isDarkEnabled);

  const [formData, setFormData] = useState({ address: '', city: '', postalCode: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form validation
  const validateForm = () => {
    const { address, city, postalCode } = formData;
    if (!address || !city || !postalCode) {
      setError('All fields are required!');
      return false;
    }
    setError('');
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000); // Simulate a network request (2 seconds delay)
  };

  // Reset form fields
  const handleReset = () => {
    setFormData({ address: '', city: '', postalCode: '' });
    setSuccess(false);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgPic})` }}
    >
      <div className={`max-w-lg w-full  p-8 rounded-lg shadow-lg ${isDarkEnabled ? "bg-[#040836]" : "bg-white/80 backdrop-blur-lg"}`} style={{color:colors.text}}>
        <h2 className="text-3xl font-bold text-center mb-6">
          Save or Edit Your Address
        </h2>

        {/* Error Message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Success Message */}
        {success && (
          <p className="text-green-500 text-center mb-4">
            🎉 Address saved successfully!
          </p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Address Input */}
          <div>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              style={{background:colors.cardBg}}
            />
          </div>

          {/* City Input */}
          <div>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              style={{background:colors.cardBg}}

            />
          </div>

          {/* Postal Code Input */}
          <div>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="Postal Code"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              style={{background:colors.cardBg}}

            />
          </div>

          {/* Submit and Reset Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className={`w-1/2 bg-green-500 text-white py-2 rounded-lg flex justify-center items-center ${
                loading ? 'opacity-50' : 'hover:bg-green-600 transition duration-300'
              }`}
              disabled={loading}
            >
              {loading ? (
                <FaSpinner className="animate-spin mr-2" /> // Show loading spinner
              ) : (
                'Save Address'
              )}
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="w-1/2 bg-gray-300 text-gray-700 py-2 rounded-lg ml-2 hover:bg-gray-400 transition duration-300 shadow-lg"
              style={{background:colors.cardBg,color:colors.text}}

            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Address;
