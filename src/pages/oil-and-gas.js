import React from 'react';
import { graphql } from 'gatsby';
import { Row, Col } from 'react-flexbox-grid';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Icon from '../components/Icon';
import Segmented from '../components/Segmented';
import HeroBlock from '../components/HeroBlock';
import Heading from '../components/Heading';
import Button from '../components/Button';

export default ({ data }) => (
  <Layout>
    <SEO
      title="Oil &amp; Gas"
      description="USVs are already being used in the Oil &amp; Gas industry Bluebottles can do more. WE ARE LOOKING
      FOR PARTNERS TO DO JOINT VENTURE AND DEMONSTRATION PROJECTS"
    />
    <HeroBlock
      image={data.HeroBackground ? data.HeroBackground.childImageSharp.fluid : ''}
      gradient="linear"
      constrained
    >
      <Heading level={2} size="large" weight="thick">
        Oil &amp; Gas
      </Heading>
      <Row>
        <Col xs={12} md={6} lg={6}>
          <Heading level={2} size="medium" weight="thick">
            Seabed and Pipeline Surveys
          </Heading>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Heading level={2} size="medium" weight="thick">
            Security
          </Heading>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={6}>
          <Heading level={2} size="medium" weight="thick">
            Environment Monitoring
          </Heading>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Heading level={2} size="medium" weight="thick">
            Partners
          </Heading>
        </Col>
      </Row>
    </HeroBlock>
    <Container className="centered">
      <Segmented borderBottom="">
        <h3>
          USVs are already being used in the Oil &amp; Gas industry
          <br />
          <strong>Bluebottles can do more</strong>
        </h3>
      </Segmented>
      <Segmented>
        <Row>
          <Col xs={12} md={4} lg={4}>
            <Icon.Compass
              fill="#4db4e6"
              style={{
                height: '70px',
                marginBottom: '3px',
                width: 'auto'
              }}
            />
            <Heading level={4} size="small" weight="thick">
              Seabed & Pipeline Surveys
            </Heading>
            <ul className="left-align">
              <li>GPS mapping</li>
              <li>Assist seismic survey</li>
              <li>Much cheaper than crewed vessels</li>
              <li>MBES and other sensors to suit job</li>
              <li>Coastal waters, navigation channel hazards</li>
              <li>Onboard processing for anomalies for real-time check</li>
            </ul>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <Icon.Envira
              fill="#4db4e6"
              style={{
                height: '70px',
                marginBottom: '3px',
                width: 'auto'
              }}
            />
            <Heading level={4} size="small" weight="thick">
              Environmental Monitoring
            </Heading>
            <ul className="left-align">
              <li>Hydrocarbon monitoring</li>
              <li>Pipeline and leak checking</li>
              <li>Marine biodiversity monitoring</li>
              <li>Subsea floor sensors gateway communications</li>
              <li>Pre-exploration meteorological and oceanographic data</li>
            </ul>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <Icon.Lock
              fill="#4db4e6"
              style={{
                height: '70px',
                marginBottom: '3px',
                width: 'auto'
              }}
            />
            <Heading level={4} size="small" weight="thick">
              Security
            </Heading>
            <ul className="left-align">
              <li>Early warning against asymmetrical threats</li>
              <li>Bluebottles can hear under the water and see and sense above the water</li>
              <li>
                Patrols for environmental monitoring also provide protection of high-value assets
                over the horizon.
              </li>
            </ul>
          </Col>
        </Row>
      </Segmented>
      <Segmented borderBottom="">
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Heading size="medium" level={3}>
              WE ARE LOOKING FOR PARTNERS TO DO JOINT VENTURE AND DEMONSTRATION PROJECTS
            </Heading>
            <Button color="white" size="medium" href="/contact" border>
              Contact Us Now
            </Button>
          </Col>
        </Row>
      </Segmented>
    </Container>
  </Layout>
);

export const query = graphql`
  query {
    HeroBackground: file(relativePath: { eq: "images/Oil-Header-Background.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
