import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Navbar from './Navbar';
import NavbarHeader from './NavbarHeader';
import NavbarItems from './NavbarItems';
import NavbarItem from './NavbarItem';

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
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => <NavbarHeader name={data.site.siteMetadata.title} />}
    />
    <NavbarItems>
      {navitems.map(item => {
        return <NavbarItem key={navitems.indexOf(item)} link={item.link} title={item.title} />;
      })}
    </NavbarItems>
  </Navbar>
);
