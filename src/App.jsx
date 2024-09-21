import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Layout from './components/layout/Layout';
import PartnerDashboard from './components/RegisterAsPartner/PartnerDashboard';
import Register from './components/Register/Register';
import PaymentPage from './components/paymentpage/paymentpage';
import RegisterAsPartner from './components/RegisterAsPartner/RegisterAsPartner';
import BookingAndPaymentPage from './components/Booking/BookingAndPaymentPage';
import ConfirmOrderPage from './components/ConfirmOrderPage/ConfirmOrderPage';

function App() {

  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/confirm-order" element={<ConfirmOrderPage />} />
        <Route path="profile" element={<Profile />} />



        <Route path="partner/dashboard" element={<PartnerDashboard />} />
        <Route path="book/:service" element={<BookingAndPaymentPage />} />
        <Route path="partner/register" element={<RegisterAsPartner />} />
        <Route path="/dashboard" element={<Layout />}>
          {/* Booking and Payment Routes */}


        </Route>

        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
