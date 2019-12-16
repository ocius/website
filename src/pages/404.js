import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Container from '../components/Container';
import Heading from '../components/Heading';

export default ({ data }) => (
  <Layout>
    <SEO title="Not Found" description="That page does not exist" />
    <PageHeader>
      <Heading level={1} size="huge" header>
        404 Not Found
      </Heading>
    </PageHeader>
    <Container>
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
