import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Heading from '../components/Heading';

const PageHeader = styled(Heading)`
  padding-bottom: 2rem;
`;

const Spacing = styled.div`
  height: ${(props) => props.$value || '50px'};
`;

const addressStyle = {
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
    <Container>
      <Row>
        <Col xs={12}>
          <PageHeader level={1} size="huge" header underline>
            Contact Us
          </PageHeader>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={6}>
          <strong>General Enquiries</strong>
          <address style={addressStyle}>
            Main Phone: <a href="callto:+61299246400">+61 2 9924 6400</a>
            <br />
            Email: <a href="mailto:contact@ocius.com.au">contact@ocius.com.au</a>
          </address>
          <strong>Shareholder Enquiries</strong>
          <address style={addressStyle}>
            Email: <a href="mailto:cosecretary@ocius.com.au">cosecretary@ocius.com.au</a>
          </address>
        </Col>
        <Col xs={12} md={6} lg={6}>
          <strong>Ocius Headquaders</strong>
          <address style={addressStyle}>
            Building R13
            <br />
            UNSW Randwick Campus
            <br />
            22 King St, Randwick NSW 2031
            <br />
            Phone: <a href="callto:+61299246400">+61 2 9924 6400</a>
          </address>
          <strong>Postal Address:</strong>
          <address style={addressStyle}>Office Box 4304 Castlecrag 2068 Australia</address>
        </Col>
      </Row>
      <Row>
        <Spacing />
      </Row>
    </Container>
  </Layout>
);
