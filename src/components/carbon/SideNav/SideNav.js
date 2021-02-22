import React, { useContext } from 'react';
import styled from 'styled-components';

import SideNav from '../../SideNav';

import SideNavWrapper from './SideNavWrapper';
import NavContext from '../../../common/context/NavContext';
import { useWindowSize } from '../../../common/hooks';

const SideNavStyled = styled(SideNav)`
  &.bx--side-nav--website {
    &:not(.side-nav__closed) {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
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
    <SideNavWrapper expanded={leftNavIsOpen}>
      <SideNavStyled
        expanded
        defaultExpanded
        aria-label="Side navigation"
        className="bx--side-nav--website"
      >
        {children}
      </SideNavStyled>
    </SideNavWrapper>
  );
};

export default LeftNav;
