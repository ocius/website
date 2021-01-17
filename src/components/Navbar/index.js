import React, { useContext } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import SiteLogo from './SiteLogo';
import HeaderMenuButton from '../carbon/HeaderMenuButton';
import NavbarItems from './NavbarItems';
import NavbarItem from './NavbarItem';
import NavbarDropdown from './NavbarDropdown';
import DropdownMenu from './DropdownMenu';
import SocialIconButton from '../SocialIconButton';
import Button from '../Button';
import mq from '../../common/mq';
import { MenuContext } from '../../common/context/MainNavContext';

const NavbarContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 30px 0 0;

  @media (max-width: ${mq.max[768]}) {
    align-items: center;
    width: auto;
    margin: 0 5px 0px 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: nowrap;

  @media (max-width: ${mq.max[768]}) {
    display: none;
  }
`;

const navitems = [
  { link: '/contact', title: 'Contact' },
  { link: '/careers', title: 'Careers' },
];

export default () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const hamburgerClickHandler = () => {
    toggleMenuMode();
  };

  return (
    <Navbar>
      <SiteLogo />
      <NavbarContainer>
        <SocialLinks>
          <SocialIconButton network="facebook" href="https://www.facebook.com/ociustechnology" />
          <SocialIconButton network="instagram" href="https://www.instagram.com/ociustechnology/" />
          <SocialIconButton
            network="linkedIn"
            href="https://www.linkedin.com/company/ocius-technology-limited"
          />
        </SocialLinks>
        <NavbarItems>
          <NavbarDropdown name="About" link="/about">
            <DropdownMenu
              menuItems={[
                { href: '/about#tabs', name: 'People' },
                { href: '/about/partners#tabs', name: 'Partners' },
                { href: '/about/our-story#tabs', name: 'Our Story' },
                { href: '/about/awards#tabs', name: 'Awards' },
              ]}
            />
          </NavbarDropdown>
          <NavbarDropdown name="Solutions" link="/#solutions">
            <DropdownMenu
              menuItems={[
                { href: '/defence', name: 'Defence' },
                { href: '/oil-and-gas', name: 'Oil & Gas' },
                { href: '/science', name: 'Science' },
              ]}
            />
          </NavbarDropdown>
          <NavbarDropdown name="Drones" link="/usv">
            <DropdownMenu
              menuItems={[
                { href: '/usv', name: 'USV' },
                { href: '/usv#overview', name: 'BlueBottle' },
                { href: '/usv#technical', name: 'Tech Specs' },
              ]}
            />
          </NavbarDropdown>
          <NavbarDropdown name="News" link="/news">
            <DropdownMenu
              menuItems={[
                { href: '/news', name: 'Blog' },
                { href: '/media-coverage', name: 'Media Coverage' },
                {
                  href:
                    'https://drive.google.com/drive/folders/1beCdCnYaKyE4455mAd4kJKjPJWBAgSfb?usp=sharing',
                  name: 'Press Kit',
                  outbound: true,
                },
              ]}
            />
          </NavbarDropdown>
          {navitems.map((item) => (
            <NavbarItem
              key={navitems.indexOf(item)}
              link={item.link}
              title={item.title}
              blank={item.blank ? item.blank : undefined}
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
        />
      </NavbarContainer>
    </Navbar>
  );
};
