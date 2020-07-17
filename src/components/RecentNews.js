import React from 'react';
import { Link as UnstyledLink, graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

/*
  Change color of sidebar links
 */
const Link = styled(UnstyledLink)`
  color: #001826;
  font-weight: bold;
`;

/*
  A styled list of links to articles
 */
const List = styled.ul`
  margin: 1em 0;
  padding: 0;

  li {
    list-style: none;
    margin-bottom: 10px;
    padding-top: 15px;
    border-top: 1px solid #efefef;

    &:first-child {
      border-top: none;
    }
  }

  .excerpt {
    font-size: 1em;
  }

  .date {
    font-size: 0.9em;
    font-weight: 300;
    margin-top: -10px;
    color: #164194;
  }
`;

const RecentNews = () => (
  <>
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
      render={(data) => (
        <List>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li key={node.id}>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              <p className="excerpt">{node.excerpt}</p>
              <p className="date">{node.frontmatter.date}</p>
            </li>
          ))}
        </List>
      )}
    />
  </>
);

export default RecentNews;
