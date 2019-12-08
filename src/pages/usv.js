import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Loadable from '@loadable/component';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import BluebottleImage from '../../static/wallpaperocius-768x432.jpg';

// Lazy load components
const Heading = Loadable(() => import(`../components/Heading`));
const PageHeader = Loadable(() => import(`../components/PageHeader`));
const TechnicalSpecificationForm = Loadable(() => import(`./bluebottle-usv-brochure`));

export default ({ data }) => (
  <Layout>
    <SEO
      title="Drones"
      description="A USV is an Unmanned Surface Vessel There are two types: Conventional powered vessels which are
      unmanned. They have limited time and range at sea and are acoustically noisy. Renewable energy powered vessels
      which are unmanned."
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
            <iframe
              title="PAC2019 Overview"
              width="100%"
              height="390"
              src="https://www.youtube.com/embed/7vhvKcc-UPk"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
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
          <Heading level={4} size="small">
            <strong>Bluebottle USVs are the new &apos;Satellites Of the Sea&apos;.</strong>
          </Heading>
          <p>
            Bluebottle USVs are autonomous data gathering &amp; communications platforms being like
            &apos;satellites of the sea&apos;. They offer&nbsp;multiple economic and operational
            advantages over conventional methods of ocean surveillance such as:
          </p>
          <ul>
            <li>Continuous coverage</li>
            <li>Wide coverage</li>
            <li>Greatly reduced capital costs</li>
            <li>Greatly reduced operational costs - no fuel, food or crew</li>
            <li>Elimination of errors due to human fatigue</li>
            <li>No people or expensive assets in harm&apos;s way</li>
          </ul>
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
            <strong>
              Bluebottles have more power, payload and performance in the one USV than any known
              persistent USV.
            </strong>
          </p>
          <p className="centered">
            <img src={BluebottleImage} alt="Bluebottle USV" />
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
            Bluebottle USVs&nbsp;have greater <strong>power, payload and performance</strong>
            &nbsp;compared to known competitors and are able to navigate freely and indefinitely
            across the world’s oceans. Already Ocius is working with two major private-sector
            partners to develop USVs capable of undertaking specific high value applications in
            hydrography and defence.
          </p>
          <p>
            The team at Ocius are focusing all of our experience, networks and love of the sea to
            create a revolutionary Australian technology for the world’s oceans.
          </p>
          <p>
            <strong>
              We&apos;d love to hear from you.&nbsp; Tell us what you think about our product or how
              it could benefit your organisation.
            </strong>
          </p>
        </Col>
        <Col xs={12} md={12} lg={12}>
          <header id="overview" className="centered">
            <Heading level={1} size="huge" underline>
              BlueBottle Overview
            </Heading>
          </header>
          <Img
            style={{ margin: '2.25rem 0' }}
            fluid={data.Overview ? data.Overview.childImageSharp.fluid : ''}
          />
        </Col>
        <TechnicalSpecificationForm />
      </Row>
    </Container>
  </Layout>
);

export const query = graphql`
  query {
    Overview: file(relativePath: { eq: "images/170927-OVERVIEW-FOR-WEBSITE_001.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
