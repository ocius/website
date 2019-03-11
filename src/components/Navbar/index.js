import React from 'react';
import Navbar from './Navbar';
import SiteLogo from './SiteLogo';
import HamburgerButton from './HamburgerButton';
import NavbarItems from './NavbarItems';
import NavbarItem from './NavbarItem';
import NavbarDropdown from './NavbarDropdown';
import DropdownMenu from './DropdownMenu';

const navitems = [
  { link: '/bluebottle', title: 'BlueBottle USV' },
  { link: '/find-bruce', title: 'Find Bruce' },
  { link: '/news', title: 'News' },
  { link: '/contact', title: 'Contact' },
  { link: '/careers', title: 'Careers' }
];

export default () => (
  <Navbar>
    <SiteLogo />
    <HamburgerButton />
    <NavbarItems>
      <NavbarDropdown name="About" link="/about">
        <DropdownMenu
          menuItems={[
            { href: '/about', name: 'Mission' },
            { href: '/about#people', name: 'People' },
            { href: '/about#partners', name: 'Partners' },
            { href: '/about#awards', name: 'Awards' }
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
      {navitems.map(item => {
        return <NavbarItem key={navitems.indexOf(item)} link={item.link} title={item.title} />;
      })}
    </NavbarItems>
  </Navbar>
);
