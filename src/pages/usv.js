import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-flexbox-grid';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Loadable from '@loadable/component';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import HeroBlock from '../components/HeroBlock';
import Container from '../components/Container';
import Segmented from '../components/Segmented';
import Button from '../components/Button';
import Icon from '../components/Icon';
import { Spacing, HeroSubheading, AccentRowWrapper } from '../components/common';

// Import SVG images
import Bluebottle from '../images/bluebottle.svg';

// Lazy load components
const Heading = Loadable(() => import(`../components/Heading`));
const TechnicalSpecificationForm = Loadable(() => import(`./bluebottle-usv-brochure`));

const SubHeading = styled.p`
  color: #4ab4e6;
  margin-top: 0;
`;

export default ({ data }) => (
  <Layout>
    <SEO
      title="Unmanned Surface Vessel"
      description="A USV is an Unmanned Surface Vessel. Bluebottle USVs are autonomous data gathering communications platform, the satellites of the sea."
    />
    {data.HeroImage && (
      <HeroBlock image={data.HeroImage.childImageSharp.fluid} masked scrim="blue">
        <Row>
          <Col xs={12} md={5} lg={5}>
            <Spacing $value="180px" />
            <Heading level={1} size="huge" weight="thick" underline="left">
              Ocius
              <br />
              Drones
            </Heading>
            <HeroSubheading>
              Persistent maritime surveillance, defences from the ground up.
            </HeroSubheading>
            <Button size="tiny" color="blue">
              Find out more
            </Button>
            <Spacing $value="380px" />
          </Col>
        </Row>
        <Row className="centered">
          <Col xs={12} md={8} lg={8} mdOffset={2}>
            <Heading
              level={3}
              className="centered"
              color="white"
              size="large"
              weight="thick"
              underline="center"
            >
              What is a USV?
            </Heading>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col className="right-align" xs={12} md={5} lg={5}>
              <Heading level={2} color="white" size="medium">
                A USV is an
              </Heading>
              <Heading level={3} color="white" size="large" style={{ marginTop: 0 }}>
                Unmanned
                <br />
                Surface
                <br />
                Vessel
              </Heading>
            </Col>
            <Col xs={12} md={5} lg={5} mdOffset={1}>
              <Heading level={4} color="white" size="small">
                There are two types:
              </Heading>
              <ol>
                <li style={{ marginBottom: 20 }}>
                  Conventional powered vessels which are unmanned. They have limited time and range
                  at sea and are acoustically noisy.
                </li>
                <li>
                  Renewable energy powered vessels which are unmanned. They use solar and/or wind
                  and/or wave energy so are persistent and can stay at sea indefinitely only limited
                  by biofouling. Bluebottles are in this category.
                </li>
              </ol>
            </Col>
          </Row>
        </Container>
        <Spacing $value="100px" />
      </HeroBlock>
    )}
    <Container className="page-content">
      <Row className="centered">
        <Col xs={12} md={8} lg={8} mdOffset={2}>
          <Spacing $value="80px" />
          <Heading level={2} size="large" underline="center">
            The Bluebottle USV
          </Heading>
        </Col>
      </Row>
      <Segmented>
        <Row>
          <Col className="primary-content" xs={12} md={5} lg={5}>
            <header>
              <Heading level={2} size="medium" underline="left">
                Satellites of the Sea
              </Heading>
              <SubHeading>Autonomous data gathering and communication platforms</SubHeading>
            </header>

            <p style={{ marginBottom: 40 }}>
              Bluebottle USVs&nbsp;have greater <strong>power, payload and performance</strong>
              &nbsp;compared to known competitors and are able to navigate freely and indefinitely
              across the world’s oceans. Already Ocius is working with two major private-sector
              partners to develop USVs capable of undertaking specific high value applications in
              hydrography and defence.
            </p>
            <Button
              type="outbound"
              size="tiny"
              color="blue"
              href="https://www.youtube.com/watch?v=7vhvKcc-UPk"
            >
              Watch video
            </Button>
          </Col>
          <Col xs={12} md={6} lg={6} mdOffset={1}>
            <img src={Bluebottle} alt="Bluebottle Ocius" />
          </Col>
        </Row>
      </Segmented>
    </Container>

    <AccentRowWrapper>
      <Container>
        <Segmented>
          <Row className="centered">
            <Col xs={12} md={8} lg={8} mdOffset={2}>
              <Spacing $value="80px" />
              <Heading level={2} size="large" underline="center">
                Key benefits of BlueBottle USVs
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
                Bluebottle USV
              </Heading>
              <ul className="left-align">
                <li>Advance in all conditions</li>
                <li>5 knot hull speed</li>
                <li>Launch from boat ramp / ship</li>
                <li>300kg modular payload</li>
                <li>50W average payload power</li>
                <li>Intelligent network</li>
                <li>Team behaviours</li>
                <li>Human on the loop, not in the loop</li>
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
                Discriminators
              </Heading>
              <ul className="left-align">
                <li>Solar + wind + wave power</li>
                <li>Ability to get out of currents</li>
                <li>More payload, power and presence</li>
                <li>Unique solar-sail and rudder-flipper</li>
                <li>Keel winch to lower sensors to variable depths</li>
                <li>100% Australian Sovereign Capability</li>
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
                Advantages
              </Heading>
              <ul className="left-align">
                <li>Continuous coverage</li>
                <li>Wide coverage</li>
                <li>Greatly reduced capital costs</li>
                <li>No fuel, food or crew</li>
                <li>Elimination of errors due to human fatigue</li>
                <li>No people or expensive assets in harm&apos;s way</li>
              </ul>
            </Col>
          </Row>
        </Segmented>
      </Container>
    </AccentRowWrapper>

    <Container>
      <Row>
        <Col className="primary-content" xs={12} md={12} lg={12}>
          <p>
            Other persistent USVs carry only small payloads, have low power for the payload and
            often have low performance to manoeuvre, avoid collisions and &apos;make way&apos; out
            of currents.
          </p>
          <p className="centered">
            <strong>
              Bluebottles harvest all the weather on the ocean; the sun, the wind and the waves so
              they can advance under all conditions and can remain at sea for months at a
              time.&nbsp;
            </strong>
          </p>

          <div className="centered">
            <Img
              fluid={data.BluebottleImage ? data.BluebottleImage.childImageSharp.fluid : ''}
              alt="Bluebottle USV"
            />
          </div>
          <p>
            Applications for USVs are myriad and measured in the billions of dollars. Major entities
            in offshore energy, defence and science are investing heavily in unmanned systems for
            “dull, dirty or dangerous” operations. Independent industry research estimates the USV
            market for defence alone to be a staggering
            <a href="http://marketinfogroup.com/unmanned-surface-vehicles-for-defense-and-security-markets-technologies/">
              &nbsp;US$3.8Bn by 2020
            </a>
            .
          </p>
          <p>
            The team at Ocius are focusing all of our experience, networks and love of the sea to
            create a revolutionary Australian technology for the world’s oceans.
          </p>
        </Col>
      </Row>
      <Row>
        <p>
          <strong>
            We&apos;d love to hear from you.&nbsp; Tell us what you think about our product or how
            it could benefit your organisation.
          </strong>
        </p>
        <TechnicalSpecificationForm />
      </Row>
    </Container>
  </Layout>
);

export const query = graphql`
  query {
    HeroImage: file(relativePath: { eq: "images/usv-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    BluebottleImage: file(relativePath: { eq: "images/wallpaperocius-768x432.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 768) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    Background: file(relativePath: { eq: "images/overview/bluebottle.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    Keel: file(relativePath: { eq: "images/overview/keel.png" }) {
      childImageSharp {
        fixed(width: 130) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    Comms: file(relativePath: { eq: "images/overview/comms.jpg" }) {
      childImageSharp {
        fixed(width: 130) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    Flipper: file(relativePath: { eq: "images/overview/flipper.png" }) {
      childImageSharp {
        fixed(width: 130) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    Hmi: file(relativePath: { eq: "images/overview/hmi.png" }) {
      childImageSharp {
        fixed(width: 130) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    Ramp: file(relativePath: { eq: "images/overview/ramp.jpg" }) {
      childImageSharp {
        fixed(width: 130) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    Sail: file(relativePath: { eq: "images/overview/sail.jpg" }) {
      childImageSharp {
        fixed(width: 130) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    Team: file(relativePath: { eq: "images/overview/team.jpg" }) {
      childImageSharp {
        fixed(width: 130) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    Winch: file(relativePath: { eq: "images/overview/winch.png" }) {
      childImageSharp {
        fixed(width: 130) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;
