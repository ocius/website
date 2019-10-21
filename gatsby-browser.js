import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavContextProvider } from './src/common/context/NavContext';

const theme = {};

export const wrapRootElement = ({ element }) => (
  <NavContextProvider>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </NavContextProvider>
);

export const onServiceWorkerUpdateReady = () => {
  // eslint-disable-next-line func-names
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    // eslint-disable-next-line no-restricted-syntax
    for (const registration of registrations) {
      registration.unregister();
    }
  });
};
