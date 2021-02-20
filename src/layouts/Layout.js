import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import mq from '../common/mq';
import '../fonts/fonts.css';
import '../css/styles.css';

/* Add padding to body to compensate navbar height */
const PaddingWrapper = styled.div`
  padding-top: 145px;

  @media (max-width: ${mq.max[768]}) {
    padding-top: 50px;
  }
`;

// Define what props.theme will look like
const theme = {
  themePrimary: '#4ab4e6',
  themeDark: '#1f3643',
  themeDarker: '#001826',
  neutralPrimary: '#6f7175',
  neutralLight: '#f7f7f7',
};

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <PaddingWrapper>
      <Navbar />
      {children}
      <Footer />
    </PaddingWrapper>
  </ThemeProvider>
);
