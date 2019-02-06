import React from 'react';
import { Link } from 'gatsby';
import Navbar from './Navbar';

export default () => (
  <Navbar>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/solutions">Solutions</Link>
    <Link to="/bluebottle">Bluebottle</Link>
    <Link to="/findBruce">Find Bruce</Link>
    <Link to="/news">News</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/careers">Careers</Link>
  </Navbar>
);
