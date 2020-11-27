import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../fonts/fonts.css';
import '../css/styles.css';

/* Add padding to body to compensate navbar height */
const PaddingWrapper = styled.div`
  padding-top: 145px;
`;

export default ({ children }) => (
  <PaddingWrapper>
    <Navbar />
    {children}
    <Footer />
  </PaddingWrapper>
);
