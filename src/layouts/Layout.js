import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import mq from '../common/mq';
import '../fonts/fonts.css';
import '../css/styles.css';

/* Add padding to body to compensate navbar height */
const PaddingWrapper = styled.div`
  padding-top: 145px;

  @media (max-width: ${mq.max[768]}) {
    padding-top: 59px;
  }
`;

export default ({ children }) => (
  <PaddingWrapper>
    <Navbar />
    {children}
    <Footer />
  </PaddingWrapper>
);
