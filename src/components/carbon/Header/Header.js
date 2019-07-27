import React, { useContext } from 'react';
import { Link } from 'gatsby';
import {
  Header as ShellHeader,
  HeaderMenuButton,
  HeaderName,
  SkipToContent,
  HeaderGlobalBar,
  HeaderGlobalAction
} from 'carbon-components-react/lib/components/UIShell';
import { AppSwitcher20, Close20 } from '@carbon/icons-react';
import cx from 'classnames';

import { useScrollDirection } from '../../../common/hooks';

import NavContext from '../../../common/context/NavContext';

import { hidden, header, icon } from './Header.module.scss';

const Header = ({ children, shouldHideHeader }) => {
  const { leftNavIsOpen, toggleNavState, switcherIsOpen } = useContext(NavContext);
  const direction = useScrollDirection();

  const isHidden = shouldHideHeader && direction === 'down';

  return (
    <>
      <ShellHeader
        aria-label="Header"
        className={cx({
          [header]: true,
          [hidden]: isHidden
        })}
      >
        <SkipToContent />
        <HeaderMenuButton
          className="bx--header__action--menu"
          aria-label="Open menu"
          onClick={() => {
            toggleNavState('leftNavIsOpen');
            toggleNavState('switcherIsOpen', 'close');
          }}
          isActive={leftNavIsOpen}
        />
        <HeaderName prefix="" to="/" element={Link}>
          {children}
        </HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            className={cx({
              [icon]: true
            })}
            aria-label="Switch"
            onClick={() => {
              toggleNavState('switcherIsOpen');
              toggleNavState('leftNavIsOpen', 'close');
            }}
          >
            {switcherIsOpen ? <Close20 /> : <AppSwitcher20 />}
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </ShellHeader>
    </>
  );
};

const DefaultHeaderText = () => <>OCIUS</>;

Header.defaultProps = {
  children: <DefaultHeaderText />
};

export default Header;
