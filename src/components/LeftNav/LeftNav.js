import React, { useContext } from 'react';
import classnames from 'classnames';

import { SideNav, SideNavItems } from 'carbon-components-react/lib/components/UIShell';

import NavContext from '../../common/context/NavContext';
import { useWindowSize } from '../../common/hooks';

const LeftNav = props => {
  const { children, leftNavIsOpen, toggleNavState } = useContext(NavContext);
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
        'bx--side-nav--website--light': !props.homepage
      })}
    >
      <SideNavItems>{children}</SideNavItems>
    </SideNav>
  );
};

export default LeftNav;
