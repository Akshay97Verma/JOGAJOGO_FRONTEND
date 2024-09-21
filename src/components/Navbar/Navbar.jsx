import { Link } from 'react-router-dom';
import logoPic from '../../../public/001.png'; // Logo image

const Navbar = () => {

  return (
    <nav className="bg-gray-800 p-6 shadow-md">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logoPic} alt="Logo" className="h-12 w-auto mr-3" />
          <span className="text-2xl text-white font-extrabold">JogaJoGo</span>
        </Link>
        <ul className="hidden md:flex space-x-6 lg:space-x-12 text-white font-medium tracking-wider">
          <li className="group">
            <Link 
              to="/" 
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
