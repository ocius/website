import React from 'react';
import { graphql } from 'gatsby';
import { Row, Col } from 'react-flexbox-grid';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import HeroBlock from '../components/HeroBlock';
import Container from '../components/Container';
import Icon from '../components/Icon';
import Heading from '../components/Heading';
import Button from '../components/Button';
import Segmented from '../components/Segmented';
import TallCarousel from '../components/TallCarousel';

export default ({ data }) => (
  <Layout>
    <SEO
      title="Defence"
      description="Persistent USVs are being seen as strategic in Defence as force multipliers Bluebottles have more
       power payload and performance making them the superior persistent USV for defence"
    />

    <HeroBlock
      image={data.HeroBackground ? data.HeroBackground.childImageSharp.fluid : ''}
      constrained
    >
      <Heading level={2} size="large" weight="thick">
        Defence
      </Heading>
      <Row>
        <Col xs={12} md={6} lg={6}>
          <Heading level={3} size="medium" weight="thick">
            Anti-Submarine Warfare
          </Heading>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Heading level={3} size="medium" weight="thick">
            Electronic Warfare
          </Heading>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={6}>
          <Heading level={3} size="medium" weight="thick">
            Mine Counter Measures
          </Heading>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Heading level={3} size="medium" weight="thick">
            Gateway Communications
          </Heading>
        </Col>
      </Row>
    </HeroBlock>

    <Container className="centered">
      <Segmented borderBottom="">
        <Row>
          <Col xs={12} md={8} lg={8} lgOffset={2}>
            <Heading size="medium" level={3}>
              Persistent USVs are seen by Defence as strategic force multipliers
            </Heading>
            <Heading size="medium" level={3}>
              <strong>
                Bluebottles have more power, payload and performance making them the superior
                persistent USV for defence
              </strong>
            </Heading>
          </Col>
        </Row>
      </Segmented>
      <Segmented borderBottom="">
        <Row>
          <Col xs={12} md={4} lg={4}>
            <Icon.Ship
              fill="#4db4e6"
              style={{
                height: '70px',
                marginBottom: '3px',
                width: 'auto'
              }}
            />
            <Heading level={4} size="small" weight="thick">
              Anti-Submarine Warfare
            </Heading>
            <ul className="left-align">
              <li>Silent</li>
              <li>“Reel in keel“ winch</li>
              <li>50W average / kW bursts</li>
              <li>Active &amp; passive arrays</li>
              <li>Depth via speed &amp; winch</li>
              <li>Speed to resolve L-R ambiguity</li>
              <li>Network &amp; collaborate with other Bluebottles &amp; other assets</li>
            </ul>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <Icon.Podcast
              fill="#4db4e6"
              style={{
                height: '70px',
                marginBottom: '3px',
                width: 'auto'
              }}
            />
            <Heading level={4} size="small" weight="thick">
              Electronic Warfare
            </Heading>
            <ul className="left-align">
              <li>6m mast above sea level</li>
              <li>Communications and Radar</li>
              <li>Combine with other sensors</li>
              <li>Electronic Support Measures (ESM) platform</li>
            </ul>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <Icon.Link
              fill="#4db4e6"
              style={{
                height: '70px',
                marginBottom: '3px',
                width: 'auto'
              }}
            />
            <Heading level={4} size="small" weight="thick">
              Gateway Communications
            </Heading>
            <ul className="left-align">
              <li>6m mast above sea level</li>
              <li>Combine with other sensors</li>
              <li>Cross-domain communications and data exchange system</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} lg={4}>
            <Icon.ConnectDevelop
              fill="#4db4e6"
              style={{
                height: '70px',
                marginBottom: '3px',
                width: 'auto'
              }}
            />
            <Heading level={4} size="small" weight="thick">
              Multiple sensors
            </Heading>
            <ul className="left-align">
              <li>More power, payload and performance</li>
              <li>Network with other Bluebottles and assets</li>
              <li>Allows multiple sensors on the same platform</li>
            </ul>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <Icon.Bomb
              fill="#4db4e6"
              style={{
                height: '70px',
                marginBottom: '3px',
                width: 'auto'
              }}
            />
            <Heading level={4} size="small" weight="thick">
              Mine Counter Measures
            </Heading>
            <ul className="left-align">
              <li>Manage fleets of underwater assets</li>
              <li>Intelligent path planning and manoeuvring systems</li>
              <li>Remain safely in proximity while exchanging high-volume data</li>
            </ul>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <Icon.Anchor
              fill="#4db4e6"
              style={{
                height: '70px',
                marginBottom: '3px',
                width: 'auto'
              }}
            />
            <Heading level={4} size="small" weight="thick">
              Other
            </Heading>
            <ul className="left-align">
              <li>Intrinsic low-observability</li>
              <li>2 per 20&apos; shipping container</li>
              <li>5-6 m aft communications mast</li>
              <li>Silent when not communicating</li>
              <li>LARS from boat ramp or jetty/deck crane</li>
            </ul>
          </Col>
        </Row>
      </Segmented>
      <Segmented borderBottom="">
        <Button color="white" size="medium" href="/contact" border>
          Contact Us Now
        </Button>
      </Segmented>
      <TallCarousel title="Ocius in Defence" slides={data.allMarkdownRemark.edges} />
    </Container>
  </Layout>
);

export const query = graphql`
  query {
    HeroBackground: file(relativePath: { eq: "images/submarine.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: "Defence" } } }
    ) {
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
