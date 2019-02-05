import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/header';

export default () => (
  <Layout>
    <Header title="Solutions" description="Applications for our drones" />
    <Link to="/science">Science</Link>
    <Link to="/oilAndGas">Oil and gas</Link>
    <Link to="/defense">Defense</Link>
  </Layout>
);
