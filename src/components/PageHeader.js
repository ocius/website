import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mq from '../common/mq';
import Heading from './Heading';
import Container from './Container';

const HeaderContainer = styled.header`
  background-color: #125192;
  min-height: 180px;

  @media (max-width: ${mq.max[768]}) {
    font-size: 0.9em;
    min-height: 80px;
  }
`;

const H1 = styled(Heading)`
  color: #60d2f6;
  padding-top: 80px;
  margin-top: 0;

  @media (max-width: ${mq.max[768]}) {
    padding-top: 20px;
  }
`;

const PageHeader = ({ children }) => {
  return (
    <HeaderContainer className="page-header">
      <Container>
        <H1 level={1} size="huge">
          {children}
        </H1>
      </Container>
    </HeaderContainer>
  );
};

PageHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageHeader;
