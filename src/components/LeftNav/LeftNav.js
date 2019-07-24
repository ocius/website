import React, { useContext } from 'react';
import classnames from 'classnames';

import { SideNav } from 'carbon-components-react/lib/components/UIShell';

import NavContext from '../../common/context/NavContext';
import { useWindowSize } from '../../common/hooks';

const LeftNav = ({ children, homepage }) => {
  const { leftNavIsOpen, toggleNavState } = useContext(NavContext);
  const windowSize = useWindowSize();

  if (windowSize.innerWidth > 1056 && !leftNavIsOpen) {
    toggleNavState('leftNavIsOpen', 'open');
  }

  return (
    <SideNav
      expanded
      defaultExpanded
      aria-label="Side navigation"
      className={classnames({
        'bx--side-nav--website': true,
        'bx--side-nav--website--light': !homepage
      })}
    >
      {children}
    </SideNav>
  );
};

export default LeftNav;
