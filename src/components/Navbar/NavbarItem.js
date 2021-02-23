import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-gtag';
import detectActive from '../../common/detectActive';
import isExternalURL from '../../common/detectExternalURL';
import DynamicLink from '../DynamicLink';

const Item = styled.li`
  position: relative;
  display: inline-block;
  list-style: none;
  font-size: 1em;
  font-weight: 300;
  line-height: 1.4;

  :hover,
  :focus-within {
    ul {
      display: block;
    }
  }
`;

const NavbarLink = styled(DynamicLink)`
  display: inline-block;
  padding: 1em;
  font-size: 1.7rem;
  font-weight: 500;
  line-height: 100%;
  text-decoration: none;
  color: ${(props) => props.theme.colors.themeDarker};

  :hover {
    text-decoration: none;
  }

  ${Item}:hover & {
    color: ${(props) => props.theme.colors.themePrimaryLight};
    background-color: #ffffff;
  }

  :focus {
    background: ${(props) => props.theme.colors.neutralLight};
    color: ${(props) => props.theme.colors.themeDarker};
  }

  &[data-active] {
    background-color: ${(props) => props.theme.colors.neutralLight};
  }
`;

const Caret = styled.b`
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 7px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
`;

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

  :focus,
  :hover {
    background: ${(props) => props.theme.colors.neutralLightAlt};
    color: ${(props) => props.theme.colors.themePrimaryLight};
    text-decoration: none;
  }

  &[data-active] {
    background: ${(props) => props.theme.colors.neutralLightAlt};
  }
`;

const DropdownLink = styled(GatsbyLink)`
  ${MenuItemStyle}
`;

const DropdownOutboundLink = styled(OutboundLink)`
  ${MenuItemStyle}
`;

const Menu = styled.ul`
  display: none;
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

  :after {
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

  li {
    border-bottom: 1px solid rgba(51, 51, 51, 0.1);
    :last-child {
      border-bottom: none;
    }
  }
`;

const NavbarItem = ({ path, title, menuItems }) => (
  <Item className="list">
    <NavbarLink className="link" to={path} getProps={detectActive}>
      {title}
      {menuItems && <Caret />}
    </NavbarLink>

    {menuItems && (
      <Menu>
        {menuItems.map((item) => {
          if (isExternalURL(item.path)) {
            return (
              <li key={menuItems.indexOf(item)}>
                <DropdownOutboundLink key={item.title} href={item.path}>
                  {item.title}
                </DropdownOutboundLink>
              </li>
            );
          }

          return (
            <li key={menuItems.indexOf(item)}>
              <DropdownLink key={item.title} to={item.path} getProps={detectActive}>
                {item.title}
              </DropdownLink>
            </li>
          );
        })}
      </Menu>
    )}
  </Item>
);

NavbarItem.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

NavbarItem.defaultProps = {
  menuItems: null,
};

export default NavbarItem;
