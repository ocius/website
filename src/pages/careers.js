import React from 'react';
import Header from '../components/header';
import Layout from '../layouts/Layout';
import Container from '../components/Container';
import Row from '../components/GridRow';
import Column from '../components/GridColumn';
import RecentNews from '../components/RecentNews';

const styles = {
  underline: {
    textDecoration: 'underline'
  }
};

export default () => (
  <Layout>
    <Header title="Careers" description="Job openings at Ocius" />
    <section className="page-content">
      <Container>
        <Row>
          <Column className="primary-content" sm={8} md={7} lg={7} fluid>
            <article>
              <h2>Working with Ocius – “Oceans is us”</h2>
              <p>
                Ocius is an Australian public unlisted Sydney-based SME (small to medium enterprise)
                operating at the cutting edge of technology to design and build autonomous robots
                that can ‘live’ in the ocean using the energy of the weather on the ocean – sun wind
                and waves – to act as monitoring and communications platforms.
              </p>
              <p>
                If you like a challenge, can work in a team, love the ocean and believe in a
                positive future you could be part of our exciting future.
              </p>
              <h3>Featured Jobs</h3>
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
          </Column>
          <Column className="secondary-content" sm={4} md={5} lg={4} lgShift={1} fluid>
            <RecentNews />
          </Column>
        </Row>
      </Container>
    </section>
  </Layout>
);
