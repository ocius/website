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
import Heading from '../components/Heading';
import Button from '../components/Button';
import ResponsiveIframe from '../components/ResponsiveIframe';
import OciusGlobeAlt from '../components/Icons/OciusGlobeAlt';
import ArticlePreviewBlock from '../components/ArticlePreviewBlock';
import NewsletterForm from '../components/NewsletterForm';
import CoreTechnologiesBlock from '../components/CoreTechnologiesBlock';
import ContactUs from '../components/ContactUs';
import {
  Spacing,
  FirstColumnMobile,
  SecondColumnMobile,
  AccentRowWrapper,
} from '../components/common';

// Import bluebottle illustration
import Bluebottle from '../images/bluebottle.svg';
import Blueybuoy from '../images/vessel-blueybuoy.svg';
import TrimaranVessel from '../images/vessel-trimaran.svg';
import BluebottleVessel from '../images/vessel-bluebottle.svg';

// Lazy load components
const TechnicalSpecificationForm = Loadable(() =>
  import(`../components/Forms/TechnicalSpecificationForm`)
);

const SubHeading = styled.p`
  color: #4ab4e6;
  margin-top: 0;
`;

const USVPage = ({ data }) => (
  <Layout>
    <SEO
      title="Uncrewed Surface Vessel"
      description="A USV is an Uncrewed Surface Vessel. Bluebottle USVs are autonomous data gathering communications platform, the satellites of the sea."
    />
    {data.HeroImage && (
      <HeroBlock
        image={data.HeroImage.childImageSharp.fluid}
        masked
        scrim="blue"
        fallbackColor="#bacce2"
      >
        <Row>
          <SecondColumnMobile xs={12} md={5} lg={5}>
            <Spacing $value="180px" />
            <Heading level={1} size="huge" weight="thick" underline="left">
              Ocius
              <br />
              Drones
            </Heading>
            <Heading level={2} size="medium" weight="normal" as="p">
              Persistent maritime surveillance
            </Heading>
            <Button size="tiny" color="blue" href="/usv/#technical">
              Find out more
            </Button>
            <Spacing $value="380px" $xsValue="80px" />
          </SecondColumnMobile>
          <FirstColumnMobile className="centered" xs={12} md={7} lg={7}>
            <Spacing $value="180px" />
            <ResponsiveIframe
              src="https://www.youtube.com/embed/7vhvKcc-UPk?rel=0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
            <Heading level={2} size="medium">
              Watch video
            </Heading>
          </FirstColumnMobile>
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
              shadow
            >
              What is a USV?
            </Heading>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col className="right-align" xs={12} md={5} lg={5}>
              <Heading level={2} color="white" size="medium" weight="thick" shadow>
                A USV is an
              </Heading>
              <Heading
                level={3}
                color="white"
                size="large"
                weight="thick"
                style={{ marginTop: 0 }}
                shadow
              >
                Uncrewed
                <br />
                Surface
                <br />
                Vessel
              </Heading>
            </Col>
            <Col xs={12} md={5} lg={5} mdOffset={1}>
              <Heading level={4} color="white" size="small" weight="thick">
                There are two types:
              </Heading>
              <ol>
                <li style={{ marginBottom: 20 }}>
                  Conventional powered vessels which are uncrewed. They have limited time and range
                  at sea and are acoustically noisy.
                </li>
                <li>
                  Renewable energy powered vessels which are uncrewed. They use solar and/or wind
                  and/or wave energy so are persistent and can stay at sea indefinitely only limited
                  by biofouling. Bluebottles are in this category.
                </li>
              </ol>
            </Col>
          </Row>
        </Container>
        <Spacing $value="100px" $xsValue="0px" />
      </HeroBlock>
    )}
    <Container className="page-content">
      <Row className="centered">
        <Col xs={12} md={8} lg={8} mdOffset={2}>
          <Spacing $value="80px" />
          <Heading level={2} size="large" weight="thick" underline="center">
            The Bluebottle USV
          </Heading>
        </Col>
      </Row>
      <Segmented>
        <Row>
          <SecondColumnMobile className="primary-content" xs={12} md={6} lg={5}>
            <header>
              <Heading level={2} size="medium" weight="thick" underline="left">
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
          </SecondColumnMobile>
          <FirstColumnMobile xs={12} md={6} lg={6} lgOffset={1}>
            <img src={Bluebottle} alt="Bluebottle Ocius" />
          </FirstColumnMobile>
        </Row>
      </Segmented>
    </Container>

    <AccentRowWrapper>
      <Container>
        <Segmented>
          <Row className="centered">
            <Col xs={12} md={8} lg={8} mdOffset={2}>
              <Spacing $value="80px" />
              <Heading level={2} size="large" weight="thick" underline="center">
                Key benefits of BlueBottle USVs
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
              <OciusGlobeAlt
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
              <OciusGlobeAlt
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

    <CoreTechnologiesBlock />

    <AccentRowWrapper>
      <Container>
        <Segmented>
          <Row className="centered">
            <Col xs={12} md={8} lg={8} mdOffset={2}>
              <Spacing $value="80px" />
              <Heading level={2} size="large" weight="thick" underline="center">
                Superior Payload,
                <br /> Power &amp; Performance
              </Heading>
            </Col>
          </Row>
        </Segmented>
        <Segmented>
          <Row>
            <Col className="centered" xs={12} md={6} lg={6}>
              <Img
                fluid={data.BluebottleImage ? data.BluebottleImage.childImageSharp.fluid : ''}
                alt="Bluebottle USV"
              />
              <Spacing $value="0px" />
            </Col>
            <Col xs={12} md={6} lg={6}>
              <SubHeading>
                Other persistent USVs carry only small payloads, have low power for the payload and
                often have low performance to manoeuvre, avoid collisions and &apos;make way&apos;
                out of currents.
              </SubHeading>
              <p>
                Bluebottles harvest all the weather on the ocean; the sun, the wind and the waves so
                they can advance under all conditions and can remain at sea for months at a time.
              </p>
              <p>
                Applications for USVs are myriad and measured in the billions of dollars. Major
                entities in offshore energy, defence and science are investing heavily in uncrewed
                systems for “dull, dirty or dangerous” operations. Independent industry research
                estimates the USV market for defence alone to be a staggering{' '}
                <a href="http://marketinfogroup.com/unmanned-surface-vehicles-for-defense-and-security-markets-technologies/">
                  US$3.8Bn by 2020
                </a>
                .
              </p>
              <p>
                The team at Ocius are focusing all of our experience, networks and love of the sea
                to create a revolutionary Australian technology for the world’s oceans.
              </p>
            </Col>
          </Row>
        </Segmented>
      </Container>
    </AccentRowWrapper>

    <Container>
      <TechnicalSpecificationForm />
    </Container>

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
            <img src={Blueybuoy} alt="Bluey Buoy Class Vessel" />
            <Heading level={3} size="medium" weight="thick">
              Bluey Buoy Class
            </Heading>
            <ul>
              <li>Self deploying, movable, self retrieving buoy</li>
              <li>Uses solar &amp; wave energy</li>
              <li>Scalable from 1.1m/3.6’</li>
              <li>10kg/22lb lightship &amp; 10kg/22lb payload</li>
            </ul>
            <Button color="blue" size="tiny" href="/usv/#technical">
              Find out more
            </Button>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <img src={BluebottleVessel} alt="Bluebottle Class Vessel" />
            <Heading level={3} size="medium" weight="thick">
              Bluebottle Class
            </Heading>
            <ul>
              <li>Uses solar, wind &amp; wave energy</li>
              <li>Up to 6.8m/22’ in length</li>
              <li>Payload up to 600kg/1320lb</li>
              <li>Keel cassette winch to 200m</li>
            </ul>
            <Button color="blue" size="tiny" href="/usv/#technical">
              Find out more
            </Button>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <img src={TrimaranVessel} alt="Stinger Class Vessel" />
            <Heading level={3} size="medium" weight="thick">
              Stinger Class (Concept)
            </Heading>
            <ul>
              <li>Loiter/stealth uses solar &amp; wave energy</li>
              <li>Pursuit uses diesel power</li>
              <li>Scalable</li>
              <li>Mono or multihull design</li>
            </ul>
            <Button color="blue" size="tiny" href="/usv/#technical">
              Find out more
            </Button>
          </Col>
        </Row>
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
    HeroImage: file(relativePath: { eq: "images/usv-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 83, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    BluebottleImage: file(relativePath: { eq: "images/bluebottle-bridge.jpg" }) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 768) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default USVPage;
