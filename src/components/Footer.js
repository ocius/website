import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  footer: {
    backgroundColor: '#125192',
    width: '100%',
    marginTop: '10px',
    clear: 'both',
    padding: '0 0 20px 0'
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

export default Footer;
