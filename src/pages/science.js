import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Row, Col } from 'react-flexbox-grid';
import Layout from '../layouts/Layout';
import HeroBlock from '../components/HeroBlock';
import Heading from '../components/Heading';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Segmented from '../components/Segmented';
import Icon from '../components/Icon';
import ArticlePreviewBlock from '../components/ArticlePreviewBlock';
import NewsletterForm from '../components/NewsletterForm';
import ContactUs from '../components/ContactUs';
import { Spacing } from '../components/common';

const HeroSubheading = styled.p`
  color: #ffffff;
  font-size: 2em;
  line-height: 1.2;
`;

export default ({ data }) => (
  <Layout>
    <SEO
      title="Science"
      description="Persistent Unmanned Surface Vessels (USVs) are valuable tools for oceanographic and climate change research. Bluebottle USVs can monitor Weather “ground truth“, Climate Change, Hurricane landfall, Fisheries."
    />
    {data.HeroBackground && (
      <HeroBlock image={data.HeroBackground.childImageSharp.fluid} masked scrim="blue">
        <Row>
          <Col xs={12} md={6} lg={6}>
            <Spacing $value="80px" />
            <Heading level={1} color="white" size="huge" weight="thick" underline="left">
              Science
            </Heading>
            <HeroSubheading>
              Persistent USVs are valuable tools for oceanographic and climate change research.
              <br />
              Find out how Ocius can help you do more.
            </HeroSubheading>
            <Spacing $value="280px" />
          </Col>
        </Row>
      </HeroBlock>
    )}

    <Container>
      <Segmented>
        <Row className="centered">
          <Col xs={12} md={12} lg={12}>
            <Spacing $value="80px" />
            <Heading level={2} size="large" underline="center">
              How Ocius can help monitor our natural environment
            </Heading>
          </Col>
        </Row>
      </Segmented>
      <Segmented>
        <Row>
          <Col xs={12} md={4} lg={4}>
            <Icon.OciusGlobeAlt
              fill="#4db4e6"
              style={{
                height: '120px',
                marginBottom: '10px',
                width: 'auto',
              }}
            />
            <Heading level={4} color="#2b2e34" size="medium" weight="thick" underline="left">
              Weather LIVE
            </Heading>
            <ul className="left-align">
              <li>Wind direction &amp; strength</li>
              <li>Solar intensity &amp; cloud</li>
              <li>Wave direction &amp; height</li>
              <li>Air pressure</li>
              <li>Water temperature</li>
              <li>Camera shots</li>
              <li>All transmitted back to base in real time</li>
            </ul>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <Icon.OciusGlobeAlt
              fill="#4db4e6"
              style={{
                height: '120px',
                marginBottom: '10px',
                width: 'auto',
              }}
            />
            <Heading level={4} color="#2b2e34" size="medium" weight="thick" underline="left">
              Data Storage On-Board
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
            <Icon.OciusGlobeAlt
              fill="#4db4e6"
              style={{
                height: '120px',
                marginBottom: '10px',
                width: 'auto',
              }}
            />
            <Heading level={4} color="#2b2e34" size="medium" weight="thick" underline="left">
              Multiple options
            </Heading>
            <ul className="left-align">
              <li>Discuss with us your mission goals</li>
              <li>Replace expensive bouys with mobile platforms</li>
              <li>Configure your own modular payload</li>
              <li>150 kg wet sensors and 150 kg dry equipment</li>
            </ul>
          </Col>
        </Row>
      </Segmented>
    </Container>

    <Segmented>
      <Container>
        <Row className="centered">
          <Col xs={12} md={8} lg={8} mdOffset={2}>
            <Heading level={2} size="large" underline="center">
              Ocius news headlines
            </Heading>
          </Col>
        </Row>
        <ArticlePreviewBlock />
      </Container>
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
  query {
    HeroBackground: file(relativePath: { eq: "images/solutions-science-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
