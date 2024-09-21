import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importing axios
import bgPic from '../../../public/Baaaground.jpg';
import BASE_URL from '../../../baseUrl'; // Make sure this contains the correct base URL for your API

const Register = () => {
  console.log(BASE_URL);

  const navigate = useNavigate();

  // Updated formData with only required fields
  const [formData, setFormData] = useState({
    name: '',
    userName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email address';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters long';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Making a POST request to register the user
        const response = await axios.post(`${BASE_URL}/auth/register`, formData);
        console.log('User registered successfully:', response.data);
        setIsRegistered(true);
        navigate('/dashboard'); // Navigate to the dashboard after registration
      } catch (error) {
        console.error('Error registering user:', error);
        setErrors({ general: 'Registration failed. Please try again later.' });
      }
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      userName: '',
      email: '',
      password: '',
    });
    setErrors({});
  };

  const goToLogin = () => {
    navigate('/');
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 overflow-hidden">
      <img
        src={bgPic}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full opacity-50"
        loading="lazy"
      />
      <div className="relative z-10 w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl p-8 bg-white shadow-lg rounded-2xl border border-gray-200 bg-opacity-80 backdrop-blur-md">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 md:mb-8 text-center">Register</h2>

        {isRegistered && <p className="text-green-500 text-center mb-6">Registration successful!</p>}
        {errors.general && <p className="text-red-500 text-center mb-6">{errors.general}</p>}

        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
          {/* Name */}
          <input
            type="text"
            name="name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 ease-in-out"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            aria-label="Name"
          />

          {/* Username */}
          <input
            type="text"
            name="userName"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 ease-in-out"
            placeholder="UserName"
            value={formData.userName}
            onChange={handleInputChange}
            required
            aria-label="UserName"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 ease-in-out"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            aria-label="Email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          {/* Password */}
          <input
            type="password"
            name="password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 ease-in-out"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
            aria-label="Password"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

          {/* Register and Reset Buttons */}
          <div className="flex gap-4 mb-6 md:mb-8">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 ease-in-out"
            >
              Register
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="w-full px-6 py-3 bg-gray-300 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-transform duration-300 ease-in-out"
            >
              Reset
            </button>
          </div>

          {/* Already Registered */}
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              Already have an account?{' '}
              <button
                onClick={goToLogin}
                className="text-blue-600 hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
