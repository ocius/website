import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavContextProvider } from './src/common/context/NavContext';

const theme = {};

export const wrapRootElement = ({ element }) => (
  <NavContextProvider>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </NavContextProvider>
);

export async function unregisterAndClearCaches() {
  const registrations = await navigator.serviceWorker.getRegistrations();
  const unregisterPromises = registrations.map(registration => registration.unregister());

  const allCaches = await caches.keys();
  const cacheDeletionPromises = allCaches.map(cache => caches.delete(cache));

  await Promise.all([...unregisterPromises, ...cacheDeletionPromises]);
}
