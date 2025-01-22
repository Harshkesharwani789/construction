import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Appointment from './components/Appointment';
import Home from './components/Home'; // Assuming you have a Home component
import Button from './components/Button';
import Capability from './components/Capability';
import AboutUs from './components/AboutUs';
import ProductGallery from './components/ProductGallery';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <div className='bg-light'>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/Button" element={<Button />} />
        <Route path="/capability" element={<Capability/>} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/equipment" element={<ProductGallery />} />
        <Route path='/contact' element={<ContactUs/>} />
        {/* Add other routes here */}
      </Routes>
    </Router>
    </div>
  );
};

export default App;
