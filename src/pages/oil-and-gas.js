import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Icon from '../components/Icon';
import Segmented from '../components/Segmented';
import HeroBlock from '../components/HeroBlock';
import Heading from '../components/Heading';
import Button from '../components/Button';
import Spacing from "../components/Spacing";

const HeroSubheading = styled.p`
  color: #ffffff;
  font-size: 1.5em;
  line-height: 1.2;
`;

export default ({ data }) => (
  <Layout>
    <SEO
      title="Oil &amp; Gas"
      description="Unmanned Surface Vessels (USVs) are already being used in the Oil and Gas industry. Bluebottle USVs can do more. Seadbed and Pipeline Surveys, Security, Environment Monitoring, "
    />

    {data.HeroBackground && (
      <HeroBlock image={data.HeroBackground.childImageSharp.fluid} masked>
        <Row>
          <Col xs={9} md={6} lg={6}>
            <Spacing xs="100px" md="250px" />
            <Heading level={1} color="white" size="huge" weight="thick" underline="left">
              Oil & Gas
            </Heading>
            <HeroSubheading>
              USVs are already being used in the Oil & Gas industry for projects such as seabed and
              pipeline surveys, environment monitoring and security.
            </HeroSubheading>
            <Spacing md="80px" />
          </Col>
        </Row>
      </HeroBlock>
    )}

    <Container className="centered">
      <Segmented borderBottom="">
        <Heading level={3} size="medium">
          USVs are already being used in the Oil &amp; Gas industry
          <br />
          <strong>Bluebottles can do more</strong>
        </Heading>
      </Segmented>
      <Segmented>
        <Row>
          <Col xs={12} md={4} lg={4}>
            <Icon.Compass
              fill="#4db4e6"
              style={{
                height: '70px',
                marginBottom: '3px',
                width: 'auto',
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
                width: 'auto',
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
                width: 'auto',
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
              We are looking for partners to do joint venture and demonstration projects.
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
    HeroBackground: file(relativePath: { eq: "images/solutions-oil-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
