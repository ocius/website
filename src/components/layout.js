import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Nav from './nav';
import Footer from './Footer';

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
      <div>
        <div>
          <h1>{data.site.siteMetadata.title}</h1>
          <Nav />
        </div>
        {children}
        <Footer />
      </div>
    )}
  />
);
