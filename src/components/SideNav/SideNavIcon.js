import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NavIcon = styled.div`
  display: flex;
  flex: 1 1;
  align-items: center;
  justify-content: flex-end;

  > svg {
    width: 1rem;
    height: 1rem;
    fill: ${(props) => props.theme.colors.neutralPrimary};
    transition: transform 0.11s;

    [aria-expanded='true'] & {
      transform: rotate(180deg);
    }
  }
`;

const SideNavIcon = ({ children, className }) => (
  <NavIcon className={className}>{children}</NavIcon>
);

SideNavIcon.propTypes = {
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

SideNavIcon.defaultProps = {
  className: null,
};

export default SideNavIcon;
