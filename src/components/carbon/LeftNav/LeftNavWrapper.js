import React from 'react';
import styled from 'styled-components';
import cx from 'classnames';

const NavWrapper = styled.div`
  transition: transform 0.15s cubic-bezier(0.2, 0.2, 0.38, 0.9), top 110ms;
  width: 256px;
  position: fixed;
  top: 0px;
  bottom: 0;
  z-index: 5999;
  scrollbar-width: none;
  transform: translateX(-256px);

  :global(.bx--side-nav) {
    box-shadow: none !important;
  }

  :global(.bx--side-nav__navigation) {
    padding-top: 0;
    padding-bottom: 48px;
  }

  @media (min-width: 100rem) {
    transform: translateX(0px);
  }

  &.expanded {
    transform: translateX(0px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

    @media (min-width: 100rem) {
      box-shadow: none;
    }
  }

  &.shouldHideHeader {
    top: -48px;
  }

  .bx--side-nav__overlay {
    position: absolute;
    top: 3rem;
    height: 0;
    width: 0;
    background-color: transparent;
    opacity: 0;
    transition: opacity 240ms cubic-bezier(0.2, 0, 0.38, 0.9),
      background-color 240ms cubic-bezier(0.2, 0, 0.38, 0.9);
  }
`;

const LeftNavWrapper = ({ expanded, ...rest }) => {
  const className = cx({
    expanded
  });
  return <NavWrapper className={className} {...rest} />;
};

export default LeftNavWrapper;
