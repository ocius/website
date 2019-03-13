import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { Row, Col } from 'react-flexbox-grid';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Icon from '../components/Icon';
import '../css/styles.css';

export default ({ children }) => (
  <Fragment>
    <Navbar />
    {children}
    <Footer>
      <Container>
        <Row>
          <Col xs={12} md={3} lg={3}>
            <Link to="/about">About</Link>
            <ul className="menu-secondary">
              <li>
                <Link to="/about">Mission</Link>
              </li>
              <li>
                <Link to="/about#people">People</Link>
              </li>
              <li>
                <Link to="/about#partners">Partners</Link>
              </li>
              <li>
                <Link to="/about#awards">Awards</Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={3} lg={3}>
            <Link to="/#solutions">Solutions</Link>
            <ul className="menu-secondary">
              <li>
                <Link to="/defence">Defence</Link>
              </li>
              <li>
                <Link to="/oil-and-gas">Oil & Gas</Link>
              </li>
              <li>
                <Link to="/science">Science</Link>
              </li>
            </ul>
            <Link to="/contact">Contact</Link>
          </Col>
          <Col xs={12} md={3} lg={3}>
            <Link to="/bluebottle">BlueBottle USV</Link>
            <ul className="menu-secondary">
              <li>
                <Link to="/bluebottle">What Is A USV?</Link>
              </li>
              <li>
                <Link to="/bluebottle">BlueBottle Overview</Link>
              </li>
              <li>
                <Link to="/bluebottle-usv-brochure">Technical Specifications</Link>
              </li>
            </ul>
            <Link to="/careers">Careers</Link>
          </Col>
          <Col xs={12} md={3} lg={3} style={{ textAlign: 'right' }}>
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
          </Col>
        </Row>
      </Container>
    </Footer>
  </Fragment>
);
