import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import SEO from '../components/SEO';
import Segmented from '../components/Segmented';
import Layout from '../layouts/Layout';
import Container from '../components/Container';
import Heading from '../components/Heading';
import NewsletterForm from '../components/NewsletterForm';
import ContactUs from '../components/ContactUs';
import { Spacing } from '../components/common';

const Accent = styled.span`
  color: #4ab4e6;
  font-weight: 700;
`;

const CenteredCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default ({ data }) => (
  <Layout>
    <SEO
      title="Careers"
      description="Working with Ocius &#8211; &#8220;Oceans is us&#8221; Ocius is an Australian public unlisted
      Sydney-based SME (small to medium enterprise) operating at the cutting edge of technology to design and
      build autonomous robots."
    />
    <section className="page-content">
      <Container>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Spacing $value="80px" />
            <Heading level={1} size="huge" underline="left">
              Careers
            </Heading>
          </Col>
        </Row>
        <Spacing $value="20px" />

        <Segmented multiplier={2} borderBottom>
          <Row>
            <CenteredCol xs={12} md={6} lg={5}>
              <Heading level={2} size="medium">
                Working with Ocius <Accent>“Oceans is us”</Accent>
              </Heading>
              <p>
                Ocius is an Australian company that builds autonomous ocean robots. These drones use
                the energy of the weather – sun wind and waves – to act as monitoring and
                communications platforms.
              </p>
              <p>
                If you like a challenge, can work in a team, and love the ocean you could be part of
                our exciting future.
              </p>
            </CenteredCol>
            <Col xs={12} md={6} lg={6} lgOffset={1}>
              <Img
                fluid={data.OciusTeam ? data.OciusTeam.childImageSharp.fluid : ''}
                alt="Ocius team"
              />
            </Col>
          </Row>
        </Segmented>

        <Row>
          <Col xs={12} md={7} lg={7}>
            <Heading level={3} size="medium">
              Junior Software
              <br />
              and Systems Engineers
            </Heading>

            <p>
              <Accent>Contact:</Accent>
              <br />
              lloyd@Ocius.com.au
            </p>

            <p>
              <Accent>Compensation:</Accent>
              <br />
              Commensurate to experience
            </p>

            <p>
              <Accent>Description:</Accent>
              <br />
              Are you a talented C++ Embedded Software Engineer with experience developing
              autonomous vehicle solutions? You will be involved in a wide variety of
              software/hardware product development activities for Ocius’ Unmanned Surface Vehicles.
              You will contribute to product requirements and designs. You will be hands-on in the
              development, assembly,and testing of prototype vehicles.
            </p>

            <p>
              <Accent>
                To be successful in obtaining this role, you will possess the following:
              </Accent>
            </p>
            <ul style={{ marginTop: 0 }}>
              <li>Extensive experience with Autonomous Vehicles.</li>
              <li>Ability to develop on Windows, Linux and embedded systems.</li>
              <li>C/C++/C#/JavaScript/Python development experience.</li>
              <li>Strong mechanical aptitude.</li>
              <li>Strong communication skills.</li>
              <li>Self-Starter / Highly Motivated.</li>
              <li>Commercial product development experience.</li>
              <li>Sailing experience.</li>
              <li>Experience with Ardupilot and supporting tools is highly desirable.</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Segmented>
        <NewsletterForm />
      </Segmented>
      <Segmented>
        <ContactUs />
      </Segmented>
    </section>
  </Layout>
);

export const query = graphql`
  query {
    OciusTeam: file(relativePath: { eq: "images/ocius_team.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 962) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
