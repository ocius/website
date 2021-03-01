import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import mq from '../common/mq';
import theme from '../common/theme';
import '../fonts/fonts.css';
import '../css/styles.css';

/* Add padding to body to compensate navbar height */
const GlobalStyle = createGlobalStyle`
  body {
    padding-top: 145px;

    @media (min-width: ${mq.min[768]}) and (max-width: ${mq.max[1200]}) {
      padding-top: 130px;
    }

    @media (max-width: ${mq.max[768]}) {
      padding-top: 50px;
    }
  }
`;

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Navbar />
    {children}
    <Footer />
  </ThemeProvider>
);
