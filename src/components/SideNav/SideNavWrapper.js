import React from 'react';
import styled, { css } from 'styled-components';

const NavWrapper = styled.div`
  transition: transform 0.15s cubic-bezier(0.2, 0.2, 0.38, 0.9), top 110ms;
  width: 256px;
  position: fixed;
  top: 0px;
  bottom: 0;
  z-index: 5999;
  scrollbar-width: none;
  transform: translateX(-256px);

  @media (min-width: 100rem) {
    transform: translateX(0px);
  }

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

const LeftNavWrapper = ({ expanded, children }) => (
  <NavWrapper $expanded={expanded}>{children}</NavWrapper>
);

export default LeftNavWrapper;
