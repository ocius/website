import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Grid, Col, Row } from 'react-styled-flexboxgrid/src';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import Heading from '../components/Heading';
import { Spacing } from '../components/common';

const NotFoundPage = ({ data }) => (
  <Layout>
    <SEO title="Not Found" description="That page does not exist" />
    <Grid>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <Spacing $value="80px" />
          <Heading level={1} size="huge" weight="thick" underline="left">
            404 Not Found
          </Heading>
        </Col>
      </Row>
      <p>That page does not exist</p>
      <GatsbyImage
        image={data.Overview ? data.Overview.childImageSharp.gatsbyImageData : ''}
        style={{ width: '70%', margin: '20px 0' }}
      />
    </Grid>
  </Layout>
);

export const query = graphql`
  {
    Overview: file(relativePath: { eq: "images/wallpaperocius-768x432.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 84, layout: FULL_WIDTH)
      }
    }
  }
`;

export default NotFoundPage;
