import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importing axios
import bgPic from '../../../public/baaaground.jpg';
import BASE_URL from '../../../baseUrl'; // Make sure this is correctly set up

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });
  const [error, setError] = useState('');

  // Update state with form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const { userName, password } = formData;

    // Basic validation
    if (userName.trim() === '' || password.trim() === '') {
      setError('userName and password are required.');
      return;
    }

    setError('');

    // Send a POST request to login API
    axios.post(`${BASE_URL}/auth/login`, { userName, password })
      .then((response) => {
        // Handle success response
        console.log('Login successful:', response.data);
        // Navigate to the dashboard on successful login
        navigate('/dashboard');
      })
      .catch((error) => {
        // Handle error (incorrect login, server issues, etc.)
        console.error('Login failed:', error.response ? error.response.data : error.message);
        setError('Login failed. Please check your userName and password.');
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 p-4 relative overflow-hidden">
      <img 
        src="/baaaground.jpg" 
        alt="Background" 
        className="absolute inset-0 object-cover w-full h-full opacity-50" 
        loading="lazy"
      />
      <div className="relative z-10 w-full max-w-md bg-white p-8 border border-gray-300 rounded-lg shadow-lg shadow-blue-500/50 transition-transform transform hover:scale-105 hover:shadow-xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800">Jogajogo</h1>
          <p className="text-gray-600 text-lg">Login to your account</p>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="userName"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 ease-in-out"
              placeholder="userName"
              value={formData.userName}
              onChange={handleChange}
              aria-label="userName"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 ease-in-out"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              aria-label="Password"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="mb-6 flex items-center">
            <input 
              type="checkbox" 
              id="rememberMe" 
              className="mr-2 text-blue-600"
              aria-label="Remember me"
            />
            <label htmlFor="rememberMe" className="text-gray-700">Remember me</label>
          </div>
          <button 
            type="submit" 
            className="w-full px-4 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300 ease-in-out"
          >
            Login
          </button>
          <div className="mt-6 text-center">
            <a href="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</a>
            <br />
            <a href="/register" className="text-blue-500 hover:underline">Create an Account</a>
          </div>
        </form>

        <footer className="mt-8 text-center text-gray-600">
          <p>Made with <span className="text-red-500">♥</span> by Jogajogo</p>
          <a href="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</a>
        </footer>
      </div>
    </div>
  );
};

export default Login;
