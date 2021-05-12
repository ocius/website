import React from 'react';
import { graphql } from 'gatsby';
import { Grid, Row, Col } from 'react-styled-flexboxgrid/src';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import OciusGlobeAlt from '../components/Icons/OciusGlobeAlt';
import Segmented from '../components/Segmented';
import HeroBlock from '../components/HeroBlock';
import Heading from '../components/Heading';
import ArticlePreviewBlock from '../components/ArticlePreviewBlock';
import NewsletterForm from '../components/NewsletterForm';
import ContactUs from '../components/ContactUs';
import { Spacing } from '../components/common';

const OilAndGasPage = ({ data }) => (
  <Layout>
    <SEO
      title="Oil &amp; Gas"
      description="Uncrewed Surface Vessels (USVs) are already being used in the Oil and Gas industry. Bluebottle USVs can do more. Seadbed and Pipeline Surveys, Security, Environment Monitoring, "
    />
    {data.HeroBackground && (
      <HeroBlock
        image={data.HeroBackground.childImageSharp.gatsbyImageData.images.fallback}
        masked
        scrim="blue"
        fallbackColor="#55a1d2"
      >
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Spacing $value="280px" />
            <Heading level={1} color="white" size="huge" weight="thick" underline="left">
              Oil &amp; Gas
            </Heading>
            <Heading level={2} color="white" size="medium" weight="normal" as="p">
              USVs are already being used in the Oil &amp; Gas industry for projects such as seabed
              and pipeline surveys, environment monitoring and security.
            </Heading>
            <Spacing $value="80px" />
          </Col>
        </Row>
      </HeroBlock>
    )}

    <Grid>
      <Segmented>
        <Row className="centered">
          <Col xs={12} md={12} lg={12}>
            <Spacing $value="80px" />
            <Heading level={2} size="large" weight="thick" underline="center">
              Ocius can do more for the oil &amp; gas industry
            </Heading>
          </Col>
        </Row>
      </Segmented>

      <Segmented>
        <Row>
          <Col xs={12} md={4} lg={4}>
            <OciusGlobeAlt
              fill="#4db4e6"
              style={{
                height: '120px',
                marginBottom: '10px',
                width: 'auto',
              }}
            />
            <Heading level={4} color="#2b2e34" size="medium" weight="thick" underline="left">
              Seabed &amp; Pipeline Surveys
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
            <OciusGlobeAlt
              fill="#4db4e6"
              style={{
                height: '120px',
                marginBottom: '10px',
                width: 'auto',
              }}
            />
            <Heading level={4} color="#2b2e34" size="medium" weight="thick" underline="left">
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
          <Col xs={12} md={4} lg={4}>
            <OciusGlobeAlt
              fill="#4db4e6"
              style={{
                height: '120px',
                marginBottom: '10px',
                width: 'auto',
              }}
            />
            <Heading level={4} color="#2b2e34" size="medium" weight="thick" underline="left">
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
    </Grid>

    <Segmented>
      <Grid>
        <Row className="centered">
          <Col xs={12} md={8} lg={8} mdOffset={2}>
            <Heading level={2} size="large" weight="thick" underline="center">
              Ocius news headlines
            </Heading>
          </Col>
        </Row>
        <ArticlePreviewBlock />
      </Grid>
    </Segmented>

    <Segmented>
      <NewsletterForm />
    </Segmented>
    <Segmented>
      <ContactUs />
    </Segmented>
  </Layout>
);

export const query = graphql`
  {
    HeroBackground: file(relativePath: { eq: "images/solutions-oil-and-gas-bg.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 85, layout: FULL_WIDTH)
      }
    }
  }
`;

export default OilAndGasPage;
