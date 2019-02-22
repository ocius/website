import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layouts/Layout';
import Header from '../components/header';

export default () => (
  <Layout>
    <Header title="Solutions" description="Applications for our drones" />
    <Link to="/science">Science</Link>
    <Link to="/oil-and-gas">Oil and gas</Link>
    <Link to="/defense">Defense</Link>
  </Layout>
);
