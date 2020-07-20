import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SkipToContent from 'carbon-components-react/lib/components/UIShell/SkipToContent';
import Header from 'carbon-components-react/lib/components/UIShell/Header';
import styled from 'styled-components';

import Button from '../Button';
import HeaderMenuButton from './HeaderMenuButton';
import NavContext from '../../common/context/NavContext';
import SiteLogo from '../Navbar/SiteLogo';

const Logo = styled(SiteLogo)`
  padding-left: 1.5rem;
`;

const ShellHeader = styled(Header)`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5rem;
  background-color: #efefef;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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

const RightControls = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1 1;
  padding-right: 0.8rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const WebsiteHeader = ({ onRightButtonClick }) => {
  const { leftNavIsOpen, toggleNavState } = useContext(NavContext);

  return (
    <ShellHeader aria-label="Header">
      <SkipToContent />
      <HeaderMenuButton
        aria-label="Open menu"
        onClick={() => {
          toggleNavState('leftNavIsOpen');
        }}
        isActive={leftNavIsOpen}
      />
      <Logo maxHeight="20px" />
      <RightControls>
        <Button
          type="outbound"
          href="https://usvna.ocius.com.au/usvna/oc_server?page=openlayers.htm"
          color="white"
          size="small"
          border
          onClick={onRightButtonClick}
        >
          Advanced View
        </Button>
      </RightControls>
    </ShellHeader>
  );
};

WebsiteHeader.propTypes = {
  onRightButtonClick: PropTypes.func,
};

WebsiteHeader.defaultProps = {
  onRightButtonClick: () => {},
};

export default WebsiteHeader;
