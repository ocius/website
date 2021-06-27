import React from 'react';
import { uid } from 'react-uid';
import styled, { css } from 'styled-components';
import PowerMonitor from './PowerMonitor';

const StatusList = styled.dl`
  font-size: 1.5rem;
  line-height: 1.8;
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;

  dt {
    font-weight: bold;
  }

  dd,
  dt {
    float: left;
    width: 50%;
    /* Adjust the width; make sure the total of both is 100% */
    padding: 0;
    margin: 0;
  }

  dt {
    clear: both;
  }
`;

const StatusTag = styled.span`
  letter-spacing: 0.32px;
  display: inline-flex;
  align-items: center;
  padding: 0 0.8rem;
  height: 2.4rem;
  border-radius: 1.5rem;

  ${(props) =>
    props.type === 'active' &&
    css`
      background-color: #9deeb2;
      color: #049e51;
    `}

  ${(props) =>
    props.type === 'inactive' &&
    css`
      background-color: #e9e9e9;
      color: #8f8f8f;
    `}
`;

const H3Heading = styled.h3`
  font-family: inherit;
  font-weight: 400;
  border-bottom: 1px solid #e9e9e9;
  color: ${(props) => props.theme.colors.themeDark};
  margin-top: 3.2rem;
  padding-bottom: 0.8rem;
  margin-bottom: 1.6rem;
`;

// Match all properties with its string label
const StatusNames = {
  Status: 'Status',
  Mode: 'Mode',
  Sail_mode: 'Sail Mode',
  Wp_dist: 'WP Dist',
  Next_wp: 'Next WP',
  Air_temp: 'Air Temp',
  Water_temp: 'Water Temp',
  Water_depth: 'Water Depth',
  Boat_speed: 'Boat Speed',
  Throttle: 'Throttle',
  // Num_Sats: 'Num Sats'
  // Hdop: 'HDOP'
  Heading: 'Heading',
  Lat: 'Latitude',
  Lon: 'Longitude',
};

/**
 * Flatten a multidimensional object
 *
 * For example:
 *   flattenObject({ a: 1, b: { c: 2 } })
 * Returns:
 *   { a: 1, c: 2}
 */
const flattenObject = (obj) => {
  const flattened = {};

  if (typeof obj === 'object') {
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        Object.assign(flattened, flattenObject(obj[key]));
      } else {
        flattened[key] = obj[key];
      }
    });
  }

  return flattened;
};

/**
 * Replace shortened properties with strings.
 *
 * For example:
 *  addLabelsToValues({ Water_temp: "30.709999", Wind_Speed: "0.252078" })
 *
 * Returns:
 *  [ "Water Temp": "17.7°C", "Wind Speed": "2.5m/s" ]
 *
 */
const formatVesselStatusData = (data) => {
  // Variable to hold array with statuses
  const statuses = [];
  const flattened = flattenObject(data);

  /**
   * Add degrees to the end - 17.7°C.
   * @param {String} temperature Temperature string to be formatted
   */
  const formatTemperature = (temperature) => `${parseFloat(temperature).toFixed(1)}\xB0C`;

  /**
   * Add knots to the end - 2.5knots.
   * @param {String} speed Speed string to be formatted
   */
  const formatSpeed = (speed) => `${parseFloat(speed).toFixed(2)} knots`;

  /**
   * Add degree to the end - 10°
   * @param {String} direction Direction string to be formatted
   */
  const formatDirection = (direction) => `${parseFloat(direction).toFixed(1)}\xB0`;

  /**
   * Add depth units to the end, Rounds to 2 decimal places
   * If the depth is outside of the range 0<=depth<=60
   * returns '> 60m'
   * @param {String} depth Depth string to be formatted
   */
  const formatDepth = (depth) => {
    const depthRounded = parseFloat(depth).toFixed(2);
    if (depthRounded < 0 || depthRounded > 60.0) {
      return `> 60m`;
    }
    return `${depthRounded}m`;
  };

  /**
   * Convert coordinate to degree, minutes, seconds/
   * For example:
   *   -33°54.35'
   */
  const toDegreesMinutesAndSeconds = (coordinate) => {
    const absolute = Math.abs(coordinate);
    const degrees = Math.floor(absolute);
    const minutesNotTruncated = (absolute - degrees) * 60;
    const minutes = Math.floor(minutesNotTruncated);
    const seconds = Math.floor((minutesNotTruncated - minutes) * 60);

    return `${degrees}°${minutes}.${seconds}'`;
  };

  /**
   * Convert latitude to degree, minutes, seconds.
   * @param {String} lat Latitude to be formatted
   */
  const formatLatitude = (lat) => {
    const latitude = toDegreesMinutesAndSeconds(lat);
    const latitudeCardinal = lat >= 0 ? 'N' : 'S';

    return `${latitude} ${latitudeCardinal}`;
  };

  /**
   * Convert longitude to degree, minutes, seconds.
   * @param {String} lng Longitude to be formatted
   */
  const formatLongitude = (lng) => {
    const longitude = toDegreesMinutesAndSeconds(lng);
    const longitudeCardinal = lng >= 0 ? 'E' : 'W';

    return `${longitude} ${longitudeCardinal}`;
  };

  /**
   * Convert MANUAL --> Manual.
   * @param {String} string String to be formatted
   */
  const capitalizeFirstLetter = (string) => {
    const lowerCase = string.toLowerCase();
    return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
  };

  if (Object.entries(flattened).length !== 0) {
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(flattened)) {
      if (value !== null) {
        // We have a value, display it
        if (key === 'Water_temp') {
          statuses[StatusNames[key]] = formatTemperature(value);
        } else if (key === 'Air_temp') {
          statuses[StatusNames[key]] = formatTemperature(value);
        } else if (key === 'Water_depth') {
          statuses[StatusNames[key]] = formatDepth(value);
        } else if (key === 'Boat_speed') {
          statuses[StatusNames[key]] = formatSpeed(value);
        } else if (key === 'Heading') {
          statuses[StatusNames[key]] = formatDirection(value);
        } else if (key === 'Lat') {
          statuses[StatusNames[key]] = formatLatitude(value);
        } else if (key === 'Lon') {
          statuses[StatusNames[key]] = formatLongitude(value);
        } else if (key === 'Status') {
          switch (value) {
            case 'Active':
              statuses[StatusNames[key]] = <StatusTag type="active">Active</StatusTag>;
              break;
            case 'Inactive':
              statuses[StatusNames[key]] = <StatusTag type="inactive">Inactive</StatusTag>;
              break;
            default:
              statuses[StatusNames[key]] = value;
          }
        } else if (key === 'Mode') {
          statuses[StatusNames[key]] = capitalizeFirstLetter(value);
        } else if (typeof StatusNames[key] !== 'undefined') {
          statuses[StatusNames[key]] = value;
        }
      }
    }
  }

  return statuses;
};

const VesselStatus = ({ data }) => {
  const statuses = formatVesselStatusData(data);
  return data ? (
    <>
      <H3Heading>Vessel Status</H3Heading>
      <StatusList>
        {Object.keys(statuses).map((index, id) => (
          <React.Fragment key={uid(index, id)}>
            <dt>{index}</dt>
            <dd>{statuses[index]}</dd>
          </React.Fragment>
        ))}
      </StatusList>
      <H3Heading>Power Monitor</H3Heading>
      <PowerMonitor
        Batteries={data.Props.Batteries}
        BatteryPercentages={data.Props.BatteryPercentages}
      />
    </>
  ) : null;
};

export default VesselStatus;
