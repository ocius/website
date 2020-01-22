import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Loadable from '@loadable/component';
import SEO from '../components/SEO';
import Layout from '../layouts/Layout';
import PageHeader from '../components/PageHeader';
import Container from '../components/Container';
import Heading from '../components/Heading';

// Lazy load components
const Sidebar = Loadable(() => import(`../components/Sidebar`));

const styles = {
  underline: {
    textDecoration: 'underline'
  }
};

export default () => (
  <Layout>
    <SEO
      title="Careers"
      description="Working with Ocius &#8211; &#8220;Oceans is us&#8221; Ocius is an Australian public unlisted
      Sydney-based SME (small to medium enterprise) operating at the cutting edge of technology to design and
      build autonomous robots."
    />
    <PageHeader>
      <Heading level={1} size="huge" header>
        Careers
      </Heading>
    </PageHeader>
    <section className="page-content">
      <Container>
        <Row>
          <Col className="primary-content" xs={12} md={7} lg={7}>
            <article>
              <Heading level={2} size="large">
                Working with Ocius – “Oceans is us”
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
              <Heading level={3} size="medium">
                Featured Jobs
              </Heading>
              <pre>
                <span style={styles.underline}>Roles</span>&nbsp;- Junior Software and Systems
                Engineers
              </pre>
              <pre>
                <span style={styles.underline}>Contact</span> - lloyd@Ocius.com.au
              </pre>
              <pre>
                <span style={styles.underline}>Compensation</span> - Commensurate to experience
              </pre>
              <pre>
                <span style={styles.underline}>Description</span> - See below:
              </pre>
              <p>
                Are you a talented C++ Embedded Software Engineer with experience developing
                autonomous vehicle solutions? You will be involved in a wide variety of
                software/hardware product development activities for Ocius’&nbsp;Unmanned Surface
                Vehicles.&nbsp;You will contribute to product requirements and&nbsp;designs. You
                will be hands-on in the development, assembly,and testing of prototype vehicles. To
                be successful in obtaining this role, you will possess the following:
              </p>
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
            </article>
          </Col>
          <Col className="secondary-content" xs={12} md={5} lg={4} lgOffset={1}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
);
