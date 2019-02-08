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
          </Column>
          <Column sm={12} md={3} lg={3} fluid>
            <Link to="/solutions">Solutions</Link>
          </Column>
          <Column sm={12} md={3} lg={3} fluid>
            <Link to="/bluebottle">BlueBottle USV</Link>
          </Column>
          <Column sm={12} md={3} lg={3} fluid>
            <Link to="/findBruce">Find Bruce</Link>
          </Column>
        </Row>
      </Container>
    </Footer>
  </StyleRoot>
);
