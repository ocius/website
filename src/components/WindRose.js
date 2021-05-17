import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import LongArrow from './Icons/LongArrow';
import mq from '../common/mq';

const Rose = styled.div`
  width: 120px;
  height: 120px;
  position: absolute;
  top: 60px;
  right: 10px;
  padding: 20px;

  @media (max-width: ${mq.max[768]}) {
    width: 100px;
    height: 100px;
    top: 40px;
    right: 0;
  }
`;

const Circle = styled.div`
  border: 2px solid white;
  border-radius: 50%;
  position: relative;
  width: 100%;
  height: 100%;
`;

const Text = css`
  width: 100%;
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  margin: 0.45rem 0;
`;

const WindSpeed = styled.p`
  ${Text}
  color: #ffffff;
`;

const CurrentSpeed = styled.p`
  ${Text}
  color: #ee230d;
`;

const WindRose = ({ windDirection, windSpeed, currentDirection, currentSpeed }) => {
  /**
   * Convert centidegrees to degrees (1 degree = 100 centidegrees).
   * @param {String|Number} string String to be formatted
   */
  const formatCentidegrees = (string) => parseFloat(string).toFixed(1) / 100;

  /**
   * Take speed in m/s as input, then convert to knots.
   * @param {Number} speed Speed number to be converted
   */
  const convertMsToKnots = (speed) => parseFloat(speed) * 1.94384;

  /**
   * Add knots to the end - 2.5knots.
   * @param {String} speed Speed string to be formatted
   */
  const formatSpeed = (speed) => `${parseFloat(speed).toFixed(2)} knt`;

  // Make proper formatting of speed
  const formattedWindSpeed = formatSpeed(convertMsToKnots(windSpeed));
  const formattedCurrentSpeed = formatSpeed(convertMsToKnots(currentSpeed));

  return windDirection || currentDirection ? (
    <Rose>
      {formattedWindSpeed && <WindSpeed>{formattedWindSpeed}</WindSpeed>}

      <Circle>
        <LongArrow
          fill="#ffffff"
          style={{
            height: '100%',
            width: '100%',
            transform: `rotate(-${windDirection}deg)`,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />

        <LongArrow
          fill="#ee230d"
          style={{
            height: '100%',
            width: '100%',
            transform: `rotate(-${formatCentidegrees(currentDirection)}deg)`,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      </Circle>

      {formattedCurrentSpeed && <CurrentSpeed>{formattedCurrentSpeed}</CurrentSpeed>}
    </Rose>
  ) : null;
};

WindRose.propTypes = {
  windDirection: PropTypes.number,
  windSpeed: PropTypes.number,
  currentDirection: PropTypes.number,
  currentSpeed: PropTypes.number,
};

WindRose.defaultProps = {
  windDirection: 0,
  windSpeed: 0,
  currentDirection: 0,
  currentSpeed: 0,
};

export default WindRose;
