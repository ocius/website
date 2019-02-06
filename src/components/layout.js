import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Nav from './nav';
import '../styles/content-hub.scss';

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div style={{ margin: `3rem auto`, maxWidth: '100%', padding: `0` }}>
        <h1>{data.site.siteMetadata.title}</h1>
        <Nav />
        {children}
      </div>
    )}
  />
);
