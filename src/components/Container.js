import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const styles = {
  container: {
    width: '960px',
    margin: '0 auto',
    position: 'relative',

    '@media (max-width: 767px)': {
      width: '100%'
    },
    '@media (min-width: 768px)': {
      width: '768px'
    },
    '@media (min-width: 992px)': {
      width: '970px'
    },
    '@media (min-width: 1200px)': {
      width: '1140px'
    }
  }
};

const Container = ({ children, contStyle }) => {
  return (
    <div className="container" style={[styles.container, contStyle && contStyle]}>
      {children}
    </div>
  );
};

Container.propTypes = {
  contStyle: PropTypes.objectOf(PropTypes.object),
  children: PropTypes.node.isRequired
};

Container.defaultProps = {
  contStyle: {}
};

export default Radium(Container);
