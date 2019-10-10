import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/styles.css';

export default ({ children }) => (
  <Fragment>
    <Navbar />
    {children}
    <Footer />
  </Fragment>
);
