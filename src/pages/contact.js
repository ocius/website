import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Container from '../components/Container';
import Sidebar from '../components/Sidebar';

const addressStyle = {
  padding: '1em 0',
  fontStyle: 'normal'
};

export default () => (
  <Layout>
    <SEO
      title="Contact"
      description="For General Enquiries Main Phone: +61 2 9924 6400 Email: contact@ocius.com.au For Shareholder Enquiries
      Email: cosecretary@ocius.com.au
      NSW 2052 Phone: +61 2 9924 6400 Postal Address: Office Box 4304 Castlecrag Australia 2068"
    />
    <PageHeader>Contact</PageHeader>
    <section className="page-content">
      <Container>
        <Row>
          <Col className="primary-content" xs={12} md={7} lg={7}>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <strong>For General Enquiries</strong>
                <address style={addressStyle}>
                  Main Phone: <a href="callto:+61299246400">+61 2 9924 6400</a>
                  <br />
                  Email: <a href="mailto:contact@ocius.com.au">contact@ocius.com.au</a>
                </address>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <strong>For Shareholder Enquiries</strong>
                <address style={addressStyle}>
                  Email: <a href="mailto:cosecretary@ocius.com.au">cosecretary@ocius.com.au</a>
                </address>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <strong>Address:</strong>
                <address style={addressStyle}>
                  22 King St
                  <br />
                  Building R13
                  <br />
                  UNSW Randwick Campus
                  <br />
                  Randwick NSW 2031
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
          <Col className="secondary-content" xs={12} md={5} lg={4} lgOffset={1}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
);
