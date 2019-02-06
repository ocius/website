import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/global.css';

export default props => (
  <div>
    <Helmet>
      <html lang="en" />
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
    </Helmet>
    <div className="header">
      <h1 className="header-items">{props.title}</h1>
    </div>
  </div>
);
