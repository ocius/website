import React from 'react';
import styled from 'styled-components';
import { Link, graphql, StaticQuery } from 'gatsby';
import mq from '../common/mq';

const gutter = 30;
const NewsContainer = styled.aside`
  padding: 15px 20px;
  background-color: #fff;

  a {
    color: #001826;
  }

  @media (max-width: ${mq.min[480]}) {
    margin-left: -${gutter / 2}px;
    margin-right: -${gutter / 2}px;
  }
`;

const RecentNews = () => (
  <NewsContainer className="aside recent-news">
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
  </NewsContainer>
);

export default RecentNews;
