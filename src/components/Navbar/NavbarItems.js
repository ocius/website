import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mq from '../../common/mq';

const NavItems = styled.ul`
  margin: 0 0 0 auto;
  padding: 0;
  text-align: right;
  list-style: outside none none;

  @media (max-width: ${mq.max[768]}) {
    display: none;
  }
`;

const NavbarItems = ({ children }) => {
  return <NavItems className="navitems">{children}</NavItems>;
};

NavbarItems.propTypes = {
  children: PropTypes.node.isRequired
};

export default NavbarItems;
