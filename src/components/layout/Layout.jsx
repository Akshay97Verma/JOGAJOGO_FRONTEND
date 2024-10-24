
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import ServiceCards from '../ServiceCards/ServiceCards';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow p-4 lg:p-8 md:p-6 sm:p-4">
        {/* Service Cards Component */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <ServiceCards />
        </div>

        {/* Outlet renders other components */}
        <div className="mt-6 bg-gray-800 rounded-lg shadow-lg p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
