import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import Container from './Container';

const styles = {
  background: {
    backgroundColor: '#125192',
    minHeight: '180px'
  },
  header: {
    color: '#60d2f6',
    paddingTop: '80px',
    marginTop: '10px',
    marginLeft: '10px'
  }
};

const PageHeader = ({ children }) => {
  return (
    <header className="page-header" style={[styles.background]}>
      <Container>
        <h1 style={[styles.header]}>{children}</h1>
      </Container>
    </header>
  );
};

PageHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default Radium(PageHeader);
