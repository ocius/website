import React from 'react';
import Navbar from './Navbar';
import SiteLogo from './SiteLogo';
import HamburgerButton from './HamburgerButton';
import NavbarItems from './NavbarItems';
import NavbarItem from './NavbarItem';
import NavbarDropdown from './NavbarDropdown';
import DropdownMenu from './DropdownMenu';

const navitems = [
  { link: '/solutions', title: 'Solutions' },
  { link: '/bluebottle', title: 'BlueBottle USV' },
  { link: '/find-bruce', title: 'Find Bruce' },
  { link: '/news', title: 'News' },
  { link: '/contact', title: 'Contact' },
  { link: '/careers', title: 'Careers' }
];

const dropdownItems = [
  { href: '/about', name: 'Mission' },
  { href: '/about', name: 'People' },
  { href: '/about', name: 'Partners' },
  { href: '/about', name: 'Awards' }
];

export default () => (
  <Navbar>
    <SiteLogo />
    <HamburgerButton />
    <NavbarItems>
      <NavbarDropdown name="About" link="/about">
        <DropdownMenu menuItems={dropdownItems} />
      </NavbarDropdown>
      {navitems.map(item => {
        return <NavbarItem key={navitems.indexOf(item)} link={item.link} title={item.title} />;
      })}
    </NavbarItems>
  </Navbar>
);
