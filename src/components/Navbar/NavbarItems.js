import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mq from '../../common/mq';

const NavItems = styled.ul`
  margin: 0;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  list-style: outside none none;

  @media (min-width: ${mq.min[768]}) and (max-width: ${mq.max[1200]}) {
    padding: 0 2%;
  }

  @media (max-width: ${mq.max[768]}) {
    display: none;
  }
`;

const NavbarItems = ({ children }) => <NavItems className="navitems">{children}</NavItems>;

NavbarItems.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavbarItems;
