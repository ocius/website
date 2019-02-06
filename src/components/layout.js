import React from 'react';
import { StyleRoot } from 'radium';
import Nav from './nav';

export default ({ children }) => (
  <StyleRoot>
    <Nav />
    {children}
  </StyleRoot>
);
