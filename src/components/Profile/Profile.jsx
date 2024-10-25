import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgPic from '../../../public/b2.jpg';

import ProfileEdit from '../ProfileEdit/ProfileEdit';
import Address from '../Address/Address';
import PostWorkLeave from '../PostWorkLeave/PostWorkLeave';
import Info from '../Info/Info';
import { useSelector } from 'react-redux';
import { useThemeColors } from '../../utils/useThemeColor';

const Profile = () => {
  const [section, setSection] = useState('profile');
  const navigate = useNavigate();
  const isDarkEnabled = useSelector((state)=> state.darkmode.dark);
  const colors = useThemeColors(isDarkEnabled);

  const renderSection = () => {
    switch (section) {
      case 'edit-profile':
        return <ProfileEdit />;
      case 'address':
        return <Address />;
      case 'PostWorkLeave':
        return <PostWorkLeave />;
      case 'info':
        return <Info />;
      default:
        return <h1 className="text-4xl font-bold">Your Profile</h1>;
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gray-100" >
      <img
        src={bgPic}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full opacity-50"
      />
      <div className="relative p-8 bg-opacity-90 rounded-lg shadow-2xl w-full md:w-3/4 lg:w-2/3 mx-auto z-10" style={{background:colors.secondbackground,color:colors.text}}>
        <h1 className="text-3xl font-semibold text-center mb-6">Profile Dashboard</h1>

        {/* Navigation Buttons */}
        <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <button
            onClick={() => setSection('edit-profile')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-lg shadow transition duration-200 ease-in-out transform hover:scale-105"
          >
            Edit Profile
          </button>
          <button
            onClick={() => setSection('address')}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-5 rounded-lg shadow transition duration-200 ease-in-out transform hover:scale-105"
          >
            Address
          </button>
          <button
            onClick={() => setSection('PostWorkLeave')}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-5 rounded-lg shadow transition duration-200 ease-in-out transform hover:scale-105"
          >
            Post Work Leave
          </button>
          <button
            onClick={() => setSection('info')}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-5 rounded-lg shadow transition duration-200 ease-in-out transform hover:scale-105"
          >
            Info
          </button>

          {/* Use <a> to open RegisterAsPartner in a new tab */}
          <a
            href="/partner/register"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-5 rounded-lg shadow transition duration-200 ease-in-out transform hover:scale-105 text-center"
          >
            Register as Partner
          </a>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-5 rounded-lg shadow transition duration-200 ease-in-out transform hover:scale-105"
          >
            Logout
          </button>
        </div>

        {/* Render the selected section */}
        <div className=" p-6 rounded-lg shadow-lg" style={{background:colors.cardBg}}>
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default Profile;
