import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import styled from 'styled-components';

const NavItem = styled.li`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: inherit;
  vertical-align: baseline;
  background-color: #efefef;
  display: flex;
  padding: 0;
  cursor: pointer;
  height: 4rem;
  transition: background-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9);

  &:hover {
    background-color: #cacaca;
  }

  @media (min-width: 67.2rem) {
    background: #e0e0e0;
    height: auto;

    & + & {
      margin-left: 0;
      box-shadow: -1px 0 0 0 #8d8d8d;
    }
  }
`;

const StyledLink = styled(Link)`
  outline: 2px solid transparent;
  outline-offset: -2px;
  display: inline-block;
  color: #393939;
  text-decoration: none;
  font-weight: 400;
  padding: 1.2rem 0;
  width: calc(100% - 32px);
  height: 4rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0 1.6rem;
  line-height: 2.55rem;
  border-bottom: 1px solid #e0e0e0;
  overflow: hidden;
  transition: color 70ms cubic-bezier(0.2, 0, 0.38, 0.9),
    border-bottom-color 70ms cubic-bezier(0.2, 0, 0.38, 0.9),
    outline 70ms cubic-bezier(0.2, 0, 0.38, 0.9);

  @media (min-width: 67.2rem) {
    border-bottom: 3px solid #e0e0e0;
    padding: 0.8rem 1.6rem;
    width: 16rem;
    margin: 0;
    line-height: inherit;
    display: flex;
    align-items: center;
    height: 4.8rem;
    border-bottom: none;
  }

  &[aria-current*='page'] {
    background-color: #f4f4f4;
    box-shadow: inset 0 2px 0 0 #60d2f6;
    border-bottom: none;
    font-weight: 600;
  }

  &:hover {
    text-decoration: none;
  }

  &:focus,
  &:active {
    outline: 2px solid #60d2f6;
    outline-offset: -2px;
  }
`;

/*
    NavTab is just React-Router's <Link> with some styling + an onClick handler to block clicks on the active tab.
*/

const NavTab = ({ to, children }) => {
  return (
    <NavItem role="presentation">
      <StyledLink to={to}>{children}</StyledLink>
    </NavItem>
  );
};

NavTab.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};

export default NavTab;
