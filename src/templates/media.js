import React, { useState, useCallback } from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid/src';
import styled from 'styled-components';
import { graphql, withPrefix } from 'gatsby';
import Heading from '../components/Heading';
import SEO from '../components/SEO';
import Segmented from '../components/Segmented';
import Layout from '../layouts/Layout';
import NewsletterForm from '../components/NewsletterForm';
import ContactUs from '../components/ContactUs';
import Card from '../components/Card';
import Button from '../components/Button';
import { Spacing } from '../components/common';

const Pagination = styled.nav`
  padding: 6.4rem;
`;

const MediaPage = ({ data, pageContext }) => {
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

      <Grid>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Spacing $value="80px" />
            <Heading level={1} size="huge" weight="thick" underline="left">
              Media
            </Heading>
          </Col>
        </Row>
        <section className="page-content">
          <Row style={{ padding: '2.5rem 0' }}>
            {mediaPosts.map(({ node }) => (
              <Col xs={12} md={6} lg={4} key={node.id}>
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
      </Grid>

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
              gatsbyImageData(width: 400, layout: CONSTRAINED)
            }
          }
          logo {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`;

export default MediaPage;
