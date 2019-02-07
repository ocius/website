import React from 'react';
import Header from '../components/header';
import PageLayoutSidebar from '../layouts/PageLayoutSidebar';

export default () => (
  <PageLayoutSidebar>
    <Header title="Find Bruce" description="Track our drones in real time" />
    <p>See our drones on a map</p>
  </PageLayoutSidebar>
);
