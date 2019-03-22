import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mq from '../common/mq';
import Container from './Container';

const HeaderContainer = styled.header`
  background-color: #125192;
  min-height: 180px;

  @media (max-width: ${mq.max[768]}) {
    font-size: 0.9em;
    min-height: 80px;
  }
`;

const Heading = styled.h1`
  color: #60d2f6;
  padding-top: 80px;
  margin-top: 0;

  @media (max-width: ${mq.max[768]}) {
    padding-top: 5px;
  }
`;

const PageHeader = ({ children }) => {
  return (
    <HeaderContainer className="page-header">
      <Container>
        <Heading>{children}</Heading>
      </Container>
    </HeaderContainer>
  );
};

PageHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageHeader;
