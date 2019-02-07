import React from 'react';
import { StyleRoot } from 'radium';
import Nav from '../components/nav';
import '../css/styles.css';

export default ({ children }) => (
  <StyleRoot>
    <Nav />
    {children}
  </StyleRoot>
);
