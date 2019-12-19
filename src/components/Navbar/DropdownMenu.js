import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { Link as GatsbyLink } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-gtag';
import { css } from 'styled-components'

const Menu = styled.ul`
  display: ${prop('display', 'none')};
  margin: 0px;
  padding: 0px;
  position: absolute;
  left: 0;
  border: 1px solid #ddd;
  box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.1);
  background-color: white;
  z-index: 1000;
  text-align: left;
  list-style: none;
`;

const MenuItemStyle = css`
  display: block;
  padding: 10px 20px;
  clear: both;
  font-size: 17px;
  font-weight: normal;
  line-height: 1.42857143;
  color: #333;
  white-space: nowrap;
  text-decoration: none;
  box-sizing: border-box;

  :focus,
  :hover {
    background: #efefef;
    color: #001826;
    text-decoration: none;
  }
`;

const Link = styled(GatsbyLink)`
  ${MenuItemStyle}
`;

const StyledOutboundLink = styled(OutboundLink)`
  ${MenuItemStyle}
`;

const DropdownMenu = ({ open, menuItems, setRef }) => (
  <Menu ref={setRef} display={open ? 'block' : 'none'}>
    {menuItems.map(item => {
      if (item.outbound)
        return (
          <li key={menuItems.indexOf(item)}>
            <StyledOutboundLink key={item.name} href={item.href}>
              {item.name}
            </StyledOutboundLink>
          </li>
        );
      return (
        <li key={menuItems.indexOf(item)}>
          <Link key={item.name} to={item.href}>
            {item.name}
          </Link>
        </li>
      );
    })}
  </Menu>
);

DropdownMenu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  open: PropTypes.bool
};

DropdownMenu.defaultProps = {
  open: false
};

export default DropdownMenu;
