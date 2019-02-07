import React from 'react';
import Header from '../components/header';
import PageLayoutSidebar from '../layouts/PageLayoutSidebar';

export default () => (
  <PageLayoutSidebar>
    <Header title="Science" desciption="Applications for science" />
    <p>Live Ocean Conditions</p>
    <p>Tsnuami Detection</p>
    <p>Whale and fish monitoring</p>
  </PageLayoutSidebar>
);
