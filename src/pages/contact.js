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
  padding: '0.5em 0',
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
                <section itemScope itemType="https://schema.org/Organization">
                  <p>
                    <strong>
                      <span itemProp="name">Ocius</span> Headquarters:
                    </strong>
                    <div itemScope itemProp="location" itemType="https://schema.org/Place">
                      <address
                        style={addressStyle}
                        itemProp="address"
                        itemScope
                        itemType="https://schema.org/PostalAddress"
                      >
                        <span itemProp="streetAddress">
                          Building R13
                          <br />
                          UNSW Randwick Campus
                          <br />
                          22 King St
                        </span>
                        , <span itemProp="addressLocality">Randwick</span>{' '}
                        <span itemProp="addressRegion">NSW</span>{' '}
                        <span itemProp="postalCode">2031</span>
                      </address>
                    </div>
                  </p>

                  <p>
                    <strong>Postal Address:</strong>
                    <address
                      style={addressStyle}
                      itemScope
                      itemProp="address"
                      itemType="http://schema.org/PostalAddress"
                    >
                      <span itemProp="postOfficeBoxNumber">Mail PO Box 4304</span>{' '}
                      <span itemProp="addressLocality">Castlecrag</span>{' '}
                      <span itemProp="postalCode">2068</span>{' '}
                      <span itemProp="addressRegion">NSW</span>
                      <br />
                      <span itemProp="addressCountry">Australia</span>
                    </address>
                  </p>

                  <div itemScope itemProp="contactPoint" itemType="https://schema.org/ContactPoint">
                    <p>
                      <strong itemProp="contactType">General Enquiries</strong>
                      <address style={addressStyle}>
                        Phone:{' '}
                        <a itemProp="telephone" href="callto:+61299246400">
                          +61 2 9924 6400
                        </a>
                        <br />
                        Email:{' '}
                        <a itemProp="email" href="mailto:contact@ocius.com.au">
                          contact@ocius.com.au
                        </a>
                      </address>
                    </p>
                  </div>

                  <div itemScope itemProp="contactPoint" itemType="https://schema.org/ContactPoint">
                    <p>
                      <strong itemProp="contactType">Shareholder Enquiries</strong>
                      <address style={addressStyle}>
                        Email:{' '}
                        <a itemProp="email" href="mailto:cosecretary@ocius.com.au">
                          cosecretary@ocius.com.au
                        </a>
                      </address>
                    </p>
                  </div>

                  <div itemScope itemProp="contactPoint" itemType="https://schema.org/ContactPoint">
                    <p>
                      <strong>Open Hours:</strong>
                      <br />
                      <time
                        style={addressStyle}
                        itemProp="hoursAvailable"
                        value="Mo-Fr 08:00-17:00"
                      >
                        Mon - Fri: 8am - 5pm
                        <br />
                        Sat - Sun: Closed
                      </time>
                    </p>
                  </div>
                </section>
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
