import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 2rem 0 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: inherit;
  vertical-align: baseline;
  letter-spacing: 0.16px;
  color: #161616;
  height: auto;
  width: 100%;
  position: relative;
`;

const NavHidden = css`
  transition: max-height 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  overflow: hidden;
  max-height: 0;

  @media (min-width: 67.2rem) {
    display: flex;
    transition: inherit;
    overflow: visible;
    max-height: none;
  }
`;

const Nav = styled.ul`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  z-index: 9100;
  background: #efefef;
  transition: max-height 70ms cubic-bezier(0.2, 0, 0.38, 0.9);
  max-height: 600px;

  @media (min-width: 67.2rem) {
    flex-direction: row;
    background: none;
    box-shadow: none;
    z-index: auto;
    transition: inherit;
    width: auto;
  }

  ${NavHidden}
`;

/*
    NavTabs is wrapper for tabs navigation.
*/

const NavTabs = ({ children }) => {
  return (
    <Wrapper role="navigation">
      <Nav role="tablist">{children}</Nav>
    </Wrapper>
  );
};

export default NavTabs;
