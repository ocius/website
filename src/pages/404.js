import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Col, Row } from 'react-flexbox-grid';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Heading from '../components/Heading';
import { Spacing } from '../components/common';

const NotFoundPage = ({ data }) => (
  <Layout>
    <SEO title="Not Found" description="That page does not exist" />
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <Spacing $value="80px" />
          <Heading level={1} size="huge" weight="thick" underline="left">
            404 Not Found
          </Heading>
        </Col>
      </Row>
      <p>That page does not exist</p>
      <Img
        style={{ width: '70%', margin: '20px 0' }}
        fluid={data.Overview ? data.Overview.childImageSharp.fluid : ''}
      />
    </Container>
  </Layout>
);

export const query = graphql`
  query {
    Overview: file(relativePath: { eq: "images/wallpaperocius-768x432.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default NotFoundPage;
