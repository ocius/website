import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import NavContext from '../../../common/context/NavContext';

const Nav = styled.nav`
  color: #ffffff;
  z-index: 10000;
  position: fixed;
  right: 0;
  top: 50px;
  height: 100%;
  padding: 1.6rem 0;
  width: 35rem;
  background-color: #efefef;
  transform: translateX(35rem);
  transition: transform 150ms cubic-bezier(0.2, 0, 0.38, 0.9);

  ${props =>
    props.open &&
    css`
      transform: translateX(0);
      box-shadow: -2px 2px 6px rgba(0, 0, 0, 0.2);
    `}
`;

const Switcher = ({ children }) => {
  const { switcherIsOpen } = useContext(NavContext);

  return (
    <Nav
      open={switcherIsOpen}
      aria-label="OCIUS Camera Controls"
      aria-expanded={switcherIsOpen}
      id="switcher-navigation"
    >
      {children}
    </Nav>
  );
};

Switcher.propTypes = {
  children: PropTypes.node.isRequired
};

export default Switcher;
