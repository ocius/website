import React from 'react';
import { StyleRoot } from 'radium';
import Nav from './nav';

export default ({ children }) => (
  <StyleRoot>
    <div style={{ margin: `3rem auto`, padding: `0 1rem` }}>
      <Nav />
      {children}
    </div>
  </StyleRoot>
);
