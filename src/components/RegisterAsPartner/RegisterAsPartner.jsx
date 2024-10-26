import logo from "../../../public/booking.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { serviceAuthRegister } from "../../redux/slice/serviceAuthSlice";
import { toast } from "react-toastify";

const RegisterAsPartner = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    category: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  //multiple selected

  // const handleChangeSelect = (e) => {
  //   const { options } = e.target;
  //   console.log(options);
  //   const selectedCategories = Array.from(options)
  //     .filter((option) => option.selected)
  //     .map((option) => option.value);
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     category: Array.from(
  //       new Set([...prevState.category, ...selectedCategories])
  //     ),
  //   }));
  // };

  const handleChangeSelect = (e) => {
    const { options } = e.target;
    console.log(options);
    const selectedCategories = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setFormData((prevState) => ({
      ...prevState,
      category: selectedCategories.join(", "),
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await dispatch(serviceAuthRegister(formData));
      if (result?.payload?.success) {
        toast.success(result.payload.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const partnerlogin = () =>{
    navigate("/dashboard/partner-login");
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
      <h2 className="text-2xl font-bold text-center">
        {" "}
        Register as partner
      </h2>
      <form className="space-y-4 py-2" onSubmit={handleSubmit}>
        <>
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
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-300"
          />
        </>
        <input
          type="text"
          name="loginIdentifier"
          placeholder="Enter UserID, Phone, or Email"
          value={formData.UserID || formData.phone || formData.email}
          onChange={handleChange}
          className="block w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-300"
          required
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
        <select
          name="category"
          value={formData.category}
          onChange={handleChangeSelect}
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
        <button className="w-full bg-purple-500 text-white py-3 rounded hover:bg-purple-600 transition duration-200">
          Register
        </button>
      </form>

      <div className="mt-4 text-center">
        <p>
          <button onClick={partnerlogin} type="button" className="text-blue-500 hover:underline ml-2">
            Login Here
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterAsPartner;
