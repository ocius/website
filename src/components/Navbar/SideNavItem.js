import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavItem = styled.li`
  width: auto;
  height: auto;
  overflow: hidden;
`;

const SideNavItem = ({ className, children }) => (
  <NavItem className={className}>{children}</NavItem>
);

SideNavItem.propTypes = {
  /**
   * Provide a single icon as the child to `SideNavIcon` to render in the
   * container
   */
  children: PropTypes.node.isRequired,

  /**
   * Provide an optional class to be applied to the containing node
   */
  className: PropTypes.string,
};

SideNavItem.defaultProps = {
  className: null,
};

export default SideNavItem;
