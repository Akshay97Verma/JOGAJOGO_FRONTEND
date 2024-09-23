import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service, serviceImage }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/book/${service}`);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-transform duration-300">
      <img 
        src={serviceImage} 
        alt={`${service} service`} 
        className="w-full h-44 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 text-center">{service}</h2>
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
