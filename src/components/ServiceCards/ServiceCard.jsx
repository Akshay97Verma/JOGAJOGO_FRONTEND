import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useThemeColors } from "../../utils/useThemeColor";

const ServiceCard = ({ service, serviceImage }) => {
  const isDarkEnabled = useSelector((state) => state.darkmode.dark);
  const colors = useThemeColors(isDarkEnabled);
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/dashboard/${service}`);
  };

  return (
    <div
      className=" shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-transform duration-300"
      style={{ background: colors.cardBg, color: colors.text }}
    >
      <img
        src={serviceImage}
        alt={`${service} service`}
        className="w-full h-44 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold  text-center">{service}</h2>
        <button
          className="mt-4 bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          onClick={handleBookNow}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
