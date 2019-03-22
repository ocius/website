import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../Container';

const StyledNavbar = styled.header`
  background-color: #efefef;
  margin: 0px;
  width: 100%;
  z-index: 1;
  top: 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const FlexContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-content: center;
  min-height: 44px;
`;

const Navbar = ({ children }) => {
  return (
    <StyledNavbar className="primary">
      <FlexContainer>{children}</FlexContainer>
    </StyledNavbar>
  );
};

Navbar.propTypes = {
  children: PropTypes.node.isRequired
};

export default Navbar;
