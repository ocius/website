import React from 'react';
import { Helmet } from 'react-helmet';

export default props => (
  <div>
    <Helmet>
      <html lang="en" />
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Helmet>
    <h1>{props.title}</h1>
  </div>
);
