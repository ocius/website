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
import Icon from '../components/Icon';

// Import bluebottle illustration
import Bluebottle from '../images/bluebottle.svg';
import LogoBackground from './about/images/ocius-logo-transparent.png';

// Lazy load all the components
const SidebarWidget = Loadable(() => import(`../components/SidebarWidget`));
const PanelCallout = Loadable(() => import(`../components/PanelCallout`));
const PanelCalloutGroup = Loadable(() => import(`../components/PanelCalloutGroup`));
const ArticlePreviewBlock = Loadable(() => import(`../components/ArticlePreviewBlock`));
const RecentNews = Loadable(() => import(`../components/RecentNews`));
const Sidebar = Loadable(() => import(`../components/Sidebar`));

const HeroSubheading = styled.p`
  color: #2d4355;
  font-size: 2em;
  line-height: 1.2;
`;

const Spacing = styled.div`
  height: ${(props) => props.$value || '50px'};
`;

const RadarImage = styled(Img)`
  margin-bottom: -6em;
`;

const LogoBackgroundWrapper = styled.div`
  background-image: url(${LogoBackground});
  background-repeat: no-repeat;
  background-position: center right;
`;

export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title="OCIUS - Satellites of the Sea"
        description="OCIUS Technology's Unmanned Surface Vessels (USVs) provide innovative autonomous solutions for persistent maritime surveillance"
      />

      {data.HeroBackground && (
        <HeroBlock image={data.HeroBackground.childImageSharp.fluid} masked scrim="dark">
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
              <HeroSubheading>Intelligent, networked &amp; integrated</HeroSubheading>
              <Spacing $value="280px" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={6}>
              {data.Computer && (
                <RadarImage fluid={data.Computer.childImageSharp.fluid} alt="Radar" />
              )}
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Spacing $value="80px" />
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
        </HeroBlock>
      )}
      <LogoBackgroundWrapper>
        <Container>
          <Segmented borderBottom="">
            <Row className="centered">
              <Col xs={12} md={8} lg={8} mdOffset={2}>
                <Spacing $value="80px" />
                <Heading level={2} size="large" underline="center">
                  The core technology behind Ocius
                </Heading>
              </Col>
            </Row>
            <Spacing $value="80px" />
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
                <p>
                  When deployed, the patented hard solar sail harnesses both solar and wind energy.
                  When not desired it automatically folds snuggly into the deck of the Bluebottle
                  like the wing of a bird, so 100% retracted but also not taking up precious payload
                  space within the vessel. Intelligent programming means the solar sail reacts
                  autonomously to the sea, sun &amp; wind conditions to ensure efficient and safe
                  operation for all mission requirements.
                </p>

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
                <p>
                  The patented rudder-flipper steers, guides and powers the unmanned vessel
                  generating forward thrust from the pitching of the vessel in the waves of the
                  ocean. The bigger the sea state the stronger the forces. In seastates over
                  Seastate 6 the solarsail automatically lowers and the rudder passively propels the
                  vessel in the desired direction. If left in the mid position it passively turns
                  the bow of the Bluebottle into the oncoming seas giving Bluebottles unprecedented
                  seakeeping and survival capabilities.
                </p>
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
                <p>
                  Multiple sensors are available as options underwater, inside the hull and on the
                  aft comms mast. An Integrated and networked communication system allows live
                  tracking. All vessels can be monitored while operating autonomously or controlled
                  remotely, constantly sending data back to the control room.
                </p>
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
                <p>
                  The patented ‘keel winch’ is a cassette that displaces water ballast in the keel -
                  so adding or changing a cassette does not interfere with the displacement or trim
                  of the Bluebottle. The cassette can be flat packed and shipped to anywhere in the
                  world for customers to install, commission and test their sensor or array on the
                  winch before inserting it into the payload bay of a Bluebottle - being ready to
                  go.
                </p>
              </Col>
            </Row>
          </Segmented>
        </Container>
      </LogoBackgroundWrapper>

      <div id="solutions" style={{ backgroundColor: '#efefef', paddingBottom: '20px' }}>
        <Segmented borderBottom="">
          <PanelCalloutGroup>
            {data.DefenceTile && (
              <PanelCallout
                bgImage={data.DefenceTile.childImageSharp.fluid}
                title="Defence"
                url="/defence"
              >
                <p>Anti Submarine Warfare</p>
                <p>Electronic Warfare</p>
                <p>Gateway Coms</p>
                <p>Mine Counter Measures</p>
              </PanelCallout>
            )}

            {data.OilTile && (
              <PanelCallout
                bgImage={data.OilTile.childImageSharp.fluid}
                title="Oil &amp; Gas"
                url="/oil-and-gas"
              >
                <p>Mapping pipelines</p>
                <p>Security</p>
                <p>Environmental monitoring</p>
              </PanelCallout>
            )}

            {data.ScienceTile && (
              <PanelCallout
                bgImage={data.ScienceTile.childImageSharp.fluid}
                title="Science"
                url="/science"
              >
                <p>Environmental monitoring</p>
                <p>Seabed Mapping</p>
              </PanelCallout>
            )}
          </PanelCalloutGroup>
        </Segmented>

        <Container>
          <Segmented borderBottom="">
            <ArticlePreviewBlock />
          </Segmented>
        </Container>

        <Container>
          <Sidebar>
            <SidebarWidget className="recent-news">
              <RecentNews />
            </SidebarWidget>
          </Sidebar>
        </Container>
      </div>
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

    ScienceTile: file(relativePath: { eq: "images/Science-Home-Tile-Background.jpg" }) {
      ...imageSharpTile
    }

    OilTile: file(relativePath: { eq: "images/Oil-Home-Tile-Background.jpg" }) {
      ...imageSharpTile
    }

    DefenceTile: file(relativePath: { eq: "images/Defence-Home-Tile-Background.jpg" }) {
      ...imageSharpTile
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
