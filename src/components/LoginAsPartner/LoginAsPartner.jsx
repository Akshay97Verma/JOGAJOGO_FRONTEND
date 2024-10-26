import React, { useState } from "react";
import logo from "../../../public/booking.png";

const LoginAsPartner = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: type === "checkbox" ? checked : value,
        }));
      };
    
    const handleSubmit = () =>{

    }
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="text-center mb-6">
        <img
          src={logo}
          alt="Logo"
          className="w-full h-auto object-cover mb-4"
        />
      </div>
      <h2 className="text-2xl font-bold text-center"> Login as partner</h2>
      <form className="space-y-4 py-2" onSubmit={handleSubmit}>
        <>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-300"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-300"
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-3 rounded hover:bg-purple-600 transition duration-200"
          >
            Login
          </button>
        </>
      </form>

      <div className="mt-4 text-center">
        <p>
          <button
            type="button"
            className="text-blue-500 hover:underline ml-2"
          >
            Register Here
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginAsPartner;
