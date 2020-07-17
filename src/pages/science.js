import React from 'react';
import { graphql } from 'gatsby';
import { Row, Col } from 'react-flexbox-grid';
import Loadable from '@loadable/component';
import Layout from '../layouts/Layout';
import HeroBlock from '../components/HeroBlock';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Segmented from '../components/Segmented';
import Icon from '../components/Icon';

// Lazy load components
const Heading = Loadable(() => import(`../components/Heading`));
const Button = Loadable(() => import(`../components/Button`));
const TallCarousel = Loadable(() => import(`../components/TallCarousel`));

export default ({ data }) => (
  <Layout>
    <SEO
      title="Science"
      description="Persistent Unmanned Surface Vessels (USVs) are valuable tools for oceanographic and climate change research. Bluebottle USVs can monitor Weather “ground truth“, Climate Change, Hurricane landfall, Fisheries."
    />
    <Segmented borderBottom="">
      <HeroBlock
        image={data.HeroBackground ? data.HeroBackground.childImageSharp.fluid : ''}
        gradient="linear"
        constrained
      >
        <Heading size="large" level={2} weight="thick">
          Science
        </Heading>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Heading level={3} size="medium" weight="thick">
              Weather “ground truth“
            </Heading>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Heading level={3} size="medium" weight="thick">
              Climate Change
            </Heading>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Heading level={3} size="medium" weight="thick">
              Hurricane Landfall Prediction
            </Heading>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Heading level={3} size="medium" weight="thick">
              Fisheries
            </Heading>
          </Col>
        </Row>
      </HeroBlock>
    </Segmented>
    <Container className="centered">
      <Segmented>
        <Row>
          <Col xs={12} md={4} lg={4}>
            <Icon.Bolt
              fill="#4db4e6"
              style={{
                height: '70px',
                marginBottom: '3px',
                width: 'auto',
              }}
            />
            <Heading level={4} size="small" weight="thick">
              Weather LIVE
            </Heading>
            <ul className="left-align">
              <li>Wind direction & strength</li>
              <li>Solar intensity & cloud</li>
              <li>Wave direction & height</li>
              <li>Air pressure</li>
              <li>Water temperature</li>
              <li>Camera shots</li>
              <li>All transmitted back to base in real time</li>
            </ul>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <Icon.StackOverflow
              fill="#4db4e6"
              style={{
                height: '70px',
                marginBottom: '3px',
                width: 'auto',
              }}
            />
            <Heading level={4} size="small" weight="thick">
              Data storage on board for later use
            </Heading>
            <ul className="left-align">
              <li>
                Large volumes of data for scientific research sorted and stored for later download
              </li>
              <li>Time and date and GPS correlated against scientific parameters</li>
              <li>“Ground truth“ for satellite and computer modelling</li>
            </ul>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <Icon.Handshake
              fill="#4db4e6"
              style={{
                height: '70px',
                marginBottom: '3px',
                width: 'auto',
              }}
            />
            <Heading level={4} size="small" weight="thick">
              Multiple options
            </Heading>
            <ul className="left-align">
              <li>Discuss with us your mission goals</li>
              <li>Replace expensive bouys with mobile platforms</li>
              <li>Configure your own modular payload</li>
              <li>150 kg &amp;wet&amp; sensors & 150 kg &amp;dry&amp; equipment</li>
            </ul>
          </Col>
        </Row>
      </Segmented>
      <Segmented borderBottom="">
        <Heading size="medium" level={3}>
          Persistent USVs are valuable tools for oceanographic and climate change research
          <br />
          <strong>Let Bluebottles help you do more</strong>
          <br />
          For how we can support your goals...
        </Heading>
        <Button color="white" size="medium" href="/contact" border>
          Contact Us Now
        </Button>
      </Segmented>
      <TallCarousel title="Ocius in Research" slides={data.allMarkdownRemark.edges} />
    </Container>
  </Layout>
);

export const query = graphql`
  query {
    HeroBackground: file(relativePath: { eq: "images/Elevation.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    allMarkdownRemark(limit: 10, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 272, maxHeight: 164, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
