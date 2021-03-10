import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid/src';
import Heading from './Heading';

const ContactUs = () => (
  <Grid>
    <Heading level={3} color="#36BBE7" size="large" weight="thick" underline="left">
      Contact Us
    </Heading>
    <Row>
      <Col xs={12} md={3} lg={3}>
        <p>
          <strong>Ocius Headquarters</strong>
          <br />
          Building R13
          <br />
          UNSW Randwick Campus
          <br />
          22 King St, Randwick NSW 2031
        </p>
      </Col>
      <Col xs={12} md={3} lg={3}>
        <p>
          <strong>Postal Address</strong>
          <br />
          Mail PO Box 4304 Castlecrag
          <br />
          NSW 2068
        </p>
      </Col>
      <Col xs={12} md={3} lg={3}>
        <p>
          <strong>General Enquiries:</strong>
          <br />
          +61 2 9924 6400
          <br />
          contact@ocius.com.au
        </p>
      </Col>
      <Col xs={12} md={3} lg={3}>
        <p>
          <strong>Open Hours:</strong>
          <br />
          Mon - Fri: 9am - 5pm
          <br />
          Sat - Sun: Closed
        </p>
      </Col>
    </Row>
  </Grid>
);

ContactUs.propTypes = {};
ContactUs.defaultProps = {};

export default ContactUs;
