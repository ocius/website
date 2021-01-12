import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavContextProvider } from './src/common/context/NavContext';

const theme = {};

export const wrapRootElement = ({ element }) => (
  <NavContextProvider>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </NavContextProvider>
);

export const onRouteUpdate = ({ location }) => {
  if (location.hash) {
    setTimeout(() => {
      // Check if div exists on the page
      const hash = document.querySelector(`${location.hash}`);
      if (hash) {
        hash.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  }
};
