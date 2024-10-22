import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Framer Motion
import logo from '../../../public/001.png'; // Adjust the path as needed

const Home = () => {
  const navigate = useNavigate();

  const goToLogin = () => navigate('/');
  const goToDashboard = () => navigate('/dashboard');
  const goToBookServices = () => navigate('/partner/register');

  return (
    <div className="h-screen flex flex-col justify-between bg-gradient-to-r from-orange-400 to-yellow-300 text-gray-800">
      <header className="flex items-center justify-between p-6 bg-white bg-opacity-80 rounded-lg shadow-lg">
        <img src={logo} alt="Jogajogo Logo" className="h-16" />
        <h1 className="text-2xl font-bold">Jogajogo Services</h1>
      </header>

      <main className="flex flex-col items-center justify-center text-center py-12">
        <h1 className="text-5xl font-extrabold mb-4 animate-bounce">Welcome to Jogajogo</h1>
        <p className="text-lg mb-8">
          Exceptional services tailored for your needs. Connect with skilled professionals and experience high-quality standards.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
          <motion.button
            whileHover={{ scale: 1.1 }} // Scale on hover
            whileTap={{ scale: 0.9 }} // Scale when clicked
            onClick={goToLogin}
            className="px-6 py-3 bg-white text-orange-600 rounded-lg shadow hover:bg-orange-500 hover:text-white transition duration-300"
          >
            Login
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToDashboard}
            className="px-6 py-3 bg-white text-orange-600 rounded-lg shadow hover:bg-orange-500 hover:text-white transition duration-300"
          >
            Dashboard
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToBookServices}
            className="px-6 py-3 bg-white text-orange-600 rounded-lg shadow hover:bg-orange-500 hover:text-white transition duration-300"
          >
            Register as Partner
          </motion.button>
        </div>
      </main>

      <section className="p-6 bg-white bg-opacity-80 rounded-lg shadow-lg mb-6">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="mb-6">At Jogajogo, we offer a variety of services to help you thrive personally and professionally.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Maid', description: 'Your space, spotless and serene.', icon: 'fas fa-broom' },
            { title: 'Cook', description: 'Delicious meals, delivered with love.', icon: 'fas fa-utensils' },
            { title: 'Driver', description: 'Ride in comfort, reach with ease.', icon: 'fas fa-car' },
            { title: 'Carpenter', description: 'Crafting wood, creating memories.', icon: 'fas fa-tools' },
            { title: 'Electrician', description: 'Bringing power to your everyday.', icon: 'fas fa-bolt' },
            { title: 'Plumber', description: 'Fixing leaks, restoring flow.', icon: 'fas fa-water' },
            { title: 'Interior Designer', description: 'Designing dreams, one room at a time.', icon: 'fas fa-paint-brush' },
            { title: 'Yoga Teacher', description: 'Bringing balance to your body and mind.', icon: 'fas fa-yoga' },
            { title: 'Spa', description: 'Relax, unwind, and rejuvenate.', icon: 'fas fa-spa' },
          ].map((service, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-2">
                <i className={`${service.icon} text-orange-600 text-2xl mr-2`}></i>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
