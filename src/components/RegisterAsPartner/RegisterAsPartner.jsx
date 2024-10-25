import logo from '../../../public/booking.png'; // Correct the path as needed
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useThemeColors } from '../../utils/useThemeColor';

const RegisterAsPartner = () => {
  const isDarkEnabled = useSelector((state) => state.darkmode.dark);
  const colors = useThemeColors(isDarkEnabled);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    UserID: '',
    name: '',
    phone: '',
    address: '',
    email: '',
    password: '',
    category: '',
    agree: false,
  });

  const [isExistingUser, setIsExistingUser] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const registerUser = () => {
    console.log("User registered:", formData);
    navigate('/partnerdashboard', { state: { userDetails: formData } });
  };

  const loginUser = () => {
    console.log("User logged in with:", formData);
    navigate('/partnerdashboard', { state: { userDetails: formData } });
  };

  const handleRegister = (event) => {
    event.preventDefault();

    if (isExistingUser) {
      if (!formData.password || (!formData.UserID && !formData.phone && !formData.email)) {
        alert("Please enter your UserID, phone, or email, and password to log in.");
        return;
      }
      loginUser();
    } else {
      if (!formData.UserID || !formData.name || !formData.phone) {
        alert("UserID, Name, and Phone are mandatory fields for registration!");
        return;
      }

      if (formData.password === "") {
        alert("Password is required.");
        return;
      }

      if (!formData.agree) {
        alert("You must agree to the terms and conditions.");
        return;
      }

      registerUser();
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 shadow-md rounded-lg">
      <div className="text-center mb-6">
        <img src={logo} alt="Logo" className="w-full h-auto object-cover mb-4" />
      </div>
      <h2 className="text-2xl font-bold text-center">{isExistingUser ? "Login" : "Register as Partner"}</h2>
      <form className="space-y-4" onSubmit={handleRegister}>
        {!isExistingUser && (
          <>
            <input
              type="text"
              name="UserID"
              placeholder="User ID"
              value={formData.UserID}
              onChange={handleChange}
              className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-300"
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-300"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone No"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-300"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Email (optional)"
              value={formData.email}
              onChange={handleChange}
              className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-300"
            />
          </>
        )}
        
        {isExistingUser && (
          <input
            type="text"
            name="loginIdentifier"
            placeholder="Enter UserID, Phone, or Email"
            value={formData.UserID || formData.phone || formData.email}
            onChange={handleChange}
            className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-300"
            required
          />
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-300"
          required
        />
        
        {!isExistingUser && (
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-300"
          >
            <option value="">Select Category</option>
            <option value="maid">Maid</option>
            <option value="cook">Cook</option>
            <option value="driver">Driver</option>
            <option value="carpenter">Carpenter</option>
            <option value="electrician">Electrician</option>
            <option value="plumber">Plumber</option>
            <option value="interior">Interior Designer</option>
            <option value="yoga_teacher">Yoga Teacher</option>
            <option value="spa">Spa</option>
          </select>
        )}
        
        {!isExistingUser && (
          <label className="flex items-center mb-4">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mr-2"
            />
            I agree to the terms and conditions
          </label>
        )}
        
        <button className="w-full bg-purple-500 text-white py-3 rounded hover:bg-purple-600 transition duration-200">
          {isExistingUser ? "Login" : "Register"}
        </button>
      </form>

      <div className="mt-4 text-center">
        <p>
          {isExistingUser ? "New user?" : "Already registered?"}
          <button
            type="button"
            className="text-blue-500 hover:underline ml-2"
            onClick={() => setIsExistingUser(!isExistingUser)}
          >
            {isExistingUser ? "Register Here" : "Login Here"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterAsPartner;
