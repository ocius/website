import React from 'react';
import { Link as GatsbyLink, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Segmented from '../components/Segmented';
import Pagination from '../components/Pagination';
import Button from '../components/Button';
import NewsletterForm from '../components/NewsletterForm';
import ContactUs from '../components/ContactUs';
import { Spacing } from '../components/common';

const Link = styled(GatsbyLink)`
  display: block;
  color: #001826;
  &:hover {
    text-decoration: none;
  }
`;

const CenteredCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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

      <Container>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Spacing $value="80px" />
            <Heading level={1} size="huge" underline="left">
              News
            </Heading>
          </Col>
        </Row>
        <section className="page-content">
          <Row>
            <Col className="primary-content" xs={12} md={12} lg={12}>
              {posts.map(({ node }, index) => (
                <Segmented key={node.id} borderBottom>
                  {!(index % 2) ? (
                    <Row className="post">
                      <Col lg={6}>
                        {node.frontmatter.featuredImage && (
                          <Link to={node.fields.slug}>
                            <Img
                              fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                              alt={node.frontmatter.title}
                            />
                          </Link>
                        )}
                      </Col>
                      <CenteredCol lg={6}>
                        <Heading level={3} size="medium" className="title" weight="thick">
                          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                        </Heading>
                        <p className="date">{node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                        <Button color="blue" size="small" href={node.fields.slug}>
                          Read more
                        </Button>
                      </CenteredCol>
                    </Row>
                  ) : (
                    <Row className="post">
                      <CenteredCol lg={6}>
                        <Heading level={3} size="medium" className="title" weight="thick">
                          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                        </Heading>
                        <p className="date">{node.frontmatter.date}</p>
                        <p>{node.excerpt}</p>
                        <Button color="blue" size="small" href={node.fields.slug}>
                          Read more
                        </Button>
                      </CenteredCol>
                      <Col lg={6}>
                        {node.frontmatter.featuredImage && (
                          <Link to={node.fields.slug}>
                            <Img
                              fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                              alt={node.frontmatter.title}
                            />
                          </Link>
                        )}
                      </Col>
                    </Row>
                  )}
                </Segmented>
              ))}
              <Pagination pageContext={pageContext} pathPrefix="/" />
            </Col>
          </Row>
        </section>
      </Container>

      <Segmented>
        <NewsletterForm />
      </Segmented>

      <Segmented>
        <ContactUs />
      </Segmented>
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
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
