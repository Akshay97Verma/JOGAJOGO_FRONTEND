import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import bgPic from '../../../public/baaaground.jpg';
import coverImage from '../../../public/login3.avif';
import BASE_URL from '../../../baseUrl';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { userName, password } = formData;

    if (userName.trim() === '' || password.trim() === '') {
      setError('userName and password are required.');
      return;
    }

    setError('');

    axios.post(`${BASE_URL}/auth/login`, { userName, password })
      .then((response) => {
        console.log('Login successful:', response.data);
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error('Login failed:', error.response ? error.response.data : error.message);
        setError('Login failed. Please check your userName and password.');
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 p-4 relative overflow-hidden">
      <div className="relative z-10 w-full max-w-md bg-white p-8 border border-gray-300 rounded-lg shadow-lg shadow-blue-500/50 transition-transform transform hover:scale-105 hover:shadow-xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800">Jogajogo</h1>
          <p className="text-gray-600 text-lg">Login to your account</p>
        </header>

        {/* Cover Image inside the form */}
        <div className="mb-4">
          <img 
            src={coverImage} 
            alt="Cover" 
            className="object-cover w-full h-40 rounded-md mb-4" 
          />
        </div>

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
