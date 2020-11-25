import React from 'react';
import { graphql } from 'gatsby';
import Loadable from '@loadable/component';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Img from 'gatsby-image';
import ReadMoreReact from 'read-more-react';
import Layout from '../layouts/Layout';
import mq from '../common/mq';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Segmented from '../components/Segmented';
import Button from '../components/Button';
import HeroBlock from '../components/HeroBlock';
import Heading from '../components/Heading';
import Icon from '../components/Icon';

// Import bluebottle illustration
import Bluebottle from '../images/bluebottle.svg';
import Blueybuoy from '../images/vessel-blueybuoy.svg';
import TrimaranVessel from '../images/vessel-trimaran.svg';
import BluebottleVessel from '../images/vessel-bluebottle.svg';
import LogoBackground from './about/images/ocius-logo-transparent.png';

// Lazy load all the components
const ArticlePreviewBlock = Loadable(() => import(`../components/ArticlePreviewBlock`));
const NewsletterForm = Loadable(() => import(`../components/NewsletterForm`));

const HeroSubheading = styled.p`
  color: #2d4355;
  font-size: 1.5em;
  line-height: 1.2;
`;

const Spacing = styled.div`
  height: ${(props) => props.xs || '50px'};
  @media (min-width: ${mq.min[768]}) {
    height: ${(props) => props.md || '50px'};
  }
`;

const HeroFooter = styled(HeroBlock)`
  margin-top: -6em; */
`;

const LogoBackgroundWrapper = styled.div`
  background-image: url(${LogoBackground});
  background-repeat: no-repeat;
  background-position: 130% center;
`;

const LogoBackgroundWrapperLeft = styled.div`
  background-image: url(${LogoBackground});
  background-repeat: no-repeat;
  background-position: -30% center;
`;

const AccentRowWrapper = styled.div`
  background-color: #edf7fc;
  overflow: hidden;

  &:before {
    content: '';
    position: relative;
    left: 0;
    top: 0;
    float: left;
    display: block;
    height: 4rem;
    width: 100vw;
    background: hsla(0, 0%, 100%, 0.5);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 70 500 60' preserveAspectRatio='none'%3E%3Crect x='0' y='0' width='500' height='500' style='stroke: none; fill: %23edf7fc;' /%3E%3Cpath d='M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z' style='stroke: none; fill: %23ffffff;'%3E%3C/path%3E%3C/svg%3E");
    background-size: 100% 100%;
  }
`;

export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title="OCIUS - Satellites of the Sea"
        description="OCIUS Technology's Unmanned Surface Vessels (USVs) provide innovative autonomous solutions for persistent maritime surveillance"
      />

      {data.HeroBackground && (
        <HeroBlock image={data.HeroBackground.childImageSharp.fluid} fill="#131d21">
          <Container>
            <Spacing xs="30px" md="160px" />
            <Heading level={1} size="huge" weight="thick" header underline="left">
              Autonomous
              <br />
              maritime
              <br />
              surveillance
            </Heading>
            <HeroSubheading>Intelligent, networked &amp; integrated</HeroSubheading>
            <Button color="blue" size="tiny" href="/usv">
              Find out more
            </Button>
            <Spacing xs="230px" md="380px" />
          </Container>
        </HeroBlock>
      )}
      <HeroBlock masked scrim="dark" fill="#131d21">
        <Container>
          <Row>
            <Col xs={12} md={6} lg={6}>
              {data.Computer && <Img fluid={data.Computer.childImageSharp.fluid} alt="Radar" />}
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Heading level={3} color="white" size="large" weight="thick" underline="left">
                A new generation
                <br />
                Of autonomous
                <br />
                Ocean monitoring.
              </Heading>
              <p>
                Power large payloads, roam widely, and stay at sea for months at a time. Ocius USVs
                offer economic and operational advantages over conventional methods in a multitude
                of industries. Utilising solar, wind and wave power, these vessels can autonomously
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
      </HeroBlock>
      <LogoBackgroundWrapper>
        <Container>
          <Segmented borderBottom="">
            <Row className="centered">
              <Col xs={12} md={8} lg={8} mdOffset={2}>
                <Spacing xs="80px" />
                <Heading level={2} size="large" underline="center">
                  The core technology behind Ocius
                </Heading>
              </Col>
            </Row>
            <Spacing xs="80px" />
            <Row>
              <Col xs={12} md={3} lg={3}>
                <Icon.SolarSun
                  fill="#0fb0e1"
                  style={{
                    width: '62px',
                    height: '62px',
                  }}
                />
                <Icon.SolarFlare
                  fill="#0fb0e1"
                  style={{
                    width: '62px',
                    height: '62px',
                    marginLeft: '5px',
                  }}
                />
                <Icon.SolarPower
                  fill="#0fb0e1"
                  style={{
                    width: '62px',
                    height: '62px',
                    marginLeft: '5px',
                  }}
                />
                <Heading level={3} size="medium">
                  Solar Sail
                </Heading>
                <ReadMoreReact
                  text="When deployed, the patented hard solar sail harnesses both solar and wind energy.
                  When not desired it automatically folds snuggly into the deck of the Bluebottle
                  like the wing of a bird, so 100% retracted but also not taking up precious payload
                  space within the vessel. Intelligent programming means the solar sail reacts
                  autonomously to the sea, sun &amp; wind conditions to ensure efficient and safe
                  operation for all mission requirements."
                  min={140}
                  ideal={160}
                  max={180}
                  readMoreText="Read more"
                />

                <Spacing xs="40px" />
                <Icon.RudderCurrent
                  fill="#0fb0e1"
                  style={{
                    width: '62px',
                    height: '62px',
                  }}
                />
                <Icon.RudderNav
                  fill="#0fb0e1"
                  style={{
                    width: '62px',
                    height: '62px',
                    marginLeft: '5px',
                  }}
                />
                <Heading level={3} size="medium">
                  Rudder Flipper
                </Heading>
                <ReadMoreReact
                  text="The patented rudder-flipper steers, guides and powers the unmanned vessel
                  generating forward thrust from the pitching of the vessel in the waves of the
                  ocean. The bigger the sea state the stronger the forces. In seastates over
                  Seastate 6 the solarsail automatically lowers and the rudder passively propels the
                  vessel in the desired direction. If left in the mid position it passively turns
                  the bow of the Bluebottle into the oncoming seas giving Bluebottles unprecedented
                  seakeeping and survival capabilities."
                  min={140}
                  ideal={160}
                  max={180}
                  readMoreText="Read more"
                />
              </Col>
              <Col xs={12} md={6} lg={6}>
                <img src={Bluebottle} alt="Bluebottle Ocius" />
              </Col>
              <Col xs={12} md={3} lg={3}>
                <Icon.SensorCommunication
                  fill="#0fb0e1"
                  style={{
                    width: '62px',
                    height: '62px',
                  }}
                />
                <Icon.SensorLocation
                  fill="#0fb0e1"
                  style={{
                    width: '62px',
                    height: '62px',
                  }}
                />
                <Icon.SensorTravel
                  fill="#0fb0e1"
                  style={{
                    width: '62px',
                    height: '62px',
                  }}
                />
                <Heading level={3} size="medium">
                  Sensors and Communication
                </Heading>
                <ReadMoreReact
                  text="Multiple sensors are available as options underwater, inside the hull and on the
                  aft comms mast. An Integrated and networked communication system allows live
                  tracking. All vessels can be monitored while operating autonomously or controlled
                  remotely, constantly sending data back to the control room."
                  min={140}
                  ideal={160}
                  max={180}
                  readMoreText="Read more"
                />

                <Spacing xs="40px" />
                <Icon.KeelWinch
                  fill="#0fb0e1"
                  style={{
                    width: '62px',
                    height: '62px',
                  }}
                />
                <Icon.KeelLength
                  fill="#0fb0e1"
                  style={{
                    width: '62px',
                    height: '62px',
                  }}
                />
                <Heading level={3} size="medium">
                  Keel Winch Cassette
                </Heading>
                <ReadMoreReact
                  text="The patented ‘keel winch’ is a cassette that displaces water ballast in the keel -
                  so adding or changing a cassette does not interfere with the displacement or trim
                  of the Bluebottle. The cassette can be flat packed and shipped to anywhere in the
                  world for customers to install, commission and test their sensor or array on the
                  winch before inserting it into the payload bay of a Bluebottle - being ready to
                  go."
                  min={120}
                  ideal={180}
                  max={200}
                  readMoreText="Read more"
                />
              </Col>
            </Row>
          </Segmented>
        </Container>
      </LogoBackgroundWrapper>

      <AccentRowWrapper>
        <Segmented borderBottom="">
          <Container className="page-content">
            <Row className="centered" id="solutions">
              <Col xs={12} md={8} lg={8} mdOffset={2}>
                <Spacing xs="80px" />
                <Heading level={2} size="large" underline="center">
                  How Ocius is changing the world
                </Heading>
              </Col>
            </Row>
            <Row className="primary-content">
              <Col xs={12} md={6} lg={4}>
                {data.DefenceIcon && (
                  <Img fixed={data.DefenceIcon.childImageSharp.fixed} alt="Defence Solutions" />
                )}
                <Heading level={3} size="medium" underline="left">
                  Defence
                </Heading>
                <ul>
                  <li>Anti-Submarine Warfare</li>
                  <li>Intelligence, Surveillance &amp; Reconnaissance</li>
                  <li>Electronic Warfare</li>
                  <li>Mine Counter Measures</li>
                  <li>Gateway Communications</li>
                </ul>
                <Button color="blue" size="tiny" href="/defence">
                  Find out more
                </Button>
              </Col>
              <Col xs={12} md={6} lg={4}>
                {data.OilAndGasIcon && (
                  <Img
                    fixed={data.OilAndGasIcon.childImageSharp.fixed}
                    alt="Oil and Gas Solutions"
                  />
                )}
                <Heading level={3} size="medium" underline="left">
                  Oil &amp; Gas
                </Heading>
                <ul>
                  <li>Seabed and Pipeline Surveys</li>
                  <li>Environment Monitoring</li>
                  <li>Security</li>
                </ul>
                <Button color="blue" size="tiny" href="/oil-and-gas">
                  Find out more
                </Button>
              </Col>
              <Col xs={12} md={6} lg={4}>
                {data.ScienceIcon && (
                  <Img fixed={data.ScienceIcon.childImageSharp.fixed} alt="Science Solutions" />
                )}
                <Heading level={3} size="medium" underline="left">
                  Science
                </Heading>
                <ul>
                  <li>Weather “ground truth“</li>
                  <li>Current profiling</li>
                  <li>Climate Change</li>
                  <li>Hurricane Landfall Prediction</li>
                  <li>Fisheries</li>
                </ul>
                <Button color="blue" size="tiny" href="/science">
                  Find out more
                </Button>
              </Col>
            </Row>
          </Container>
        </Segmented>
      </AccentRowWrapper>

      <LogoBackgroundWrapperLeft>
        <Segmented borderBottom="">
          <Container className="page-content centered">
            <Row className="centered">
              <Col xs={12} md={8} lg={8} mdOffset={2}>
                <Spacing xs="80px" />
                <Heading level={2} size="large" underline="center">
                  Ocius Vessels
                </Heading>
              </Col>
            </Row>
            <Row className="primary-content left-align">
              <Col xs={12} md={6} lg={4}>
                <img src={Blueybuoy} alt="Bluey Buoy Class Vessel" />
                <Heading level={3} size="medium">
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
                <img src={BluebottleVessel} alt="Bluebottle Class Vessel" />
                <Heading level={3} size="medium">
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
                <img src={TrimaranVessel} alt="Stinger Class Vessel" />
                <Heading level={3} size="medium">
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
            <Button color="blue" size="tiny" href="/usv">
              Find out more
            </Button>
          </Container>
        </Segmented>

        <Segmented borderBottom="">
          <Container>
            <Row className="centered">
              <Col xs={12} md={8} lg={8} mdOffset={2}>
                <Spacing xs="80px" />
                <Heading level={2} size="large" underline="center">
                  Ocius news headlines
                </Heading>
              </Col>
            </Row>
            <ArticlePreviewBlock />
          </Container>
        </Segmented>
      </LogoBackgroundWrapperLeft>

      <Segmented borderBottom="">
        <NewsletterForm />
      </Segmented>
      <Segmented borderBottom="">
        <Container className="page-content">
          <Heading level={3} color="#36BBE7" size="large" weight="thick" underline="left">
            Contact Us
          </Heading>
          <Row>
            <Col xs={12} md={3} lg={3}>
              <p>
                <strong>Ocius Headquarters</strong>
                <br />
                Building R13
                <br />
                UNSW Randwick Campus
                <br />
                22 King St, Randwick NSW 2031
              </p>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <p>
                <strong>Postal Address</strong>
                <br />
                Mail PO Box 4304 Castlecrag
                <br />
                NSW 2068
              </p>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <p>
                <strong>General Enquiries:</strong>
                <br />
                +61 2 9924 6400
                <br />
                contact@ocius.com.au
              </p>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <p>
                <strong>Open Hours:</strong>
                <br />
                Mon - Fri: 9am - 5pm
                <br />
                Sat - Sun: Closed
              </p>
            </Col>
          </Row>
        </Container>
      </Segmented>
    </Layout>
  );
};

export const query = graphql`
  query getHomepageImages {
    HeroBackground: file(relativePath: { eq: "images/ocius-bg.png" }) {
      ...imageSharpHeroBackground
    }

    Computer: file(relativePath: { eq: "images/computer.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    DefenceIcon: file(relativePath: { eq: "images/solutions-defence.png" }) {
      ...imageSharpIcons
    }

    OilAndGasIcon: file(relativePath: { eq: "images/solutions-oilandgas.png" }) {
      ...imageSharpIcons
    }

    ScienceIcon: file(relativePath: { eq: "images/solutions-science.png" }) {
      ...imageSharpIcons
    }
  }

  fragment imageSharpIcons on File {
    childImageSharp {
      fixed(width: 199) {
        ...GatsbyImageSharpFixed
      }
    }
  }

  fragment imageSharpHeroBackground on File {
    childImageSharp {
      fluid(quality: 100, maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }

  fragment imageSharpTile on File {
    childImageSharp {
      fluid(maxWidth: 600, maxHeight: 470, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;
