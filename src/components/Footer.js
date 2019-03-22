import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #125192;
  width: 100%;
  clear: both;
  padding: 4.5em 0;
`;

const Footer = ({ children, footerStyle }) => {
  return (
    <StyledFooter className="footer" style={footerStyle}>
      {children}
    </StyledFooter>
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
