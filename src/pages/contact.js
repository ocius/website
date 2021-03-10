import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid/src';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import Segmented from '../components/Segmented';
import Heading from '../components/Heading';
import NewsletterForm from '../components/NewsletterForm';
import ContactUs from '../components/ContactUs';
import ContactForm from '../components/Forms/ContactForm';
import ContactMap from '../components/Map/ContactMap';
import { Spacing } from '../components/common';

const addressStyle = {
  display: 'block',
  padding: '0.5em 0',
  fontStyle: 'normal',
};

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact"
      description="How can we help? Do you have a question or are you interested in working with us? Just fill out the form fields below."
    />
    <section className="page-content">
      <Grid>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Spacing $value="80px" />
            <Heading level={1} size="huge" weight="thick" underline="left">
              Contact us
            </Heading>
          </Col>
        </Row>

        <Segmented>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <section itemScope itemType="https://schema.org/ResearchProject">
                <p>
                  <strong>
                    <span itemProp="name">Ocius</span> Headquarters:
                  </strong>
                  <span itemScope itemProp="location" itemType="https://schema.org/Place">
                    <span
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
                    </span>
                  </span>
                </p>

                <p>
                  <strong>Postal Address:</strong>
                  <span
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
                  </span>
                </p>

                <div itemScope itemProp="contactPoint" itemType="https://schema.org/ContactPoint">
                  <p>
                    <strong itemProp="contactType">General Enquiries</strong>
                    <span style={addressStyle}>
                      Phone:{' '}
                      <a itemProp="telephone" href="callto:+61299246400">
                        +61 2 9924 6400
                      </a>
                      <br />
                      Email:{' '}
                      <a itemProp="email" href="mailto:contact@ocius.com.au">
                        contact@ocius.com.au
                      </a>
                    </span>
                  </p>
                </div>

                <div itemScope itemProp="contactPoint" itemType="https://schema.org/ContactPoint">
                  <p>
                    <strong itemProp="contactType">Shareholder Enquiries</strong>
                    <span style={addressStyle}>
                      Email:{' '}
                      <a itemProp="email" href="mailto:cosecretary@ocius.com.au">
                        cosecretary@ocius.com.au
                      </a>
                    </span>
                  </p>
                </div>

                <div itemScope itemProp="contactPoint" itemType="https://schema.org/ContactPoint">
                  <p>
                    <strong>Open Hours:</strong>
                    <br />
                    <time style={addressStyle} itemProp="hoursAvailable" value="Mo-Fr 08:00-17:00">
                      Mon - Fri: 8am - 5pm
                      <br />
                      Sat - Sun: Closed
                    </time>
                  </p>
                </div>
              </section>
            </Col>
            <Col xs={12} md={6} lg={5}>
              <Heading level={4} size="small" style={{ marginBottom: '1em' }}>
                Send us a message:
              </Heading>
              <ContactForm />
            </Col>
          </Row>
        </Segmented>
        <Segmented>
          <Row>
            <Col xs={12} md={12} lg={11}>
              <ContactMap />
            </Col>
          </Row>
        </Segmented>
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

export default ContactPage;
