import React from 'react';
import { graphql } from 'gatsby';
import Loadable from '@loadable/component';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Segmented from '../components/Segmented';
import Button from '../components/Button';
import HeroBlock from '../components/HeroBlock';
import Heading from '../components/Heading';
import SolutionsBlock from '../components/SolutionsBlock';
import CoreTechnologiesBlock from '../components/CoreTechnologiesBlock';
import { Spacing, LogoBackgroundWrapper, DarkAccentRowWrapper } from '../components/common';
import mq from '../common/mq';

import Blueybuoy from '../images/vessel-blueybuoy.svg';
import TrimaranVessel from '../images/vessel-trimaran.svg';
import BluebottleVessel from '../images/vessel-bluebottle.svg';

// Lazy load all the components
const ArticlePreviewBlock = Loadable(() => import(`../components/ArticlePreviewBlock`));
const NewsletterForm = Loadable(() => import(`../components/NewsletterForm`));
const ContactUs = Loadable(() => import(`../components/ContactUs`));

const RadarImage = styled(Img)`
  margin: 0 -2.5em -8em;
  z-index: 2;

  @media (max-width: ${mq.max[768]}) {
    margin: -10em -1em 0;
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="OCIUS - Satellites of the Sea"
      description="OCIUS Technology's Uncrewed Surface Vessels (USVs) provide innovative autonomous solutions for persistent maritime surveillance"
    />

    {data.HeroBackground && (
      <HeroBlock
        image={data.HeroBackground.childImageSharp.fluid}
        scrim="dark"
        fallbackColor="#e3edf3"
      >
        <Row>
          <Col xs={12} md={6} lg={5}>
            <Spacing $value="80px" />
            <Heading level={1} size="huge" weight="thick" header underline="left">
              Autonomous
              <br />
              maritime
              <br />
              surveillance
            </Heading>
            <Heading level={2} size="medium" weight="normal" as="p">
              Intelligent, networked &amp; integrated
            </Heading>
            <Spacing $value="280px" $mdValue="270px" $xsValue="230px" />
          </Col>
        </Row>
      </HeroBlock>
    )}
    <DarkAccentRowWrapper>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            {data.Computer && (
              <RadarImage fluid={data.Computer.childImageSharp.fluid} alt="Radar" />
            )}
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Spacing $value="50px" $mdValue="0px" $xsValue="0px" />
            <Heading level={3} color="white" size="large" weight="thick" underline="left">
              A new generation
              <br />
              of autonomous
              <br />
              ocean monitoring
            </Heading>
            <p className="white">
              Power large payloads, roam widely, and stay at sea for months at a time. Ocius USVs
              offer economic and operational advantages over conventional methods in a multitude of
              industries. Utilising solar, wind and wave power, these vessels can autonomously
              monitor designated areas for lengths of time. The videos and links below demonstrate
              just some of the solutions we offer.
            </p>
            <Button color="blue" size="tiny" href="/usv">
              Find out more
            </Button>
            <Button color="transparent" size="tiny" href="/live" border>
              Watch live
            </Button>
          </Col>
        </Row>
      </Container>
      <Spacing $value="0px" $mdValue="30px" $xsValue="0px" />
    </DarkAccentRowWrapper>

    <LogoBackgroundWrapper>
      <CoreTechnologiesBlock />
    </LogoBackgroundWrapper>

    <SolutionsBlock />

    <LogoBackgroundWrapper position="left">
      <Segmented>
        <Container className="page-content centered">
          <Row className="centered">
            <Col xs={12} md={8} lg={8} mdOffset={2}>
              <Spacing $value="80px" />
              <Heading level={2} size="large" weight="thick" underline="center">
                Ocius Vessels
              </Heading>
            </Col>
          </Row>
          <Row className="primary-content left-align">
            <Col xs={12} md={6} lg={4}>
              <img src={Blueybuoy} width="367" height="314" alt="Bluey Buoy Class Vessel" />
              <Heading level={3} size="medium" weight="thick">
                Bluey Buoy Class
              </Heading>
              <ul>
                <li>Self deploying, movable, self retrieving buoy</li>
                <li>Uses solar &amp; wave energy</li>
                <li>Scalable from 1.1m/3.6’</li>
                <li>10kg/22lb lightship &amp; 10kg/22lb payload</li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <img src={BluebottleVessel} width="367" height="314" alt="Bluebottle Class Vessel" />
              <Heading level={3} size="medium" weight="thick">
                Bluebottle Class
              </Heading>
              <ul>
                <li>Uses solar, wind &amp; wave energy</li>
                <li>Up to 6.8m/22’ in length</li>
                <li>Payload up to 600kg/1320lb</li>
                <li>Keel cassette winch to 200m</li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <img src={TrimaranVessel} width="367" height="314" alt="Stinger Class Vessel" />
              <Heading level={3} size="medium" weight="thick">
                Stinger Class (Concept)
              </Heading>
              <ul>
                <li>Loiter/stealth uses solar &amp; wave energy</li>
                <li>Pursuit uses diesel power</li>
                <li>Scalable</li>
                <li>Mono or multihull design</li>
              </ul>
            </Col>
          </Row>
          <Button color="blue" size="tiny" href="/usv/">
            Find out more
          </Button>
        </Container>
      </Segmented>

      <Segmented>
        <Container>
          <Row className="centered">
            <Col xs={12} md={8} lg={8} mdOffset={2}>
              <Spacing $value="80px" />
              <Heading level={2} size="large" weight="thick" underline="center">
                Ocius news headlines
              </Heading>
            </Col>
          </Row>
          <ArticlePreviewBlock />
        </Container>
      </Segmented>
    </LogoBackgroundWrapper>

    <Segmented>
      <NewsletterForm />
    </Segmented>
    <Segmented>
      <ContactUs />
    </Segmented>
  </Layout>
);

export const query = graphql`
  query getHomepageImages {
    HeroBackground: file(relativePath: { eq: "images/ocius-bg.jpg" }) {
      ...imageSharpHeroBackground
    }

    Computer: file(relativePath: { eq: "images/computer.png" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }

  fragment imageSharpHeroBackground on File {
    childImageSharp {
      fluid(quality: 80, maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;

export default IndexPage;
