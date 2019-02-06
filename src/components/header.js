import React from 'react';
import { Helmet } from 'react-helmet';
import PageHeader from './PageHeader';

export default props => (
  <div>
    <Helmet>
      <html lang="en" />
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Helmet>
    <PageHeader>{props.title}</PageHeader>
  </div>
);
