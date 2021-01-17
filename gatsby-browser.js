import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavContextProvider } from './src/common/context/NavContext';
import MainNavState from './src/common/context/MainNavContext';

const theme = {};

export const wrapRootElement = ({ element }) => (
  <MainNavState>
    <NavContextProvider>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </NavContextProvider>
  </MainNavState>
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
