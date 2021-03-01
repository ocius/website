import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SideNavLinkText from './SideNavLinkText';
import Link from '../Navbar/Link';
import detectActive from '../../common/detectActive';

const NavLink = styled(Link)`
  padding: 0 1.6rem 0 3.2rem;
`;

const SideNavMenuItem = ({ children, className, ...rest }) => (
  <li className={className}>
    <NavLink {...rest} getProps={detectActive}>
      <SideNavLinkText>{children}</SideNavLinkText>
    </NavLink>
  </li>
);

SideNavMenuItem.propTypes = {
  /**
   * Specify the childrento be rendered inside of the `SideNavMenuItem`
   */
  children: PropTypes.node,

  /**
   * Provide an optional class to be applied to the containing node
   */
  className: PropTypes.string,
};

SideNavMenuItem.defaultProps = {
  children: '',
  className: null,
};

export default SideNavMenuItem;
