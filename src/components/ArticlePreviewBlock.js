import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Row, Col } from 'react-styled-flexboxgrid/src';
import ArticlePreview from './ArticlePreview';

const RecentNews = () => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(limit: 3, sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                featuredImage {
                  childImageSharp {
                    gatsbyImageData(width: 540, height: 320, layout: CONSTRAINED)
                  }
                }
              }
              fields {
                slug
              }
              excerpt(pruneLength: 130)
            }
          }
        }
      }
    `}
    render={(data) => (
      <Row>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Col key={node.id} xs={12} md={6} lg={4}>
            <ArticlePreview
              href={node.fields.slug}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              paragraph={node.excerpt}
              image={
                node.frontmatter.featuredImage
                  ? node.frontmatter.featuredImage.childImageSharp.gatsbyImageData
                  : ''
              }
            />
          </Col>
        ))}
      </Row>
    )}
  />
);

export default RecentNews;
