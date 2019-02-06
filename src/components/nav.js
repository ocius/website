import React from 'react';
import { Link } from 'gatsby';
import Navbar from './Navbar';

const navitems = [
  { link: '/', title: 'Home' },
  { link: '/about', title: 'About' },
  { link: '/solutions', title: 'Solutions' },
  { link: '/bluebottle', title: 'Bluebottle' },
  { link: '/findBruce', title: 'Find Bruce' },
  { link: '/news', title: 'News' },
  { link: '/contact', title: 'Contact' },
  { link: '/careers', title: 'Careers' }
];

export default () => (
  <Navbar>
    {navitems.map(item => {
      return (
        <Link key={navitems.indexOf(item)} to={item.link}>
          {item.title}
        </Link>
      );
    })}
  </Navbar>
);
