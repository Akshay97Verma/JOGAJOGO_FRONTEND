import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Profile from './components/Profile/Profile';
import Layout from './components/layout/Layout';
import Home from './components/Home/Home';
import PartnerDashboard from './components/PartnerDashboard/PartnerDashboard'; // Corrected path
import Register from './components/Register/Register';
import PaymentPage from './components/paymentpage/paymentpage';
import RegisterAsPartner from './components/RegisterAsPartner/RegisterAsPartner';
import BookingAndPaymentPage from './components/Booking/BookingAndPaymentPage';
import ConfirmOrderPage from './components/ConfirmOrderPage/ConfirmOrderPage';
import ServiceCards from './components/ServiceCards/ServiceCards';
import LoginAsPartner from './components/LoginAsPartner/LoginAsPartner';

function App() {

  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home/>} />
        
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/confirm-order" element={<ConfirmOrderPage />} />
        <Route path="/profile" element={<Profile />} />

        {/* Partner Dashboard Route */}
        <Route path="/partnerdashboard" element={<PartnerDashboard />} />
        <Route path="/dashboard/:service" element={<BookingAndPaymentPage />} />
        <Route path="/booking" element={<ServiceCards />} />
        <Route path="/dashboard/partner-register" element={<RegisterAsPartner />} />
        <Route path="/dashboard/partner-login" element={<LoginAsPartner/>}/>
        <Route path="/dashboard" element={<Layout />}>
          {/* Nested routes can go here */}
        </Route>

        {/* Catch-all Route */}
        {/* <Route path='*' element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
