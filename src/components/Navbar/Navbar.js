import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid/src';
import mq from '../../common/mq';

const StyledNavbar = styled.header`
  position: fixed;
  background-color: #ffffff;
  margin: 0px;
  width: 100%;
  z-index: 6000;
  top: 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const FlexContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0 15px;

  @media (max-width: ${mq.max[768]}) {
    flex-direction: row;
    padding: 0 5px;
  }
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
