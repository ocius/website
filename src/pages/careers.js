import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import SEO from '../components/SEO';
import Layout from '../layouts/Layout';
import Container from '../components/Container';
import Heading from '../components/Heading';

const SubHeading = styled(Heading)`
  color: #4ab4e6;
`;

export default () => (
  <Layout>
    <SEO
      title="Careers"
      description="Working with Ocius &#8211; &#8220;Oceans is us&#8221; Ocius is an Australian public unlisted
      Sydney-based SME (small to medium enterprise) operating at the cutting edge of technology to design and
      build autonomous robots."
    />
    <Container>
      <Row>
        <Col xs={12}>
          <Heading level={1} size="huge" header underline>
            Careers
          </Heading>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Heading level={4} size="medium">
            Working with Ocius – “Oceans is us”
          </Heading>
          Ocius is an Australian company that builds autonomous ocean robots. These drones use the
          energy of the weather – sun wind and waves – to act as monitoring and communications
          platforms. If you like a challenge, can work in a team, and love the ocean you could be
          part of our exciting future.
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col xs={12}>
          <Heading level={6} size="medium">
            Junior Software and Systems Engineers Contact
          </Heading>
          <SubHeading level={6} size="small">
            Contact
          </SubHeading>
          lloyd@Ocius.com.au
          <SubHeading level={6} size="small">
            Compensation
          </SubHeading>
          Commensurate to experience
          <SubHeading level={6} size="small">
            Description
          </SubHeading>
          Are you a talented C++ Embedded Software Engineer with experience developing autonomous
          vehicle solutions? You will be involved in a wide variety of software/hardware product
          development activities for Ocius’&nbsp;Unmanned Surface Vehicles.&nbsp;You will contribute
          to product requirements and&nbsp;designs. You will be hands-on in the development,
          assembly,and testing of prototype vehicles.
          <SubHeading level={6} size="small">
            To be successful in obtaining this role, you will possess the following:
          </SubHeading>
          <ul>
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
  </Layout>
);
