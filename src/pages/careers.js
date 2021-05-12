import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid/src';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import SEO from '../components/SEO';
import Segmented from '../components/Segmented';
import Layout from '../layouts/Layout';
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

const CareersPage = ({ data }) => (
  <Layout>
    <SEO
      title="Careers"
      description="Working with Ocius &#8211; &#8220;Oceans is us&#8221; Ocius is an Australian public unlisted
      Sydney-based SME (small to medium enterprise) operating at the cutting edge of technology to design and
      build autonomous robots."
    />
    <section className="page-content">
      <Grid>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Spacing $value="80px" />
            <Heading level={1} size="huge" weight="thick" underline="left">
              Careers
            </Heading>
          </Col>
        </Row>
        <Spacing $value="20px" $xsValue="0" />

        <Segmented multiplier={2} borderBottom>
          <Row>
            <CenteredCol xs={12} md={6} lg={5}>
              <Heading level={2} size="medium" weight="thick">
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
              <GatsbyImage
                image={data.OciusTeam ? data.OciusTeam.childImageSharp.gatsbyImageData : ''}
                alt="Ocius team"
              />
            </Col>
          </Row>
        </Segmented>

        <Row>
          <Col xs={12} md={7} lg={7}>
            <Segmented multiplier={2} borderBottom>
              <Heading level={3} size="medium" weight="thick">
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
                software/hardware product development activities for Ocius’ Uncrewed Surface
                Vehicles. You will contribute to product requirements and designs. You will be
                hands-on in the development, assembly,and testing of prototype vehicles.
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
            </Segmented>

            <Segmented multiplier={2} borderBottom>
              <Heading level={3} size="medium" weight="thick">
                Electrical Technician
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
                <Accent>Background:</Accent>
                <br />
                Ocius is an Australian company that builds autonomous Uncrewed Surface Vessels
                (USVs). These USVs use the energy of the weather - sun, wind and waves - to act as
                persistent monitoring and communications platforms. We are embarking on an ambitious
                program of building and deploying multiple USVs for operations around the Australia.
              </p>
              <p>
                This program has created the need for an Electrical Technician responsible for
                creation, maintenance and repair of all USV electronic components and equipment used
                in our vessels.
              </p>

              <p>
                <Accent>Duties and Responsibilities:</Accent>
              </p>
              <ul style={{ marginTop: 0 }}>
                <li>Electrical design (Power and Communications).</li>
                <li>Installation of electrical components.</li>
                <li>Conduct electrical maintenance on USVs.</li>
                <li>Fault finding in mechanical and electrical systems.</li>
                <li>Research &amp; Development support on new USV technology.</li>
                <li>Accompanying USV offshore on support boat during testing.</li>
                <li>On occasion particpate in remote watchkeeping of the USVs when at sea.</li>
                <li>On occasion, conducting general mechanical maintenance of USVs.</li>
                <li>
                  Implementing, maintaining, managing and updating all standard operating procedures
                  and processes appropriate to the role.
                </li>
              </ul>

              <p>
                <Accent>Requirements:</Accent>
              </p>
              <ul style={{ marginTop: 0 }}>
                <li>Fully Qualified Electrician.</li>
                <li>Experience in Industrial/Control system wiring.</li>
                <li>Current drivers licence.</li>
                <li>Mechanical aptitude.</li>
                <li>Strong computer literacy skills.</li>
                <li>Ability to adhere to strict health and safety guidelines.</li>
                <li>
                  Ability to obtain and maintain a minimum of Defence Security Clearance–Baseline.
                </li>
                <li>
                  Enthusiastic, positive and proactive nature with a keen attention to detail.
                </li>
              </ul>

              <p>
                <Accent>Desirable:</Accent>
              </p>
              <ul style={{ marginTop: 0 }}>
                <li>
                  Maritime maintenance experience - industry/defence/hobby would be acceptable.
                </li>
                <li>Sailing experience.</li>
                <li>Keen interest in autonomous systems.</li>
              </ul>
            </Segmented>

            <Segmented>
              <Heading level={3} size="medium" weight="thick">
                Operation Supervisor
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
                <Accent>Background:</Accent>
                <br />
                Ocius is an Australian company that builds autonomous Uncrewed Surface Vessels
                (USVs). These USVs use the energy of the weather – sun wind and waves – to act as
                persistent monitoring and communications platforms. We are embarking on an ambitious
                program of building and deploying multiple USVs for operations.
              </p>
              <p>
                A key part of this program is to deploy and operate the USVs for extended periods of
                time around Australia.
              </p>

              <p>
                <Accent>Duties and Responsibilities:</Accent>
              </p>
              <ul style={{ marginTop: 0 }}>
                <li>
                  Planning, vessel preparation, deployment, coodination and supervision of
                  operations.
                </li>
                <li>Working with the Engineering team to coordinate maintenance requirements.</li>
                <li>Accompanying USV offshore on support boat during sea trials.</li>
                <li>
                  Provide local, on the ground, assessment of conditions and circumstances to aid
                  project decisions.
                </li>
                <li>Coordinate and particpate in remote watchkeeping of the USVs when at sea.</li>
                <li>
                  Capturing and reporting lessons learnt during USV operations to assist the design
                  and constuction of USVs.
                </li>
                <li>
                  Implementing, maintaining, managing and updating all standard operating procedures
                  and processes appropriate to the role.
                </li>
                <li>Maintenance of USVs</li>
                <li>
                  Being responsible for training other team members to the required standards,
                  including coaching and mentoring of others.
                </li>
                <li>Plan mobilisation for new projects and engage with local stakeholders.</li>
                <li>On occasion, assist with the assembly and testing of USVs.</li>
              </ul>

              <p>
                <Accent>Requirements:</Accent>
              </p>
              <ul style={{ marginTop: 0 }}>
                <li>Maritime industry or defence experience relevant to the position.</li>
                <li>Current drivers licence.</li>
                <li>Mechanical and/or electrical aptitude.</li>
                <li>Strong computer literacy skills.</li>
                <li>Ability to adhere to strict health and safety guidelines.</li>
                <li>
                  Excellent organisational skills and the ability to interact confidently with
                  others.
                </li>
                <li>
                  Ability to obtain and maintain a minimum of Defence Security Clearance–Baseline.
                </li>
                <li>
                  Enthusiastic, positive and proactive nature with a keen attention to detail.
                </li>
              </ul>

              <p>
                <Accent>Desirable:</Accent>
              </p>
              <ul style={{ marginTop: 0 }}>
                <li>Relevant Certificate of Competency as issued by AMSA.</li>
                <li>Sailing experience.</li>
                <li>Experience in maritime surveillance operations.</li>
                <li>Keen interest in autonomous systems.</li>
              </ul>
            </Segmented>

            <Segmented>
              <Heading level={3} size="medium" weight="thick">
                Ground Control Operator
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
                <Accent>Background:</Accent>
                <br />
                Ocius is an Australian company that builds autonomous Uncrewed Surface Vessels
                (USVs). These USVs use the energy of the weather – sun wind and waves – to act as
                persistent monitoring and communications platforms. We are embarking on an ambitious
                program of building and deploying multiple USVs for operations.
              </p>
              <p>
                A key part of this program is to deploy and operate the USVs for extended periods of
                time around Australia. Though autonomous there is a requirement for someone on a
                shore based ground control station to monitor the state of the vessels.
              </p>

              <p>
                <Accent>Duties and Responsibilities:</Accent>
              </p>
              <ul style={{ marginTop: 0 }}>
                <li>Safe navigation of the USV in compliance with COLREGS.</li>
                <li>
                  Interpretation of weather data before and during missions to ensure the safe
                  operation of the USV.
                </li>
                <li>
                  Keeping watch on cameras for other marine traffic in the area including buoys,
                  fishing gear and any other potential hazards to the USV.
                </li>
                <li>Keeping watch, using external services such as marine traffic.</li>
                <li>Maintaining mission logs including vessel systems.</li>
                <li>Piloting of USVs from on a 24-hour shift operation schedule.</li>
              </ul>

              <p>
                <Accent>On occasion this role may involve:</Accent>
              </p>
              <ul style={{ marginTop: 0 }}>
                <li>
                  Assisting with mobilisation of USV’s for projects including road transport to
                  project locations. Preparation and launch of USVs at project location and on water
                  escorting of USV to harbour limits. Demobilisation of USV post mission.
                </li>
                <li>Assisting with testing of USVs including launching and operating USV/RHIB.</li>
                <li>
                  Assiting with implementing, maintaining, managing and updating all standard
                  operating procedures and processes appropriate to the role.
                </li>
              </ul>

              <p>
                <Accent>Requirements:</Accent>
              </p>
              <ul style={{ marginTop: 0 }}>
                <li>
                  Assiting with implementing, maintaining, managing and updating all standard
                  operating procedures and processes appropriate to the role.
                </li>
                <li>Current drivers licence.</li>
                <li>Ability to adhere to strict health and safety guidelines.</li>
                <li>
                  Ability to obtain and maintain a minimum of Defence Security Clearance–Baseline.
                </li>
                <li>
                  Enthusiastic, positive and proactive nature with a keen attention to detail.
                </li>
              </ul>

              <p>
                <Accent>Desirable:</Accent>
              </p>
              <ul style={{ marginTop: 0 }}>
                <li>Maritime industry or defence experience relevant to the position.</li>
                <li>Relevant Certificate of Competency as issued by AMSA.</li>
                <li>Sailing experience.</li>
                <li>Keen interest in autonomous systems.</li>
              </ul>
            </Segmented>
          </Col>
        </Row>
      </Grid>

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
  {
    OciusTeam: file(relativePath: { eq: "images/ocius_team.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, width: 962, layout: CONSTRAINED)
      }
    }
  }
`;

export default CareersPage;
