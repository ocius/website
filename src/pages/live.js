import React from 'react';
import SEO from '../components/SEO';
import UIHeader from '../components/UIHeader';
import LeftNav from '../components/LeftNav';
import '../scss/index.scss';

export default () => (
  <>
    <SEO title="Live" description="See where Bluebottles are at any time – LIVE." />
    <UIHeader />
    <LeftNav>Testing</LeftNav>
  </>
);
