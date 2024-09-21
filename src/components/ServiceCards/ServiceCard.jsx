// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import servicecardimage from '../../../public/112.jpg'; // Make sure the path is correct

// const ServiceCard = ({ service }) => {
//   const navigate = useNavigate();

//   const handleBookNow = () => {
//     navigate(`/book/${service}`);
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-200">
//       {/* Service Image */}
//       <img 
//         src={servicecardimage} 
//         alt={`${service} service`} 
//         className="w-full h-40 object-cover rounded-t-lg"
//       />
      
//       <div className="p-4">
//         <h2 className="text-lg font-semibold text-gray-800">{service}</h2>
        
//         {/* Book Now Button */}
//         <button 
//           className="mt-4 bg-blue-600 text-white py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors duration-200"
//           onClick={handleBookNow}
//         >
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;



import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service, serviceImage }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/book/${service}`);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-200">
      {/* Service Image */}
      <img 
        src={serviceImage} 
        alt={`${service} service`} 
        className="w-full h-40 object-cover rounded-t-lg"
      />
      
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{service}</h2>
        
        {/* Book Now Button */}
        <button 
          className="mt-4 bg-blue-600 text-white py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          onClick={handleBookNow}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
