import React from 'react';
import { StyleRoot } from 'radium';
import { Link } from 'gatsby';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Row from '../components/GridRow';
import Column from '../components/GridColumn';
import '../css/styles.css';

export default ({ children }) => (
  <StyleRoot>
    <Menu />
    {children}
    <Footer>
      <Container>
        <Row>
          <Column sm={12} md={3} lg={3} fluid>
            <Link to="/about">About</Link>
            <ul>
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
            <ul>
              <li>
                <Link to="/defence">Defence</Link>
              </li>
              <li>
                <Link to="/oilAndGas">Oil & Gas</Link>
              </li>
              <li>
                <Link to="/science">Science</Link>
              </li>
            </ul>
            <Link to="/solutions">Solutions</Link>
          </Column>
          <Column sm={12} md={3} lg={3} fluid>
            <Link to="/bluebottle">BlueBottle USV</Link>
            <ul>
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
            <Link to="/findBruce">Find Bruce</Link>
            <Link to="/news">Media</Link>
            <ul>
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
