import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';

const RecentNews = () => (
  <aside className="aside recent-news">
    <Link to="/news">Latest news...</Link>
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(limit: 3, sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
              node {
                id
                frontmatter {
                  title
                  date(formatString: "DD MMMM, YYYY")
                }
                fields {
                  slug
                }
                excerpt
              }
            }
          }
        }
      `}
      render={data => (
        <ul>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li key={node.id}>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              <p className="excerpt">{node.excerpt}</p>
              <p className="date">{node.frontmatter.date}</p>
            </li>
          ))}
        </ul>
      )}
    />
  </aside>
);

export default RecentNews;