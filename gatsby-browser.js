import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavContextProvider } from './src/common/context/NavContext';

const scrollToElement = require('scroll-to-element');

const checkHash = (location) => {
  const { hash } = location;
  if (hash) {
    scrollToElement(hash, {
      offset: -180,
      duration: 0,
      align: 'top',
    });
  }
};

export const onRouteUpdate = ({ location }) => {
  checkHash(location);
};

const theme = {};

export const wrapRootElement = ({ element }) => (
  <NavContextProvider>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </NavContextProvider>
);
