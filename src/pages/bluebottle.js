import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Row, Col } from 'react-flexbox-grid';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';

export default ({ data }) => (
  <Layout>
    <SEO
      title="BlueBottle Overview"
      description="Renewable energy powered vessels which are unmanned. They use solar and/or wind and/or wave energy so are persistent and can stay at sea indefinitely only limited by biofouling"
    />
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <Img
            style={{ margin: '2.25rem 0' }}
            fluid={data.Overview ? data.Overview.childImageSharp.fluid : ''}
          />
        </Col>
      </Row>
    </Container>
  </Layout>
);

export const query = graphql`
  query {
    Overview: file(relativePath: { eq: "images/170927-OVERVIEW-FOR-WEBSITE_001.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
