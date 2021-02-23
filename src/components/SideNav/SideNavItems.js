import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavItems = styled.ul`
  flex: 1 1;
  padding: 0;
  overflow: hidden;
  overflow-y: auto;
  margin: 0;
`;

const SideNavItems = ({ className, children }) => (
  <NavItems className={className}>{children}</NavItems>
);

SideNavItems.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * Provide a single icon as the child to `SideNavIcon` to render in the
   * container
   */
  children: PropTypes.node.isRequired,
};

SideNavItems.defaultProps = {
  className: '',
};

export default SideNavItems;
