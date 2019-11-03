import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavContextProvider } from './src/common/context/NavContext';

const theme = {};

export const wrapRootElement = ({ element }) => (
  <NavContextProvider>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </NavContextProvider>
);

export const onRenderBody = ({ setHeadComponents }) => {
  return setHeadComponents([
    <link
      rel="preconnect dns-prefetch"
      key="preconnect-google-analytics"
      href="https://www.google-analytics.com"
    />,
    <link
      rel="dns-prefetch"
      key="dns-prefetch-google"
      href="https://www.google.com"
    />,
    <link
      rel="dns-prefetch"
      key="dns-prefetch-marketingplatform"
      href="https://marketingplatform.google.com"
    />,
    <script
      dangerouslySetInnerHTML={{
        __html: `
        navigator.serviceWorker.getRegistrations()
        .then(function(registrations) {
            registrations.forEach(function(registration) { 
                console.log("Deleting service workers");
                registration.unregister(); 
            })
        });
            `,
      }}
    />
  ]);
};
