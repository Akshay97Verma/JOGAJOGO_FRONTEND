import { useState, useMemo } from 'react';
import bgPic from '../../../public/black1.webp';
import ServiceCard from './ServiceCard';

// Importing images
import maidImg from '../../../public/maid.jpg';
import cookImg from '../../../public/cook.png';
import driverImg from '../../../public/driver.avif';
import carpenterImg from '../../../public/carpenter.webp';
import electricianImg from '../../../public/electrician1.jpeg';
import plumberImg from '../../../public/plumber.avif';
import interiorImg from '../../../public/Interior.jpg';
import yogaTeacherImg from '../../../public/Yoga Teacher.avif';
import spaImg from '../../../public/spa.avif';
import { useSelector } from 'react-redux';
import { useThemeColors } from '../../utils/useThemeColor';

const ServiceCards = () => {
  const servicesList = [
    'Maid', 'Cook', 'Driver', 'Carpenter', 'Electrician',
    'Plumber', 'Interior', 'Yoga Teacher', 'Spa'
  ];

  const imagesList = [
    maidImg,
    cookImg,
    driverImg,
    carpenterImg,
    electricianImg,
    plumberImg,
    interiorImg,
    yogaTeacherImg,
    spaImg
  ];

  const [searchTerm, setSearchTerm] = useState('');

  // Memoizing filtered services for optimization
  const filteredServices = useMemo(() =>
    servicesList.filter(service =>
      service.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]);

  const isDarkEnabled = useSelector((state) => state.darkmode.dark);
  const colors = useThemeColors(isDarkEnabled);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bgPic})`, background: colors.background,color:colors.text }}
    >
      <div className="p-6 md:p-10 lg:p-14  bg-opacity-90 rounded-xl shadow-2xl max-w-7xl mx-auto transition-transform duration-300" style={{background:colors.secondbackground}}>
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8  font-sans tracking-tight">
          JoGa JoGo Services
        </h1>

        <input
          type="text"
          placeholder="Search services..."
          className={`border p-3 md:p-4 w-full mb-6 rounded-lg shadow-md focus:outline-none focus:ring-4 transition-all duration-300 ease-in-out text-lg 
    ${isDarkEnabled ? 'bg-[#0e1a49] text-white border-gray-600 focus:ring-gray-400' : 'bg-white text-black border-gray-300 focus:ring-blue-500'}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                serviceImage={imagesList[index] || defaultImage} // Added fallback image
              />
            ))
          ) : (
            <p className="col-span-4 text-center text-gray-500">No services found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
