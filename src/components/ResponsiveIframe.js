import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mq from '../common/mq';

const maxSiteWidth = 1290;
const gutter = 30;
const maxWidth = maxSiteWidth + gutter * 4;
const mediaQuery = `${maxWidth * 0.0625}em`;

/*
 * A responsive iframe that retains the 16:9 aspect ratio to remove black sidebars
 */

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const StyledIframeContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  padding-bottom: 56.25%; /* 16:9, for an aspect ratio of 1:1 change to this value to 100% */ 
  width: 100%;
  max-width: ${maxSiteWidth}px;
`;

/* Aspect ratio possibilities to implement
 * 1:1	100%
 * 16:9	56.25%
 * 4:3	75%
 * 3:2	66.66%
 * 8:5	62.5% */

const ResponsiveIframe = ({ src, id, className, style }) => (
  <StyledIframeContainer id={id} className={className} style={style}>
    <StyledIframe src={src}/>
  </StyledIframeContainer>
);

ResponsiveIframe.propTypes = {
  src: PropTypes.string.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.object)
};

ResponsiveIframe.defaultProps = {
  id: '',
  className: '',
  style: {}
};

export default ResponsiveIframe;
