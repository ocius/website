import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const styles = {
  footer: {
    backgroundColor: '#125192',
    width: '100%',
    clear: 'both',
    padding: '4.5em 0'
  }
};

const Footer = ({ children, footerStyle }) => {
  return (
    <footer className="footer" style={[styles.footer, footerStyle && footerStyle]}>
      {children}
    </footer>
  );
};

Footer.propTypes = {
  footerStyle: PropTypes.objectOf(PropTypes.object),
  children: PropTypes.node.isRequired
};

Footer.defaultProps = {
  footerStyle: {}
};

export default Radium(Footer);
