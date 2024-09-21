// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const RegisterAsPartner = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     companyName: '',
//     name: '',
//     phone: '',
//     location: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     category: '',
//     agree: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const registerUser = () => {
//     // Simulate registration logic (e.g., API call)
//     console.log("User registered:", formData);
//     // After successful registration, navigate
//     navigate('/partnerdashboard');
//   };

//   const handleRegister = (event) => {
//     event.preventDefault();

//     // Simple validation
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
    
//     if (!formData.agree) {
//       alert("You must agree to the terms and conditions.");
//       return;
//     }

//     // Call the register function
//     registerUser();
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold">Register as Partner</h2>
//       <form className="mt-4" onSubmit={handleRegister}>
//         <input
//           type="text"
//           name="companyName"
//           placeholder="Company Name"
//           value={formData.companyName}
//           onChange={handleChange}
//           className="block w-full p-2 border border-gray-300 rounded mb-4"
//         />
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="block w-full p-2 border border-gray-300 rounded mb-4"
//         />
//         <input
//           type="tel"
//           name="phone"
//           placeholder="Phone No"
//           value={formData.phone}
//           onChange={handleChange}
//           className="block w-full p-2 border border-gray-300 rounded mb-4"
//         />
//         <input
//           type="text"
//           name="location"
//           placeholder="Location"
//           value={formData.location}
//           onChange={handleChange}
//           className="block w-full p-2 border border-gray-300 rounded mb-4"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="block w-full p-2 border border-gray-300 rounded mb-4"
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="block w-full p-2 border border-gray-300 rounded mb-4"
//         />
//         <input
//           type="password"
//           name="confirmPassword"
//           placeholder="Confirm Password"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           className="block w-full p-2 border border-gray-300 rounded mb-4"
//         />
//         <select
//           name="category"
//           value={formData.category}
//           onChange={handleChange}
//           className="block w-full p-2 border border-gray-300 rounded mb-4"
//         >
//           <option value="">Select Category</option>
//           <option value="maid">Maid</option>
//           <option value="cook">Cook</option>
//           <option value="driver">Driver</option>
//           <option value="carpenter">Carpenter</option>
//           <option value="electrician">Electrician</option>
//           <option value="plumber">Plumber</option>
//           <option value="interior">Interior Designer</option>
//           <option value="yoga_teacher">Yoga Teacher</option>
//           <option value="spa">Spa</option>
//         </select>
//         <label className="flex items-center mb-4">
//           <input
//             type="checkbox"
//             name="agree"
//             checked={formData.agree}
//             onChange={handleChange}
//             className="mr-2"
//           />
//           I agree to the terms and conditions
//         </label>
//         <button className="bg-purple-500 text-white py-2 px-4 rounded">Register</button>
//       </form>
//     </div>
//   );
// };

// export default RegisterAsPartner;










import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterAsPartner = () => {
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
    // Simulate registration logic (e.g., API call)
    console.log("User registered:", formData);
    // After successful registration, navigate to dashboard
    navigate('/partnerdashboard');
  };

  const loginUser = () => {
    // Simulate login logic (e.g., API call)
    console.log("User logged in with:", formData);
    // After successful login, navigate to dashboard
    navigate('/partnerdashboard');
  };

  const handleRegister = (event) => {
    event.preventDefault();

    if (isExistingUser) {
      // Login logic for existing users
      if (!formData.password || (!formData.UserID && !formData.phone && !formData.email)) {
        alert("Please enter your UserID, phone, or email, and password to log in.");
        return;
      }
      loginUser();
    } else {
      // Registration logic for new users
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
    <div>
      <h2 className="text-2xl font-bold">{isExistingUser ? "Login" : "Register as Partner"}</h2>
      <form className="mt-4" onSubmit={handleRegister}>
        {!isExistingUser && (
          <>
            <input
              type="text"
              name="UserID"
              placeholder="User ID"
              value={formData.UserID}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded mb-4"
              required={!isExistingUser}
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded mb-4"
              required={!isExistingUser}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone No"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded mb-4"
              required={!isExistingUser}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded mb-4"
            />
            <input
              type="email"
              name="email"
              placeholder="Email (optional)"
              value={formData.email}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded mb-4"
            />
          </>
        )}
        
        {isExistingUser && (
          <>
            <input
              type="text"
              name="loginIdentifier"
              placeholder="Enter UserID, Phone, or Email"
              value={formData.UserID || formData.phone || formData.email}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded mb-4"
              required
            />
          </>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded mb-4"
          required
        />
        
        {!isExistingUser && (
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded mb-4"
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
        
        <button className="bg-purple-500 text-white py-2 px-4 rounded">
          {isExistingUser ? "Login" : "Register"}
        </button>
      </form>

      <div className="mt-4">
        <p>
          {isExistingUser ? "New user?" : "Already registered?"}
          <button
            type="button"
            className="text-blue-500 ml-2"
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
