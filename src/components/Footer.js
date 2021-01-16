import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Col, Row } from 'react-flexbox-grid';
import { Link } from 'gatsby';
import mq from '../common/mq';
import Icon from './Icon';
import SocialLink from './SocialLink';
import Container from './Container';
import MaskOverlay from './MaskOverlay';

const StyledFooter = styled.footer`
  position: relative;
  background-color: #1f3643;
  width: 100%;
  clear: both;
  padding: 10em 0 4.5em;

  @media (max-width: ${mq.max[768]}) {
    padding: 2em 0;

    // Three columns in footer, separated by delimiter
    .separated-section {
      padding-bottom: 0.8em;

      & + .separated-section {
        border-left: 1px solid rgba(255, 255, 255, 0.3);
      }
    }

    // Full-size section in footer
    .full-section {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      border-top: 1px solid rgba(255, 255, 255, 0.3);
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);

      a {
        margin-right: 15px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .footer-info {
    text-align: right;

    @media (max-width: ${mq.max[768]}) {
      padding: 1.6em 1em 2em;
      display: flex;
      flex-direction: row-reverse;

      .info {
        text-align: left;
        p {
          margin-top: 0;
        }
      }
    }
  }
`;

const LinkStyles = css`
  display: block;
  padding: 8px 0;
  font-size: 17px;
`;

const FooterLink = styled(Link)`
  ${LinkStyles}
`;

const Footer = ({ children, footerStyle }) => (
  <StyledFooter className="footer" style={footerStyle}>
    <MaskOverlay position="top" />
    {children}
  </StyledFooter>
);

Footer.propTypes = {
  footerStyle: PropTypes.objectOf(PropTypes.object),
  children: PropTypes.node,
};

Footer.defaultProps = {
  footerStyle: {},
  children: (
    <Container>
      <Row>
        <Col className="separated-section" xs={4} md={2} lg={2}>
          <FooterLink to="/about">About</FooterLink>
          <ul className="menu-secondary">
            <li>
              <FooterLink to="/about">People</FooterLink>
            </li>
            <li>
              <FooterLink to="/about/partners">Partners</FooterLink>
            </li>
            <li>
              <FooterLink to="/about/our-story">Our Story</FooterLink>
            </li>
            <li>
              <FooterLink to="/about/awards">Awards</FooterLink>
            </li>
          </ul>
        </Col>
        <Col className="separated-section" xs={4} md={2} lg={2}>
          <FooterLink to="/#solutions">Solutions</FooterLink>
          <ul className="menu-secondary">
            <li>
              <FooterLink to="/defence">Defence</FooterLink>
            </li>
            <li>
              <FooterLink to="/oil-and-gas">Oil &amp; Gas</FooterLink>
            </li>
            <li>
              <FooterLink to="/science">Science</FooterLink>
            </li>
          </ul>
        </Col>
        <Col className="separated-section" xs={4} md={2} lg={2}>
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
        <Col className="full-section" xs={12} md={2} lg={2}>
          <FooterLink to="/news">News</FooterLink>
          <FooterLink to="/media-coverage">Media Coverage</FooterLink>
          <FooterLink to="/live">Live</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
          <FooterLink to="/careers">Careers</FooterLink>
        </Col>
        <Col className="footer-info" xs={12} md={4} lg={3} lgOffset={1}>
          <Icon.OciusGlobe
            fill="#ffffff"
            style={{
              height: '110px',
              marginBottom: '3px',
              width: 'auto',
            }}
          />
          <div className="info">
            <p>
              22 King St
              <br />
              Building R13
              <br />
              UNSW Randwick Campus
              <br />
              Randwick NSW 2031
              <br />
              Mail PO Box 4304 Castlecrag 2068 NSW Australia
            </p>
            <SocialLink network="facebook" href="https://www.facebook.com/ociustechnology" />
            <SocialLink network="twitter" href="https://twitter.com/OciusTechnology" />
          </div>
        </Col>
      </Row>
    </Container>
  ),
};

export default Footer;
