import React from 'react';
import PageLayoutSidebar from '../layouts/PageLayoutSidebar';
import Header from '../components/header';

export default () => (
  <PageLayoutSidebar>
    <Header title="Contact" description="Links to contact Ocius" />
    <p>Email</p>
    <p>Phone</p>
    <p>Twitter</p>
    <p>Facebook</p>
    <p>Instagram</p>
  </PageLayoutSidebar>
);
