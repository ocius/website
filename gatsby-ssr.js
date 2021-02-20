import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavContextProvider } from './src/common/context/NavContext';

// Define what props.theme will look like
const theme = {
  themePrimary: '#4ab4e6',
  themeDark: '#1f3643',
  neutralPrimary: '#6f7175',
};

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
    />
  ]);
};
