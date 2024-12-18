import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import coverImage from '../../../public/LOGIN 2.avif'; // Import your cover image here
import BASE_URL from '../../../baseUrl';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Import eye icons from react-icons
import { useDispatch } from 'react-redux';
import { AuthRegister } from '../../redux/slice/authSlice';
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email address';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters long';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    try {
       e.preventDefault();
      const result = await dispatch(AuthRegister(formData))
      console.log(result)
      if(result.payload?.success){
        navigate('/dashboard');
        toast.success(result.payload.message)
      }
    } catch (error) {
     console.log(error) 
    }
   
  };

  const handleReset = () => {
    setFormData({
      name: '',
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
      <div className="relative z-10 w-full max-w-4xl p-8 bg-white shadow-lg rounded-2xl border border-gray-200 bg-opacity-80 backdrop-blur-md flex flex-col md:flex-row items-center">

        {/* Form Section - Left Side */}
        <div className="md:w-1/2 w-full p-4 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 text-center md:text-left">Register</h2>

          {isRegistered && <p className="text-green-500 text-center mb-6">Registration successful!</p>}
          {errors.general && <p className="text-red-500 text-center mb-6">{errors.general}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
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
            <div className="relative">
              <input
                type={showPassword ? 'password' : 'text'} // Toggle between text and password
                name="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 ease-in-out"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                aria-label="Password"
              />
              <span
                className="absolute inset-y-0 right-4 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FiEyeOff size={24} /> : <FiEye size={24} />}
              </span>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

            {/* Register and Reset Buttons */}
            <div className="flex gap-4">
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

        {/* Image Section - Right Side */}
        <div className="md:w-1/2 w-full flex justify-center p-4">
          <img
            src={coverImage}
            alt="Cover"
            className="w-full h-auto rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
