import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';
import { Link as GatsbyLink } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { OutboundLink } from 'gatsby-plugin-gtag';

const MenuItemStyle = css`
  display: block;
  min-width: 10em;
  padding: 0.6em 1em;
  clear: both;
  font-size: 17px;
  font-weight: normal;
  line-height: 1.42857143;
  color: #333;
  white-space: nowrap;
  text-decoration: none;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(51, 51, 51, 0.1);

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

const StyledAnchorLink = styled(AnchorLink)`
  ${MenuItemStyle}
`;

const Menu = styled.ul`
  display: ${prop('display', 'none')};
  margin: 0px;
  padding: 8px;
  min-width: 14em;
  position: absolute;
  left: 0;
  border: 1px solid #ddd;
  box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.75);
  z-index: 1000;
  text-align: left;
  list-style: none;

  &:after {
    content: '';
    border: solid #cfc6c0;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 6px;
    transform: rotate(-135deg);
    position: absolute;
    top: -7px;
    background: #fff;
    left: 33px;
    z-index: -1;
  }

  li:last-child ${Link} {
    border-bottom: none;
  }
`;

const DropdownMenu = ({ open, menuItems, setRef }) => (
  <Menu ref={setRef} display={open ? 'block' : 'none'}>
    {menuItems.map((item) => {
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
          <StyledAnchorLink key={item.name} to={item.href}>
            {item.name}
          </StyledAnchorLink>
        </li>
      );
    })}
  </Menu>
);

DropdownMenu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  open: PropTypes.bool,
};

DropdownMenu.defaultProps = {
  open: false,
};

export default DropdownMenu;
