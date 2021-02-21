import React, { useContext } from 'react';
import styled from 'styled-components';

import HeaderMenuButton from './HeaderMenuButton';
import NavContext from '../../common/context/NavContext';
import SiteLogo from './SiteLogo';

const Logo = styled(SiteLogo)`
  margin: auto;
  transform: translateX(-2.5rem);
`;

const Header = styled.header`
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

  button svg {
    margin-top: 0.4rem;
  }
`;

const WebsiteHeader = () => {
  const { leftNavIsOpen, toggleNavState } = useContext(NavContext);

  return (
    <Header aria-label="Header">
      <HeaderMenuButton
        aria-label="Open menu"
        onClick={() => {
          toggleNavState('leftNavIsOpen');
        }}
        isActive={leftNavIsOpen}
      />
      <Logo maxHeight="20px" />
    </Header>
  );
};

export default WebsiteHeader;
