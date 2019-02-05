import React from 'react';
import Layout from '../components/layout';
import Header from '../components/header';

export default () => (
  <Layout>
    <Header title="Ocean Drones" description="Ocius makes ocean drones" />
    <img
      src="https://ocius.com.au/wp-content/uploads/2017/09/wallpaperocius-768x432.jpg"
      alt="Ocius ocean drone: a blue boat sailing on the ocean at Sydney harbour"
    />
  </Layout>
);
