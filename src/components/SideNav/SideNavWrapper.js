import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const NavWrapper = styled.div`
  transition: transform 0.15s cubic-bezier(0.2, 0.2, 0.38, 0.9), top 110ms;
  width: 256px;
  position: fixed;
  top: 0px;
  bottom: 0;
  z-index: 5999;
  scrollbar-width: none;
  transform: ${(props) =>
    props.$direction === 'right' ? 'translateX(256px)' : 'translateX(-256px)'};

  ${(props) =>
    props.$direction === 'right' &&
    css`
      right: 0;
    `}

  ${(props) =>
    props.$expanded &&
    css`
      transform: translateX(0px);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

      @media (min-width: 100rem) {
        box-shadow: none;
      }
    `}
`;

const SideNavWrapper = ({ expanded, direction, children }) => (
  <NavWrapper $expanded={expanded} $direction={direction}>
    {children}
  </NavWrapper>
);

SideNavWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  expanded: PropTypes.bool,
  direction: PropTypes.oneOf(['left', 'right']),
};

SideNavWrapper.defaultProps = {
  expanded: false,
  direction: 'left',
};

export default SideNavWrapper;
