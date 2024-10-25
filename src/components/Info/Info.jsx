import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import bgPic from '../../../public/about.jpg'; // About section
import bgPic2 from '../../../public/serv.jpg'; // Services section
import bgPic3 from '../../../public/c.jpg'; // Contact Us section
import bgPic4 from '../../../public/share.jpg'; // Share section
import { useSelector } from 'react-redux';
import { useThemeColors } from '../../utils/useThemeColor';

const Info = () => {
  const isDarkEnabled = useSelector((state) => state.darkmode.dark);
  const colors = useThemeColors(isDarkEnabled);

  const [currentTab, setCurrentTab] = useState('about');

  const renderContent = () => {
    switch (currentTab) {
      case 'about':
        return (
          <div className="" style={{ background: colors.secondbackground }}>
            <h3 className="text-3xl font-semibold mb-4">About Joga Jogo</h3>
            <p className="leading-relaxed mb-4">
              Joga Jogo is a cutting-edge tech company dedicated to providing innovative solutions for users worldwide. Our mission is to deliver high-quality products and services that cater to the needs of both businesses and individuals.
            </p>
            <img src={bgPic} alt="About Us" className="mt-4 rounded-lg shadow-lg w-full h-auto object-cover" />
            <p className="mt-4">
              With a passionate team of professionals, we are focused on delivering creativity and efficiency to drive the success of our clients. At Joga Jogo, innovation meets execution.
            </p>
          </div>
        );
      case 'contact':
        return (
          <div className="">
            <h3 className="text-3xl font-semibold mb-4">Contact Us</h3>
            <p className="leading-relaxed mb-4">
              Get in touch with us at Joga Jogo for inquiries or support.
            </p>
            <p className="mb-4">
              <FaEnvelope className="inline-block mr-2" /> Email: <a href="mailto:support@jogajogo.com" className="text-blue-600 hover:underline">support@jogajogo.com</a>
            </p>
            <p className="mb-4">
              <FaPhone className="inline-block mr-2" /> Phone: +1 (234) 567-8900
            </p>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <FaInstagram size={24} />
              </a>
            </div>
            <img src={bgPic3} alt="Contact Us" className="mt-4 rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
        );
      case 'services':
        return (
          <div className="">
            <h3 className="text-3xl font-semibold mb-4">Our Services</h3>
            <p className="leading-relaxed mb-4">
              At Joga Jogo, we offer a variety of services aimed at helping you grow your business or improve your personal productivity.
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Maid:</strong> "Your space, spotless and serene."</li>
              <li><strong>Cook:</strong> "Delicious meals, delivered with love."</li>
              <li><strong>Driver:</strong> "Ride in comfort, reach with ease."</li>
              <li><strong>Carpenter:</strong> "Crafting wood, creating memories."</li>
              <li><strong>Electrician:</strong> "Bringing power to your everyday."</li>
              <li><strong>Plumber:</strong> "Fixing leaks, restoring flow."</li>
              <li><strong>Interior:</strong> "Designing dreams, one room at a time."</li>
              <li><strong>Yoga Teacher:</strong> "Bringing balance to your body and mind."</li>
              <li><strong>Spa:</strong> "Relax, unwind, and rejuvenate."</li>
            </ul>
            <img src={bgPic2} alt="Our Services" className="mt-4 rounded-lg shadow-lg w-full h-auto object-cover" />
          </div>
        );
      case 'share':
        return (
          <div className="">
            <h3 className="text-3xl font-semibold mb-4">Share Joga Jogo</h3>
            <p className="leading-relaxed mb-4">
              Love what we do? Share our platform with your friends and family! Spread the word about the exceptional services we offer at Joga Jogo.
            </p>
            <img src={bgPic4} alt="Share" className="mt-4 rounded-lg shadow-lg w-full h-auto object-cover" />
            <p className="mt-4">Your support means the world to us!</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100 flex items-center justify-center" style={{ background: colors.secondbackground }}>
      <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-xl max-w-3xl w-full mx-auto" style={{ background: colors.secondbackground, color: colors.text }}>
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">Welcome to Joga Jogo</h2>
        <div className="flex flex-wrap justify-center space-x-4 mb-8">
          <button
            onClick={() => setCurrentTab('about')}
            className={`py-2 px-6 rounded-lg font-semibold transition duration-300 ease-in-out transform ${currentTab === 'about'
              ? 'bg-blue-500 text-white scale-110'
              : `${isDarkEnabled ? 'bg-[#0e1a49] text-gray-200' : 'bg-gray-200 text-gray-700'} hover:bg-gray-300`
              }`}
          >
            About Us
          </button>

          <button
            onClick={() => setCurrentTab('services')}
            className={`py-2 px-6 rounded-lg font-semibold transition duration-300 ease-in-out transform ${currentTab === 'services'
              ? 'bg-blue-500 text-white scale-110'
              : `${isDarkEnabled ? 'bg-[#0e1a49] text-gray-200' : 'bg-gray-200 text-gray-700'} hover:bg-gray-300`
              }`}
          >
            Services
          </button>

          <button
            onClick={() => setCurrentTab('contact')}
            className={`py-2 px-6 rounded-lg font-semibold transition duration-300 ease-in-out transform ${currentTab === 'contact'
              ? 'bg-blue-500 text-white scale-110'
              : `${isDarkEnabled ? 'bg-[#0e1a49] text-gray-200' : 'bg-gray-200 text-gray-700'} hover:bg-gray-300`
              }`}
          >
            Contact Us
          </button>

          <button
            onClick={() => setCurrentTab('share')}
            className={`py-2 px-6 rounded-lg font-semibold transition duration-300 ease-in-out transform ${currentTab === 'share'
                ? 'bg-blue-500 text-white scale-110'
                : `${isDarkEnabled ? 'bg-[#0e1a49] text-gray-200' : 'bg-gray-200 text-gray-700'} hover:bg-gray-300`
              }`}
          >
            Share
          </button>

        </div>

        <div className="mt-4">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Info;
