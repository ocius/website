import React, { useContext } from 'react';

import SideNav from '../../SideNav';

import SideNavWrapper from '../../SideNav/SideNavWrapper';
import NavContext from '../../../common/context/NavContext';
import { useWindowSize } from '../../../common/hooks';

const LeftNav = ({ children }) => {
  const { leftNavIsOpen, toggleNavState } = useContext(NavContext);
  const windowSize = useWindowSize();

  if (windowSize.innerWidth > 1056 && !leftNavIsOpen) {
    toggleNavState('leftNavIsOpen', 'open');
  }

  return (
    <SideNavWrapper expanded={leftNavIsOpen}>
      <SideNav
        expanded
        defaultExpanded
        aria-label="Side navigation"
        className="bx--side-nav--website"
      >
        {children}
      </SideNav>
    </SideNavWrapper>
  );
};

export default LeftNav;
