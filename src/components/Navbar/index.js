import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import SiteLogo from './SiteLogo';
import NavbarItems from './NavbarItems';
import NavbarItem from './NavbarItem';
import NavbarDropdown from './NavbarDropdown';
import DropdownMenu from './DropdownMenu';
import MobileNavigation from './MobileNavigation';
import SocialIconButton from '../SocialIconButton';
import Button from '../Button';

const NavbarContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 30px 0 0;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const navitems = [
  { link: '/contact', title: 'Contact' },
  { link: '/careers', title: 'Careers' },
];

export default () => (
  <Navbar>
    <SiteLogo />
    <MobileNavigation />
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
              { href: '/about', name: 'People' },
              { href: '/about/partners', name: 'Partners' },
              { href: '/about/our-story', name: 'Our Story' },
              { href: '/about/awards', name: 'Awards' },
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
    </NavbarContainer>
  </Navbar>
);
