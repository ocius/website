import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Loadable from '@loadable/component';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import BluebottleOverview from '../components/Overview';

// Lazy load components
const Heading = Loadable(() => import(`../components/Heading`));
const PageHeader = Loadable(() => import(`../components/PageHeader`));
const TechnicalSpecificationForm = Loadable(() => import(`./bluebottle-usv-brochure`));
const ResponsiveIframe = Loadable(() => import(`../components/ResponsiveIframe`));

export default ({ data }) => (
  <Layout>
    <SEO
      title="Unmanned Surface Vessel"
      description="A USV is an Unmanned Surface Vessel. Bluebottle USVs are autonomous data gathering communications platform, the satellites of the sea."
    />
    <PageHeader>
      <Heading level={1} size="huge" header>
        Drones
      </Heading>
    </PageHeader>
    <Container className="page-content">
      <Row>
        <Col className="primary-content" xs={12} md={12} lg={12}>
          <header className="centered">
            <Heading level={1} size="huge" underline>
              What is a USV?
            </Heading>
            <Heading level={2} size="medium">
              A USV is an Unmanned Surface Vessel
            </Heading>
          </header>
          <Heading level={4} size="small">
            <strong>There are two types:</strong>
          </Heading>
          <ol>
            <li>
              Conventional powered vessels which are unmanned. They have limited time and range at
              sea and are acoustically noisy.
            </li>
            <li>
              Renewable energy powered vessels which are unmanned. They use solar and/or wind and/or
              wave energy so are persistent and can stay at sea indefinitely only limited by
              biofouling. Bluebottles are in this category.
            </li>
          </ol>
          <header className="centered">
            <Heading level={1} size="huge" underline>
              The Bluebottle USV
            </Heading>
            <Heading level={2} size="medium">
              Sattelites of the Sea
            </Heading>
            Autonomous data gathering and communication platforms
          </header>

          <ResponsiveIframe
            title="PAC2019 Overview"
            src="https://www.youtube.com/embed/7vhvKcc-UPk"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p>
            Bluebottle USVs&nbsp;have greater <strong>power, payload and performance</strong>
            &nbsp;compared to known competitors and are able to navigate freely and indefinitely
            across the world’s oceans. Already Ocius is working with two major private-sector
            partners to develop USVs capable of undertaking specific high value applications in
            hydrography and defence.
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={8}>
          <BluebottleOverview data={data} />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <h3>Bluebottle USV</h3>
          <li>Advance in all conditions</li>
          <li>5 knot hull speed</li>
          <li>Launch from boat ramp / ship</li>
          <li>300kg modular payload</li>
          <li>50W average payload power</li>
          <li>Intelligent network</li>
          <li>Team behaviours</li>
          <li>Human on the loop, not in the loop</li>

          <h3>Discriminators</h3>
          <li>Solar + wind + wave power</li>
          <li>Ability to get out of currents</li>
          <li>More payload, power and presence</li>
          <li>Unique solar-sail and rudder-flipper</li>
          <li>Keel winch to lower sensors to variable depths</li>
          <li>100% Australian Sovereign Capability</li>

          <h3>Advantages</h3>
          <li>Continuous coverage</li>
          <li>Wide coverage</li>
          <li>Greatly reduced capital costs</li>
          <li>No fuel, food or crew</li>
          <li>Elimination of errors due to human fatigue</li>
          <li>No people or expensive assets in harm&apos;s way</li>
        </Col>
      </Row>
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

          <p className="centered">
            <Img
              fluid={data.BluebottleImage ? data.BluebottleImage.childImageSharp.fluid : ''}
              alt="Bluebottle USV"
            />
          </p>
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
