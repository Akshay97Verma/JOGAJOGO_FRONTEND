import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated from useHistory
import bgPic from '../../../public/123.avif'; // Background image

import ProfileEdit from '../ProfileEdit/ProfileEdit';
import Address from '../Address/Address';
import OffersCoupons from '../OffersCoupons/OffersCoupons';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import RegisterAsPartner from '../RegisterAsPartner/RegisterAsPartner';
import Share from '../Share/Share';

const Profile = () => {
  const [section, setSection] = useState('profile');
  const navigate = useNavigate(); // Updated from useHistory

  const renderSection = () => {
    switch (section) {
      case 'edit-profile':
        return <ProfileEdit />;
      case 'address':
        return <Address />;
      case 'offers-coupons':
        return <OffersCoupons />;
      case 'about-us':
        return <AboutUs />;
      case 'contact-us':
        return <ContactUs />;
      case 'register-as-partner':
        return <RegisterAsPartner />;
      case 'share':
        return <Share />;
      default:
        return <h1 className="text-4xl font-bold">Your Profile</h1>;
    }
  };

  const handleLogout = () => {
    // Clear user session or token (add your logic here)
    navigate('/login'); // Updated from history.push to navigate
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gray-100">
      <img
        src={bgPic}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full opacity-50"
      />
      <div className="relative p-8 bg-white bg-opacity-90 rounded shadow-lg w-full md:w-3/4 lg:w-2/3 mx-auto z-10">
        {/* Navigation Buttons */}
        <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <button
            onClick={() => setSection('edit-profile')}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            My Profile Edit
          </button>
          <button
            onClick={() => setSection('address')}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            Address (Save/Edit)
          </button>
          <button
            onClick={() => setSection('offers-coupons')}
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded"
          >
            Offers & Coupons
          </button>
          <button
            onClick={() => setSection('about-us')}
            className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded"
          >
            About Us
          </button>
          <button
            onClick={() => setSection('contact-us')}
            className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded"
          >
            Contact Us
          </button>
          <button
            onClick={() => setSection('register-as-partner')}
            className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded"
          >
            Register as Partner
          </button>
          <button
            onClick={() => setSection('share')}
            className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded"
          >
            Share
          </button>
          <button
            onClick={handleLogout} // Call handleLogout on click
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>

        {/* Render the selected section */}
        <div className="bg-white p-6 rounded shadow-lg">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default Profile;
