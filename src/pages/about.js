import React from 'react';
import SEO from '../components/SEO';
import Layout from '../layouts/Layout';
import PageHeader from '../components/PageHeader';

export default () => (
  <Layout>
    <SEO
      title="About"
      description="Our Mission. To supply the world's best unmanned surface vessels with more power, payload and
      performance supporting Defence, Industry and Science personnel to monitor large areas of ocean continuously
      at low cost and with no one in harm's way."
    />
    <PageHeader>About</PageHeader>
    <h2>Mission</h2>
    <h2>People</h2>
    <h2>Partners</h2>
    <h2>Awards</h2>
  </Layout>
);
