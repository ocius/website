import React from 'react';
import { Link as GatsbyLink, graphql, StaticQuery } from 'gatsby';
import Navbar from './Navbar';
import NavbarHeader from './NavbarHeader';

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
    {navitems.map(item => {
      return (
        <GatsbyLink key={navitems.indexOf(item)} to={item.link}>
          {item.title}
        </GatsbyLink>
      );
    })}
  </Navbar>
);
