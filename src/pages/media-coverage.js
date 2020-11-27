import { Col, Row } from 'react-flexbox-grid';
import React from 'react';
import { graphql } from 'gatsby';
import Heading from '../components/Heading';
import SEO from '../components/SEO';
import Segmented from '../components/Segmented';
import Container from '../components/Container';
import Layout from '../layouts/Layout';
import NewsletterForm from '../components/NewsletterForm';
import ContactUs from '../components/ContactUs';
import Card from '../components/Card';
import { Spacing } from '../components/common';

export default ({ data }) => {
  const { edges } = data.allLinksYaml;

  return (
    <Layout>
      <SEO title="In The News" />

      <Container>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Spacing $value="80px" />
            <Heading level={1} size="huge" underline="left">
              Media
            </Heading>
          </Col>
        </Row>
        <section className="page-content">
          <Row style={{ padding: '2.5rem 0' }}>
            {edges.map(({ node }) => (
              <Col xs={12} md={4} lg={4} key={node.id}>
                <Card
                  url={node.url}
                  thumbnail={node.thumbnail}
                  title={node.title}
                  source={node.source}
                  date={node.date}
                  logo={node.logo}
                />
              </Col>
            ))}
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
  query MediaCoverageQuery {
    allLinksYaml(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          url
          title
          source
          date(formatString: "DD MMMM, YYYY")
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          logo {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
