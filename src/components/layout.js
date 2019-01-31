import React from "react";
import Nav from "../components/nav";
import { StaticQuery } from "gatsby";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }`
    }

    render={data => (
      <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        <Nav />
        <h1>{data.site.siteMetadata.title}</h1>
        {children}
        </div>
    )}
  />
)


        