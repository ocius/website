import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import SiteLogo from './SiteLogo';
import SideNav from '../SideNav';
import SideNavWrapper from '../SideNav/SideNavWrapper';
import HeaderMenuButton from './HeaderMenuButton';
import NavbarItems from './NavbarItems';
import NavbarItem from './NavbarItem';
import LeftNavItem from './LeftNavItem';
import SocialIconButton from '../SocialIconButton';
import Button from '../Button';
import mq from '../../common/mq';
import useWindowSize from '../../common/hooks/useWindowSize';
import useNavItems from '../../common/hooks/useNavItems';
import useOnClickOutside from '../../common/hooks/useOnClickOutside';
import { MenuContext } from '../../common/context/MainNavContext';

const NavbarContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 30px 0 0;

  @media (min-width: ${mq.min[768]}) and (max-width: ${mq.max[1200]}) {
    margin: 15px 0 0;
  }

  @media (max-width: ${mq.max[768]}) {
    align-items: center;
    width: auto;
    margin: 0 5px 0px 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: nowrap;

  @media (max-width: ${mq.max[1024]}) {
    display: none;
  }
`;

export default () => {
  // Load navbar items from YAML file
  const navItems = useNavItems();
  // Save ref of navbar + sidenav for future reference
  const node = useRef();
  const windowSize = useWindowSize();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const hamburgerClickHandler = () => {
    toggleMenuMode();
  };

  // Hide main nav when user clicks outside of container
  useOnClickOutside(node, () => {
    // Only if menu if open
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });

  // Keep mobile navigation closed on big screens
  useEffect(() => {
    if (windowSize.innerWidth > 768 && isMenuOpen) {
      toggleMenuMode();
    }
  }, [windowSize, isMenuOpen]);

  return (
    <div ref={node}>
      <Navbar>
        <SiteLogo />
        <NavbarContainer>
          <SocialLinks>
            <SocialIconButton network="facebook" href="https://www.facebook.com/ociustechnology" />
            <SocialIconButton
              network="instagram"
              href="https://www.instagram.com/ociustechnology/"
            />
            <SocialIconButton
              network="linkedIn"
              href="https://www.linkedin.com/company/ocius-technology-limited"
            />
          </SocialLinks>
          <NavbarItems>
            {navItems.map((item) => (
              <NavbarItem
                key={navItems.indexOf(item)}
                path={item.path}
                title={item.title}
                menuItems={item.pages}
              />
            ))}
          </NavbarItems>
          <Button href="/live" size="tiny" color="blue">
            Watch Live
          </Button>

          <HeaderMenuButton
            aria-label="Open main menu"
            onClick={hamburgerClickHandler}
            isActive={isMenuOpen}
            iconName="Menu"
          />
        </NavbarContainer>
      </Navbar>
      <SideNavWrapper expanded={isMenuOpen} direction="right">
        <SideNav expanded defaultExpanded aria-label="Side navigation">
          {navItems.map((item) => (
            <LeftNavItem
              menuItems={item.pages}
              title={item.title}
              path={item.path}
              key={navItems.indexOf(item)}
            />
          ))}
        </SideNav>
      </SideNavWrapper>
    </div>
  );
};
