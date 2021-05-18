import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Scale = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  border: 2px solid #777;
  border-top: none;
  color: #565656;
  font-size: 12px;
  font-weight: bold;
  line-height: 1.1;
  padding: 2px 4px 1px;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
  background: #ffffff;

  @media (min-width: 1056px) {
    left: 30rem;
    font-size: 14px;
    padding: 4px 8px 1px;
  }
`;

const MapScale = ({ zoom }) => {
  /**
   * Add units (m or km) at the end.
   * @param {Number} range LookAt range
   */
  const formatZoomRange = (range) => {
    if (range < 1000) {
      return `<1000m`;
    }

    // Convert to nautical miles
    const nm = range / 1852;
    return `${parseFloat(nm).toFixed(1)}nmi`;
  };

  /**
   * convert GMap zoom level to GE lookAt range
   * @param {Number} level Current GMap zoom level
   */
  const getGEZoom = (level) => {
    let range = 35200000 / 2 ** level;
    if (range < 300) range = 300;
    return formatZoomRange(range);
  };

  return <Scale>{getGEZoom(zoom)}</Scale>;
};

MapScale.propTypes = {
  zoom: PropTypes.number.isRequired,
};

export default MapScale;
