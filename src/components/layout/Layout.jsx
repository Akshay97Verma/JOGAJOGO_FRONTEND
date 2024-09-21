import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import ServiceCards from '../ServiceCards/ServiceCards';
import ServiceCard from '../ServiceCards/ServiceCard';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow p-4 lg:p-8 md:p-6 sm:p-4">
        {/* Service Cards Component */}
        <ServiceCards />
        

        {/* Outlet renders other components */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
