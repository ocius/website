import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../Container';

const StyledNavbar = styled.header`
  position: fixed;
  background-color: #ffffff;
  margin: 0px;
  width: 100%;
  z-index: 11;
  top: 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;
`;

const Navbar = ({ children }) => (
  <StyledNavbar className="primary">
    <FlexContainer>{children}</FlexContainer>
  </StyledNavbar>
);

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navbar;
