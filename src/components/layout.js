import React from 'react';
import { StyleRoot } from 'radium';
import Nav from './nav';
import Container from './Container';
import '../css/styles.css';

export default ({ children }) => (
  <StyleRoot>
    <Nav />
    <Container>{children}</Container>
  </StyleRoot>
);
