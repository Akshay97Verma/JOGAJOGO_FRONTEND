import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import bgPic from '../../../public/a2.jpg';
import { FaSpinner } from 'react-icons/fa';
import { useThemeColors } from '../../utils/useThemeColor';
import stateCityData from '../../utils/stateCityData';
import { updateUserAddress } from '../../redux/slice/user/addUpdateUserAddressSlice';
import { fetchUserAddress } from '../../redux/slice/user/fetchUserAddressSlice';

const Address = () => {
  const dispatch = useDispatch();
  const isDarkEnabled = useSelector((state) => state.darkmode.dark);
  const colors = useThemeColors(isDarkEnabled);

  const [formData, setFormData] = useState({
    address: '',
    state: '',
    city: '',
    zipCode: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'state') {
      setFormData((prevData) => ({ ...prevData, city: '' }));
    }
  };

  const validateForm = () => {
    const { address, state, city, zipCode } = formData;
    if (!address || !state || !city || !zipCode) {
      setError('All fields are required!');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await dispatch(updateUserAddress(formData)).unwrap();
      setSuccess(true);
    } catch (error) {
      setError('Failed to save address. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ address: '', state: '', city: '', zipCode: '' });
    setSuccess(false);
    setError('');
  };

  const callApiTofetchUserAddress = async () => {
    const userAddress = await dispatch(fetchUserAddress()).unwrap();
    console.log(userAddress.address)
    if (userAddress) {
      setFormData({
        address: userAddress.address.address || '',
        state: userAddress.address.state || '',
        city: userAddress.address.city || '',
        zipCode: userAddress.address.zipCode || ''
      });
    }
  }

  useEffect(() => {
    callApiTofetchUserAddress()
  }, [])

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgPic})` }}
    >
      <div className={`max-w-lg w-full p-8 rounded-lg shadow-lg ${isDarkEnabled ? "bg-[#040836]" : "bg-white/80 backdrop-blur-lg"}`} style={{ color: colors.text }}>
        <h2 className="text-3xl font-bold text-center mb-6">
          Save or Edit Your Address
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && (
          <p className="text-green-500 text-center mb-4">
            🎉 Address saved successfully!
          </p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              style={{ background: colors.cardBg }}
            />
          </div>

          <div>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              style={{ background: colors.cardBg }}
            >
              <option value="">Select a state</option>
              {Object.keys(stateCityData).map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>

          <div>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              style={{ background: colors.cardBg }}
              disabled={!formData.state}
            >
              <option value="">Select a city</option>
              {formData.state && stateCityData[formData.state].map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="Enter postal code"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              style={{ background: colors.cardBg }}
            />
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
            >
              Reset
            </button>
            <button
              type="submit"
              className={`w-full py-2 rounded-lg hover:bg-indigo-600 ${loading ? 'bg-indigo-400' : 'bg-indigo-500 text-white'}`}
              disabled={loading}
            >
              {loading ? <FaSpinner className="animate-spin" /> : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Address;
