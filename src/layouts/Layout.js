import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../fonts/fonts.css';
import '../css/styles.css';

export default ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);
