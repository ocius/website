import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/styles.css';

export default ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  window.navigator.serviceWorker.getRegistrations().then(registrations => {
    registrations.forEach(r => r.unregister())
  })
}
