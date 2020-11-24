import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mq from '../common/mq';
import Container from './Container';

const HeaderContainer = styled.header`
  min-height: 180px;

  @media (max-width: ${mq.max[768]}) {
    font-size: 0.9em;
    min-height: 80px;
  }
`;

const PageHeader = ({ children }) => (
  <HeaderContainer className="page-header">
    <Container>{children}</Container>
  </HeaderContainer>
);

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageHeader;
