// import React from 'react';
// import backgroundPic from '../../../public/home.jpg';  // Background image
// import logoPic from '../../../public/BACKGROUND_LOGIN.jpg';  // Logo image

// const Home = () => {
//   return (
//     <div 
//       className="bg-cover bg-center h-screen flex flex-col justify-between animate-fadeIn" 
//       style={{ backgroundImage: `url(${backgroundPic})` }}
//     >
//       <header className="flex items-center justify-between p-5 bg-white bg-opacity-80 shadow-lg animate-slideDown">
//         <img 
//           src={logoPic} 
//           alt="Jogajogo Logo" 
//           className="h-16 transform hover:scale-110 transition-transform duration-300" 
//         />
//         <h1 className="text-3xl font-bold tracking-wide text-gray-900">Jogajogo Service</h1>
//       </header>
      
//       <main className="flex flex-col items-center justify-center text-center text-white px-10 animate-fadeInUp">
//         <h1 className="text-6xl font-extrabold mb-6 text-shadow-lg animate-pulse">
//           Welcome to Jogajogo
//         </h1>
//         <p className="mb-8 text-xl">We are a leading service provider based in Kolkata, dedicated to delivering exceptional services that cater to your specific needs.</p>
        
//         <h2 className="text-3xl font-semibold mb-4 underline underline-offset-8 decoration-pink-500">
//           Why Choose Us?
//         </h2>
//         <ul className="list-disc list-inside space-y-3 mb-8 text-lg">
//           <li>High-quality services tailored for every client</li>
//           <li>Experienced professionals committed to excellence</li>
//           <li>Customer-centric approach ensuring satisfaction</li>
//           <li>Affordable pricing without compromising quality</li>
//           <li>24/7 support to assist you whenever you need</li>
//         </ul>

//         <h2 className="text-3xl font-semibold mb-4 underline underline-offset-8 decoration-pink-500">
//           Our Mission
//         </h2>
//         <p className="mb-8 text-lg">To provide reliable and efficient services that enhance the quality of life for our clients while fostering a positive impact on the community.</p>
//       </main>

//       <footer className="bg-white bg-opacity-80 p-5 text-center animate-fadeIn delay-500">
//         <p className="text-gray-700">© 2024 Jogajogo Service. All rights reserved.</p>
//         <p className="text-gray-600">Follow us on social media!</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundPic from '../../../public/home.jpg';  // Background image
import logoPic from '../../../public/BACKGROUND_LOGIN.jpg';  // Logo image

const Home = () => {
  const navigate = useNavigate();

  // Navigation handlers
  const goToLogin = () => navigate('/');
  const goToDashboard = () => navigate('/dashboard');
  const goToBookServices = () => navigate('/partner/register');

  return (
    <div 
      className="bg-cover bg-center h-screen flex flex-col justify-between animate-fadeIn" 
      style={{ backgroundImage: `url(${backgroundPic})` }}
    >
      <header className="flex items-center justify-between p-5 bg-white bg-opacity-80 shadow-lg animate-slideDown">
        <img 
          src={logoPic} 
          alt="Jogajogo Logo" 
          className="h-16 transform hover:scale-110 transition-transform duration-300" 
        />
        <h1 className="text-3xl font-bold tracking-wide text-gray-900">Jogajogo Service</h1>
      </header>
      
      <main className="flex flex-col items-center justify-center text-center text-white px-10 animate-fadeInUp">
        <h1 className="text-6xl font-extrabold mb-6 text-shadow-lg animate-pulse">
          Welcome to Jogajogo
        </h1>
        <p className="mb-8 text-xl">We are a leading service provider based in Kolkata, dedicated to delivering exceptional services that cater to your specific needs.</p>
        
        <h2 className="text-3xl font-semibold mb-4 underline underline-offset-8 decoration-pink-500">
          Why Choose Us?
        </h2>
        <ul className="list-disc list-inside space-y-3 mb-8 text-lg">
          <li>High-quality services tailored for every client</li>
          <li>Experienced professionals committed to excellence</li>
          <li>Customer-centric approach ensuring satisfaction</li>
          <li>Affordable pricing without compromising quality</li>
          <li>24/7 support to assist you whenever you need</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4 underline underline-offset-8 decoration-pink-500">
          Our Mission
        </h2>
        <p className="mb-8 text-lg">To provide reliable and efficient services that enhance the quality of life for our clients while fostering a positive impact on the community.</p>

        {/* Responsive Button Layout */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <button 
            className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
            onClick={goToLogin}
          >
            Login
          </button>
          <button 
            className="bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
            onClick={goToDashboard}
          >
            Dashboard
          </button>
          <button 
            className="bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
            onClick={goToBookServices}
          >
            Book Services
          </button>
        </div>
      </main>

      <footer className="bg-white bg-opacity-80 p-5 text-center animate-fadeIn delay-500">
        <p className="text-gray-700">© 2024 Jogajogo Service. All rights reserved.</p>
        <p className="text-gray-600">Follow us on social media!</p>
      </footer>
    </div>
  );
};

export default Home;
