import React from 'react';
import { Link as GatsbyLink, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Container from '../components/Container';
import RecentNews from '../components/RecentNews';
import Heading from '../components/Heading';
import Segmented from '../components/Segmented';
import Button from '../components/Button';
import Pagination from '../components/Pagination';

const Link = styled(GatsbyLink)`
  display: block;
  color: #001826;
`;

export default ({ data, pageContext }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Layout>
      <SEO
        title="News"
        description="Ocius technology Ltd is building a new network of renewable energy powered unmanned surface
        vessels and today launched a &#8216;man-portable&#8217; version of the Bluebottle USV. &#8220;We&#8217;ve
        had a number of enquiries for small self sustaining USVs that can be deployed easily from a deck or beach."
      />
      <PageHeader>News</PageHeader>
      <section className="page-content">
        <Container>
          <Row>
            <Col className="primary-content" xs={12} md={7} lg={7}>
              {posts.map(({ node }) => (
                <Segmented key={node.id}>
                  <article className="post">
                    {node.frontmatter.featuredImage && (
                      <div className="img-wrap">
                        <Link to={node.fields.slug}>
                          <Img
                            fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                            alt={node.frontmatter.title}
                          />
                        </Link>
                      </div>
                    )}
                    <Heading level={3} size="medium">
                      <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                    </Heading>
                    <p className="date">{node.frontmatter.date}</p>
                    <p>{node.excerpt}</p>
                    <Button color="gray" size="small" to={node.fields.slug}>
                      Read More
                    </Button>
                  </article>
                </Segmented>
              ))}
              <Pagination pageContext={pageContext} pathPrefix="/" />
            </Col>
            <Col className="secondary-content" xs={12} md={5} lg={4} lgOffset={1}>
              <RecentNews />
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 700, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt(pruneLength: 160)
        }
      }
    }
  }
`;
