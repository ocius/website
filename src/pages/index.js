import React from 'react';
import PageLayoutSidebar from '../layouts/PageLayoutSidebar';
import Header from '../components/header';

export default () => (
  <PageLayoutSidebar>
    <Header title="Ocean Drones" description="Ocius makes ocean drones" />
    <img
      src="https://ocius.com.au/wp-content/uploads/2017/09/wallpaperocius-768x432.jpg"
      alt="Ocius ocean drone: a blue boat sailing on the ocean at Sydney harbour"
    />
  </PageLayoutSidebar>
);
