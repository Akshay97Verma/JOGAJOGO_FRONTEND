import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bgPic from "../../../public/baaaground.jpg";
import coverImage from "../../../public/login3.avif";
import BASE_URL from "../../../baseUrl";
import { useDispatch } from "react-redux";
// Import the eye icons
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AuthUser } from "../../redux/slice/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const { email, password } = formData;

      if (email.trim() === "" || password.trim() === "") {
        setError("Email and password are required.");
        return;
      }

      setError("");
      const result = await dispatch(AuthUser(formData));
      console.log(result.payload);
      if (result.payload.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error)
    }

    
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 p-4 relative overflow-hidden">
      <div className="relative z-10 w-full max-w-md bg-white p-8 border border-gray-300 rounded-lg shadow-lg shadow-blue-500/50 transition-transform transform hover:scale-105 hover:shadow-xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800">JOGA JOGO</h1>
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
              type="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 ease-in-out"
              placeholder="Email Id"
              value={formData.email}
              onChange={handleChange}
              aria-label="UserName"
              required
            />
          </div>

          <div className="mb-6 relative">
            <input
              type={showPassword ? "text" : "password"} // Toggle between text and password
              name="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 ease-in-out"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              aria-label="Password"
              required
            />
            {/* Eye Icon to toggle password visibility */}
            <span
              className="absolute inset-y-0 right-4 flex items-center cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)} // Toggle show/hide password
            >
              {showPassword ? (
                <AiFillEye size={24} />
              ) : (
                <AiFillEyeInvisible size={24} />
              )}
            </span>
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2 text-blue-600"
              aria-label="Remember me"
            />
            <label htmlFor="rememberMe" className="text-gray-700">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300 ease-in-out"
          >
            Login
          </button>
          <div className="mt-6 text-center">
            <a
              href="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </a>
            <br />
            <a href="/register" className="text-blue-500 hover:underline">
              Create an Account
            </a>
          </div>
        </form>

        <footer className="mt-8 text-center text-gray-600">
          <p>
            Made with <span className="text-red-500">♥</span> by JOGA JOGO
          </p>
          <a href="/privacy-policy" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Login;
