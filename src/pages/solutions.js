import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

export default () => (
  <Layout>
    <SEO title="OCIUS - Satellites of the Sea" />
    <PageHeader>Solutions</PageHeader>
    <Link to="/science">Science</Link>
    <Link to="/oil-and-gas">Oil and gas</Link>
    <Link to="/defense">Defense</Link>
  </Layout>
);
