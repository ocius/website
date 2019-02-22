import React from 'react';
import { StyleRoot } from 'radium';
import { Link } from 'gatsby';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Row from '../components/GridRow';
import Column from '../components/GridColumn';
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
            <Link to="/solutions">Solutions</Link>
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
          <Column sm={12} md={3} lg={3} fluid>
            <Link to="/find-bruce">Find Bruce</Link>
            <Link to="/news">Media</Link>
            <ul className="menu-secondary">
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/news">Photos</Link>
              </li>
              <li>
                <Link to="/news">Technical Specifications</Link>
              </li>
            </ul>
          </Column>
        </Row>
      </Container>
    </Footer>
  </StyleRoot>
);
