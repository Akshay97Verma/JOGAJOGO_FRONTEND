import { useState } from 'react';
import bgPic from '../../../public/Baaaground.jpg'; // Background image
import ServiceCard from './ServiceCard';

const ServiceCards = () => {
  const servicesList = [
    'Maid', 'Cook', 'Driver', 'Carpenter', 'Electrician', 
    'Plumber', 'Interior', 'Yoga Teacher', 'Spa'
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = servicesList.filter(service =>
    service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgPic})` }}
    >
      <div className="p-8 bg-white bg-opacity-80 rounded-lg shadow-lg max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-600">JoGa JoGo Services</h1>
        
        <input 
          type="text" 
          placeholder="🔍 Search for a service..." 
          className="border border-gray-400 p-4 w-full mb-8 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))
          ) : (
            <p className="col-span-4 text-center text-gray-600">No services found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
