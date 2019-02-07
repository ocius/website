import React from 'react';
import Header from '../components/header';
import PageLayoutSidebar from '../layouts/PageLayoutSidebar';

export default () => (
  <PageLayoutSidebar>
    <Header title="About" description="Ocius history and information" />
    <h2>Mission</h2>
    <h2>People</h2>
    <h2>Partners</h2>
    <h2>Awards</h2>
  </PageLayoutSidebar>
);
