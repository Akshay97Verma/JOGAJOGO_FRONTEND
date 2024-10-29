import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import bgPic from "../../../public/12.jpeg"; // Adjust the path if needed
import { useSelector } from "react-redux";
import { useThemeColors } from "../../utils/useThemeColor";
import Razorpay from "../Razorpay/Razorpay";

const BookingAndPaymentPage = () => {
  const isDarkEnabled = useSelector((state) => state.darkmode.dark);
  const colors = useThemeColors(isDarkEnabled);
  const { service } = useParams();
  
  const [info, setInfo] = useState({
    name: "",
    contact: "",
    address: "",
    schedule: "",
    price: 900,
    service: service
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to validate form fields
  const isFormValid = () => {
    const phonePattern = /^[6-9]\d{9}$/; // Simple phone validation (India-specific)
    const isFutureDate = new Date(info.schedule) > new Date(); // Ensures the schedule is a future date
    return (
      info.name.trim() &&
      phonePattern.test(info.contact) &&
      info.address.trim() &&
      info.schedule &&
      isFutureDate
    );
  };

  const handleInputField = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div
      className="min-h-screen p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgPic})` }}
    >
      <div
        className=" bg-opacity-80 p-6 rounded-lg shadow-md max-w-md mx-auto"
        style={{ background: colors.secondbackground, color: colors.text }}
      >
        <h1 className="text-3xl font-bold mb-4">
          Booking and Payment for {service}
        </h1>
        <p className="mb-6 ">
          Please fill in your details and confirm your booking for {service}.
        </p>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Details</h2>
          <p className="">Service: {service}</p>
          <p className="">Price: {info.price}</p>
        </div>

        {/* Combined Form for Booking and Payment */}
        <form
          className=" p-6 rounded-lg shadow-md"
          style={{ background: colors.cardBg }}
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg text-gray-800"
              name="name"
              value={info.name}
              onChange={handleInputField}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block">Contact Information</label>
            <input
              type="tel"
              className="w-full p-2 border border-gray-300 rounded-lg text-gray-800"
              placeholder="Enter 10-digit mobile number"
              name="contact"
              value={info.contact}
              onChange={handleInputField}
              required
            />
            {!/^[6-9]\d{9}$/.test(info.contact) && info.contact && (
              <p className="text-red-600 text-sm">Invalid phone number</p>
            )}
          </div>

          <div className="mb-4" style={{ color: colors.text }}>
            <label className="block">Address</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg text-gray-800"
              name="address"
              value={info.address}
              onChange={handleInputField}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block ">Schedule (Date & Time)</label>
            <input
              type="datetime-local"
              className="w-full p-2 border border-gray-300 rounded-lg text-gray-800"
              name="schedule"
              value={info.schedule}
              onChange={handleInputField}
              required
            />
            {new Date(info.schedule) <= new Date() && info.schedule && (
              <p className="text-red-600 text-sm">
                Please select a future date and time
              </p>
            )}
          </div>

          <button
            type="button"
            disabled={!isFormValid() || isSubmitting}
            className={`w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Processing..." : <Razorpay info={info} />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingAndPaymentPage;
