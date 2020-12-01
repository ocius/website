import React, { useState, useCallback } from 'react';
import { Col, Row } from 'react-flexbox-grid';
import styled from 'styled-components';
import { graphql, withPrefix } from 'gatsby';
import Heading from '../components/Heading';
import SEO from '../components/SEO';
import Segmented from '../components/Segmented';
import Container from '../components/Container';
import Layout from '../layouts/Layout';
import NewsletterForm from '../components/NewsletterForm';
import ContactUs from '../components/ContactUs';
import Card from '../components/Card';
import Button from '../components/Button';
import { Spacing } from '../components/common';

const Pagination = styled.nav`
  padding: 6.4rem;
`;

export default ({ data, pageContext }) => {
  const initialPage = data.allLinksYaml;
  const [latestPage, setLatestPage] = useState(pageContext);
  const [mediaPosts, setMediaPosts] = useState(initialPage.edges);

  /**
   * Callback for making an XHR requests and dynamically add new data
   */
  const loadNextPage = useCallback(async () => {
    if (!latestPage.nextPagePath) return;

    const path = withPrefix(`/page-data${latestPage.nextPagePath}/page-data.json`);

    const res = await fetch(path);
    const json = await res.json();

    setMediaPosts((state) => [...state, ...json.result.data.allLinksYaml.edges]);
    setLatestPage(json.result.pageContext);
  }, [latestPage]);

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
            {mediaPosts.map(({ node }) => (
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
          {latestPage.nextPagePath && (
            <Pagination className="centered">
              <Button type="button" color="blue" size="small" onClick={loadNextPage}>
                Load more
              </Button>
            </Pagination>
          )}
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
  query MediaCoverageQuery($limit: Int!, $skip: Int!) {
    allLinksYaml(sort: { fields: [date], order: DESC }, limit: $limit, skip: $skip) {
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