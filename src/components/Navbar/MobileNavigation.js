import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import font from '../../common/font';
import mq from '../../common/mq';
import iconFromString from '../../common/iconFromString';

const Wrapper = styled.div`
  font-family: ${font('grotesk')};
  position: fixed;
  display: flex;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  border-top: 1px solid #f6edfa;
  background: #ffffff;
  height: 60px;
  padding-bottom: 0;

  @media (min-width: ${mq.min[768]}) {
    display: none;
  }
`;

const Link = styled(GatsbyLink)`
  border-radius: 2px;
  font-size: 1rem;
  flex-shrink: 0;
  line-height: 1;
  width: 64px;
  padding: 0.5rem;
  text-decoration: none;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  color: #adadad;

  :hover,
  &[data-active] {
    text-decoration: none;
    font-weight: bold;
    color: #60d2f6;
  }
`;

const getProps = ({ isPartiallyCurrent }) => {
  return {
    ...(isPartiallyCurrent
      ? {
          'data-active': true
        }
      : {})
  };
};

const MobileNavItem = ({ linkTo, label, icon }) => (
  <Link getProps={getProps} to={linkTo}>
    {iconFromString(icon, { width: '32px' })}
    <div>{label}</div>
  </Link>
);

const MobileNavigation = () => (
  <>
    <Wrapper>
      <MobileNavItem linkTo="/" label="Home" icon="Home" />
      <MobileNavItem linkTo="/about/" label="About" icon="Idea" />
      <MobileNavItem linkTo="/usv/" label="Drones" icon="Drone" />
      <MobileNavItem linkTo="/news/" label="News" icon="News" />
      <MobileNavItem linkTo="/contact/" label="Contact" icon="Contact" />
    </Wrapper>
  </>
);

export default MobileNavigation;
