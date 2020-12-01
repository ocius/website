import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Loadable from '@loadable/component';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Heading from '../components/Heading';
import { Spacing } from '../components/common';

// Lazy load components
const Sidebar = Loadable(() => import(`../components/Sidebar`));

const addressStyle = {
  display: 'block',
  padding: '1em 0',
  fontStyle: 'normal',
};

export default () => (
  <Layout>
    <SEO
      title="Contact"
      description="For General Enquiries Main Phone: +61 2 9924 6400 Email: contact@ocius.com.au For Shareholder Enquiries
      Email: cosecretary@ocius.com.au
      NSW 2052 Phone: +61 2 9924 6400 Postal Address: Office Box 4304 Castlecrag Australia 2068"
    />
    <section className="page-content">
      <Container>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Spacing $value="80px" />
            <Heading level={1} size="huge" underline="left">
              Contact us
            </Heading>
          </Col>
        </Row>
        <Row>
          <Col className="primary-content" xs={12} md={7} lg={7}>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <p>
                  <strong>Ocius Headquarters:</strong>
                  <address style={addressStyle}>
                    Building R13
                    <br />
                    UNSW Randwick Campus
                    <br />
                    22 King St, Randwick NSW 2031
                  </address>
                </p>

                <p>
                  <strong>Postal Address:</strong>
                  <address style={addressStyle}>
                    Mail PO Box 4304 Castlecrag 2068 NSW
                    <br />
                    Australia
                  </address>
                </p>

                <p>
                  <strong>General Enquiries</strong>
                  <address style={addressStyle}>
                    Phone: <a href="callto:+61299246400">+61 2 9924 6400</a>
                    <br />
                    Email: <a href="mailto:contact@ocius.com.au">contact@ocius.com.au</a>
                  </address>
                </p>

                <p>
                  <strong>Shareholder Enquiries</strong>
                  <address style={addressStyle}>
                    Email: <a href="mailto:cosecretary@ocius.com.au">cosecretary@ocius.com.au</a>
                  </address>
                </p>
                <p>
                  <strong>Open Hours:</strong>
                  <br />
                  <time style={addressStyle} itemProp="openingHours" value="Mo-Fr 08:00-17:00">
                    Mon - Fri: 8am - 5pm
                    <br />
                    Sat - Sun: Closed
                  </time>
                </p>
              </Col>
              <Col xs={12} md={6} lg={6} />
            </Row>
            <Row>
              <Col xs={12} md={6} lg={6} />
              <Col xs={12} md={6} lg={6} />
            </Row>
          </Col>
          <Col className="secondary-content" xs={12} md={5} lg={4} lgOffset={1}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
);
