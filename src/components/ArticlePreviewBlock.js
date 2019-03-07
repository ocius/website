import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import Row from './GridRow';
import Column from './GridColumn';
import ArticlePreview from './ArticlePreview';

const RecentNews = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(limit: 2, sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                title
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 540, maxHeight: 320) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              fields {
                slug
              }
              excerpt(pruneLength: 210)
            }
          }
        }
      }
    `}
    render={data => (
      <Row>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Column key={node.id} sm={12} md={6} lg={6} fluid>
            <ArticlePreview
              href={node.fields.slug}
              title={node.frontmatter.title}
              paragraph={node.excerpt}
              image={
                node.frontmatter.featuredImage
                  ? node.frontmatter.featuredImage.childImageSharp.fluid
                  : ''
              }
            />
          </Column>
        ))}
      </Row>
    )}
  />
);

export default RecentNews;
