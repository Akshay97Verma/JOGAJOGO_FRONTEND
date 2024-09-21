import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PartnerDashboard = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    phone: '',
    location: '',
    email: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Handle saving the data here (e.g., local state or context)
    console.log("Data saved:", formData);
    // Navigate or perform any other action
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Partner Dashboard</h2>

      <form onSubmit={handleSave} className="mb-6">
        <div className="mb-4">
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="block w-full p-2 border border-gray-300 rounded"
            required
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
        </div>
        <button
          type="submit"
          className="bg-purple-500 text-white py-2 px-4 rounded"
        >
          Save
        </button>
      </form>

      <button
        onClick={() => navigate('/login')}
        className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default PartnerDashboard;
