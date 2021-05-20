import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Scale = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  border: 2px solid #fff;
  border-top: none;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  line-height: 1.1;
  padding: 2px ${(props) => (props.$padding ? `${props.$padding}px` : '8px')} 1px;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.35);

  @media (min-width: 1056px) {
    left: 30rem;
  }
`;

const MapScale = ({ zoom }) => {
  /**
   * Add units (m or km) at the end.
   * @param {Number} range LookAt range
   */
  const formatZoomRange = (range) => {
    // Round tens to the nearest ten
    if (range < 100) {
      return `${Math.round(range / 10) * 10}m`;
    }

    // Round hundreds to the nearest hundred
    if (range >= 100 && range <= 1000) {
      return `${Math.round(range / 100) * 100}m`;
    }

    // Convert to nautical miles
    const nm = range / 1852;
    return `${parseFloat(nm).toFixed(0)} nmi`;
  };

  /**
   * Convert GMap zoom level to GE lookAt range
   * @param {Number} level Current GMap zoom level
   */
  const getGEZoom = (level) => {
    const range = 35200000 / 2 ** level;
    return formatZoomRange(range);
  };

  /**
   * Calculate scale padding depending on zoom level.
   * Applies only for zoom levels bigger or equal to 12.
   * @param {Number} level Current GMap zoom level
   */
  const getScalePadding = (level) => {
    if (level === 20) {
      return 90;
    }
    // Reverse the number, for example 19 becomes 90 minus 10
    if (level >= 12) {
      return parseFloat(level.toString().split('').reverse().join('')) * Math.sign(level) - 11;
    }
    return false;
  };

  return <Scale $padding={getScalePadding(zoom)}>{getGEZoom(zoom)}</Scale>;
};

MapScale.propTypes = {
  zoom: PropTypes.number.isRequired,
};

export default MapScale;
