import React from 'react';
import Navbar from './Navbar';
import SiteLogo from './SiteLogo';
import NavbarItems from './NavbarItems';
import NavbarItem from './NavbarItem';
import NavbarDropdown from './NavbarDropdown';
import DropdownMenu from './DropdownMenu';
import MobileNavigation from './MobileNavigation';

const navitems = [
  { link: '/live', title: 'LIVE' },
  { link: '/contact', title: 'Contact' },
  { link: '/careers', title: 'Careers' }
];

export default () => (
  <Navbar>
    <SiteLogo />
    <MobileNavigation />
    <NavbarItems>
      <NavbarDropdown name="About" link="/about">
        <DropdownMenu
          menuItems={[
            { href: '/about', name: 'People' },
            { href: '/about/partners', name: 'Partners' },
            { href: '/about/our-story', name: 'Our Story' },
            { href: '/about/awards', name: 'Awards' }
          ]}
        />
      </NavbarDropdown>
      <NavbarDropdown name="Solutions" link="/#solutions">
        <DropdownMenu
          menuItems={[
            { href: '/defence', name: 'Defence' },
            { href: '/oil-and-gas', name: 'Oil & Gas' },
            { href: '/science', name: 'Science' }
          ]}
        />
      </NavbarDropdown>
      <NavbarDropdown name="Drones" link="/usv">
        <DropdownMenu
          menuItems={[
            { href: '/usv', name: 'USV' },
            { href: '/usv#overview', name: 'BlueBottle' },
            { href: '/usv#technical', name: 'Tech Specs' }
          ]}
        />
      </NavbarDropdown>
      <NavbarDropdown name="News" link="/news">
        <DropdownMenu
          menuItems={[
            { href: '/news', name: 'Blog' },
            { href: '/news/media-coverage', name: 'Media Coverage' },
            { href: 'https://drive.google.com/drive/folders/1HGGwwxXzV-lKZyB3fbfwq2rs11JLbN7D', name: 'Press Kit', outbound: true }
          ]}
        />
      </NavbarDropdown>
      {navitems.map(item => {
        return (
          <NavbarItem
            key={navitems.indexOf(item)}
            link={item.link}
            title={item.title}
            blank={item.blank ? item.blank : undefined}
          />
        );
      })}
    </NavbarItems>
  </Navbar>
);
