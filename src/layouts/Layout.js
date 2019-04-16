import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Icon from '../components/Icon';
import SocialLink from '../components/SocialLink';
import '../css/styles.css';

const FooterLink = styled(Link)`
  display: block;
  padding: 8px 0;
  font-size: 17px;
`;

export default ({ children }) => (
  <Fragment>
    <Navbar />
    {children}
    <Footer>
      <Container>
        <Row>
          <Col xs={12} md={2} lg={2}>
            <FooterLink to="/about">About</FooterLink>
            <ul className="menu-secondary">
              <li>
                <FooterLink to="/about">Mission</FooterLink>
              </li>
              <li>
                <FooterLink to="/about#people">People</FooterLink>
              </li>
              <li>
                <FooterLink to="/about#partners">Partners</FooterLink>
              </li>
              <li>
                <FooterLink to="/about#story">Our Story</FooterLink>
              </li>
              <li>
                <FooterLink to="/about#awards">Awards</FooterLink>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={2} lg={2}>
            <FooterLink to="/#solutions">Solutions</FooterLink>
            <ul className="menu-secondary">
              <li>
                <FooterLink to="/defence">Defence</FooterLink>
              </li>
              <li>
                <FooterLink to="/oil-and-gas">Oil & Gas</FooterLink>
              </li>
              <li>
                <FooterLink to="/science">Science</FooterLink>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={2} lg={2}>
            <FooterLink to="/usv">Drones</FooterLink>
            <ul className="menu-secondary">
              <li>
                <FooterLink to="/usv">USV</FooterLink>
              </li>
              <li>
                <FooterLink to="/usv#overview">BlueBottle</FooterLink>
              </li>
              <li>
                <FooterLink to="/usv#technical">Tech Specs</FooterLink>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={2} lg={2}>
            <FooterLink to="/find-bruce">Find Bruce</FooterLink>
            <FooterLink to="/news">News</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
            <FooterLink to="/careers">Careers</FooterLink>
          </Col>
          <Col xs={12} md={4} lg={3} lgOffset={1} style={{ textAlign: 'right' }}>
            <Icon.OciusGlobe
              fill="#ffffff"
              style={{
                height: '110px',
                marginBottom: '3px',
                width: 'auto'
              }}
            />
            <p>
              22 King St,
              <br />
              Building R13
              <br />
              UNSW Randwick Campus,
              <br />
              Randwick NSW 2031
              <br />
              Mail PO Box 4304 Castlecrag 2068 NSW Australia
            </p>
            <SocialLink network="facebook" href="https://www.facebook.com/ociustechnology" />
            <SocialLink network="twitter" href="https://twitter.com/OciusTechnology" />
          </Col>
        </Row>
      </Container>
    </Footer>
  </Fragment>
);
