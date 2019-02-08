import React from 'react';
import { StyleRoot } from 'radium';
import Menu from '../components/Menu';
import '../css/styles.css';

export default ({ children }) => (
  <StyleRoot>
    <Menu />
    {children}
  </StyleRoot>
);
