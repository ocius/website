import React from 'react';
import { StyleRoot } from 'radium';
import { Link } from 'gatsby';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Row from '../components/GridRow';
import Column from '../components/GridColumn';
import Icon from '../components/Icon';
import '../css/styles.css';

export default ({ children }) => (
  <StyleRoot>
    <Navbar />
    {children}
    <Footer>
      <Container>
        <Row>
          <Column sm={12} md={3} lg={3} fluid>
            <Link to="/about">About</Link>
            <ul className="menu-secondary">
              <li>
                <Link to="/about">Mission</Link>
              </li>
              <li>
                <Link to="/about">People</Link>
              </li>
              <li>
                <Link to="/about">Partners</Link>
              </li>
              <li>
                <Link to="/about">Awards</Link>
              </li>
            </ul>
          </Column>
          <Column sm={12} md={3} lg={3} fluid>
            <Link to="/solutions">Solutions</Link>
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
          </Column>
          <Column sm={12} md={3} lg={3} fluid>
            <Link to="/bluebottle">BlueBottle USV</Link>
            <ul className="menu-secondary">
              <li>
                <Link to="/bluebottle">What Is A USV?</Link>
              </li>
              <li>
                <Link to="/bluebottle">BlueBottle Overview</Link>
              </li>
              <li>
                <Link to="/bluebottle">Technical Specifications</Link>
              </li>
            </ul>
            <Link to="/careers">Careers</Link>
          </Column>
          <Column sm={12} md={3} lg={3} fluid style={{ textAlign: 'right' }}>
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
          </Column>
        </Row>
      </Container>
    </Footer>
  </StyleRoot>
);
