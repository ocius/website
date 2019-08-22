import React, { useContext } from 'react';
import styled from 'styled-components';

import { SideNav as SideNavUnstyled } from 'carbon-components-react/lib/components/UIShell';

import LeftNavWrapper from './LeftNavWrapper';
import NavContext from '../../../common/context/NavContext';
import { useWindowSize } from '../../../common/hooks';

const SideNav = styled(SideNavUnstyled)`
  position: fixed;
  top: 5rem;
  bottom: 0;
  left: 0;
  width: 25.6rem;
  max-width: 25.6rem;
  color: #565656;
  background-color: #ffffff;
  will-change: width;
  transition: width 0.11s cubic-bezier(0.2, 0, 1, 0.9);
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 6000;

  @media (max-width: 100rem) {
    width: 0;
  }

  &:not(.bx--side-nav--fixed):hover,
  &.bx--side-nav--expanded {
    width: 25.6rem;
  }

  &.bx--side-nav__navigation {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 1.6rem;
  }

  &.bx--side-nav--website {
    &:not(.side-nav__closed) {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    &--light {
      background-color: #ffffff;
      border-right: none;
    }
  }
`;

const LeftNav = ({ children }) => {
  const { leftNavIsOpen, toggleNavState } = useContext(NavContext);
  const windowSize = useWindowSize();

  if (windowSize.innerWidth > 1056 && !leftNavIsOpen) {
    toggleNavState('leftNavIsOpen', 'open');
  }

  return (
    <LeftNavWrapper expanded={leftNavIsOpen}>
      <SideNav
        expanded
        defaultExpanded
        aria-label="Side navigation"
        className="bx--side-nav--website bx--side-nav--website--light"
      >
        {children}
      </SideNav>
    </LeftNavWrapper>
  );
};

export default LeftNav;
