import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import mq from '../common/mq';
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

// Define what props.theme will look like
export const theme = {
  themePrimary: '#4ab4e6',
  themePrimaryLight: '#60d2f6',
  themeDark: '#1f3643',
  themeDarker: '#001826',
  neutralPrimary: '#6f7175',
  neutralLight: '#f7f7f7',
  neutralLightAlt: '#efefef',
  bgPrimary: '#ffffff',
};

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Navbar />
    {children}
    <Footer />
  </ThemeProvider>
);
