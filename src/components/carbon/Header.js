import React, { useContext } from 'react';
import {
  Header as ShellHeader,
  HeaderMenuButton,
  SkipToContent,
  HeaderGlobalBar,
  HeaderGlobalAction
} from 'carbon-components-react/lib/components/UIShell';
import { AppSwitcher20, Close20 } from '@carbon/icons-react';
import styled from 'styled-components';

import NavContext from '../../common/context/NavContext';
import SiteLogo from '../Navbar/SiteLogo';

const Logo = styled(SiteLogo)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 3.2rem 0 1.6rem;
  padding-left: 1.5rem;
  user-select: none;
  border: 0.2rem solid transparent;
  transition: border-color 110ms;
  outline: none;
  white-space: nowrap;
`;

const StyledShellHeader = styled(ShellHeader)`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5rem;
  background-color: #efefef;
  z-index: 10000;
  transition: top 110ms;

  .bx--skip-to-content {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
    visibility: visible;
    white-space: nowrap;

    &:focus {
      display: flex;
      align-items: center;
      top: 0;
      left: 0;
      width: auto;
      height: 5rem;
      clip: auto;
      border: 4px solid #0062ff;
      z-index: 9999;
      background-color: #171717;
      color: #f3f3f3;
      outline: none;
      padding: 0 1.6rem;
    }
  }

  .bx--header__action {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: inherit;
    vertical-align: baseline;
    display: inline-block;
    background: none;
    appearance: none;
    border: 0;
    padding: 0;
    cursor: pointer;
    width: 100%;
    width: 5rem;
    height: 5rem;
    border: 0.2rem solid transparent;
    transition: background-color 110ms, border-color 110ms;

    &:focus {
      border-color: #ffffff;
      outline: none;
    }

    > *,
    > ::before,
    > ::after {
      box-sizing: inherit;
    }

    &::-moz-focus-inner {
      border: 0;
    }

    > svg {
      fill: #171717;
    }

    &--active {
      border-left: 1px solid #3d3d3d;
      border-right: 1px solid #3d3d3d;
      border-bottom: 1px solid #171717;
    }

    &--menu {
      border-width: 2px;
      display: block;

      @media (min-width: 100rem) {
        display: none;
      }
    }
  }

  .bx--header__menu-trigger {
    margin-right: -0.8rem;

    @media (min-width: 100rem) {
      display: none;
    }
  }

  .bx--header__global {
    display: flex;
    justify-content: flex-end;
    flex: 1 1;
    height: 100%;
  }

  button svg {
    margin-top: 0.4rem;
  }

  :global(.bx--header__name):focus {
    box-shadow: none;
  }
`;

const Header = ({ children }) => {
  const { leftNavIsOpen, toggleNavState, switcherIsOpen } = useContext(NavContext);

  return (
    <>
      <StyledShellHeader aria-label="Header">
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
        {children}
        <HeaderGlobalBar>
          <HeaderGlobalAction
            className="icon"
            aria-label="Switch"
            onClick={() => {
              toggleNavState('switcherIsOpen');
              toggleNavState('leftNavIsOpen', 'close');
            }}
          >
            {switcherIsOpen ? <Close20 /> : <AppSwitcher20 />}
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </StyledShellHeader>
    </>
  );
};

const DefaultHeaderText = () => <Logo maxHeight="20px" />;

Header.defaultProps = {
  children: <DefaultHeaderText />
};

export default Header;
