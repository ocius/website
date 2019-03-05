import React from 'react';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

export default () => (
  <Layout>
    <SEO title="Not Found" description="That page does not exist" />
    <PageHeader>Not Found</PageHeader>
    <p>That page does not exist</p>
    <img
      src="https://writerscafe.s3.amazonaws.com/stories/93933e3f3d753a029ec801d9fb2ba426.jpg"
      alt="An empty ocean"
    />
  </Layout>
);
