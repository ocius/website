import { Col, Row } from 'react-flexbox-grid';
import React from 'react';
import { graphql } from 'gatsby';
import Loadable from '@loadable/component';
import Heading from '../components/Heading';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Layout from '../layouts/Layout';
import { Spacing } from '../components/common';

// Lazy load component
const Card = Loadable(() => import(`../components/Card`));

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
