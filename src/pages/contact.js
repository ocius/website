import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Container from '../components/Container';
import RecentNews from '../components/RecentNews';

const addressStyle = {
  padding: '1em 0',
  fontStyle: 'normal'
};

export default () => (
  <Layout>
    <SEO
      title="Contact"
      description="For General Enquiries Main Phone: +61 2 9924 6400 Email: admin@ocius.com.au For Investment Enquiries
      Email: cosecretary@ocius.com.au Address: Ainsworth Building University of New South Wales Willis Annex Kensington
      NSW 2052 Phone: +61 2 9924 6400 Postal Address: Office Box 4304 Castlecrag Australia 2068"
    />
    <PageHeader>Contact</PageHeader>
    <section className="page-content">
      <Container>
        <Row>
          <Col className="primary-content" xs={8} md={7} lg={7}>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <strong>For General Enquiries</strong>
                <address style={addressStyle}>
                  Main Phone: <a href="callto:+61299246400">+61 2 9924 6400</a>
                  <br />
                  Email: <a href="mailto:admin@ocius.com.au">admin@ocius.com.au</a>
                </address>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <strong>For Investment Enquiries</strong>
                <address style={addressStyle}>
                  Email: <a href="mailto:cosecretary@ocius.com.au">cosecretary@ocius.com.au</a>
                </address>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <strong>Address:</strong>
                <address style={addressStyle}>
                  Ainsworth Building
                  <br />
                  University of New South Wales
                  <br />
                  Willis Annex
                  <br />
                  Kensington NSW 2052
                  <br />
                  Phone: <a href="callto:+61299246400">+61 2 9924 6400</a>
                </address>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <strong>Postal Address:</strong>
                <address style={addressStyle}>
                  Office Box 4304
                  <br />
                  Castlecrag
                  <br />
                  Australia 2068
                </address>
              </Col>
            </Row>
          </Col>
          <Col className="secondary-content" xs={4} md={5} lg={4} lgOffset={1}>
            <RecentNews />
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
);
