import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import logoPic from '../../../public/001.png'; // Logo image
import { MoonIcon,SunIcon } from '../../utils/icons';
import { useThemeColors } from '../../utils/useThemeColor';
import { removeDark,setDark } from '../../redux/slice/darkModeSlice';

const Navbar = () => {

  const dispatch = useDispatch();
  const isDarkEnabled = useSelector((state) => state.darkmode.dark);
  const colors = useThemeColors(isDarkEnabled);

  const toggleDarkMode = () => {
    isDarkEnabled ? dispatch(removeDark()) : dispatch(setDark());
  };

  return (
    <nav className="p-6 shadow-md"
    style={{background:colors.background}}
    >
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logoPic} alt="Logo" className="h-12 w-auto mr-3" />
          <span className="text-2xl text-white font-extrabold">JogaJoGo</span>
        </Link>
        
        <ul className="hidden md:flex space-x-6 lg:space-x-12 text-white font-medium tracking-wider">
        <div
          className={` w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center cursor-pointer ${
            isDarkEnabled ? "bg-white" : "bg-[#040836]"
          }`}
          onClick={toggleDarkMode}
        >
          {isDarkEnabled ? (
            <MoonIcon color="" height="20" width="20" />
          ) : (
            <SunIcon height="20" width="20" color="white"/>
          )}
        </div>
          <li className="group">
            <Link 
              to="/HOME" 
              className="hover:text-yellow-400 transition-all duration-300"
            >
              Home
            </Link>
            <span className="block h-1 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group">
            <Link 
              to="/booking" 
              className="hover:text-yellow-400 transition-all duration-300"
            >
              Booking
            </Link>
            <span className="block h-1 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group">
            <Link 
              to="/profile" 
              className="hover:text-yellow-400 transition-all duration-300"
            >
              Profile
            </Link>
            <span className="block h-1 w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white">
            {/* Add a hamburger icon here if desired */}
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div className="md:hidden flex flex-col space-y-4 mt-4">
        <Link 
          to="/" 
          className="block text-white hover:text-yellow-400 transition-all duration-300"
        >
          Home
        </Link>
        <Link 
          to="/booking" 
          className="block text-white hover:text-yellow-400 transition-all duration-300"
        >
          Booking
        </Link>
        <Link 
          to="/profile" 
          className="block text-white hover:text-yellow-400 transition-all duration-300"
        >
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
