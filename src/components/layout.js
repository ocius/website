import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { StyleRoot } from 'radium';
import Nav from './nav';

export default ({ children }) => (
  <StyleRoot>
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
        <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
          <h1>{data.site.siteMetadata.title}</h1>
          <Nav />
          {children}
        </div>
      )}
    />
  </StyleRoot>
);
