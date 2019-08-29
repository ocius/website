import React from 'react';
import { uid } from 'react-uid';
import styled, { css } from 'styled-components';

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
`;

const StatusTag = styled.span`
  letter-spacing: 0.32px;
  display: inline-flex;
  align-items: center;
  padding: 0 0.8rem;
  height: 2.4rem;
  border-radius: 1.5rem;

  ${props =>
    props.type === 'green' &&
    css`
      background-color: #9deeb2;
      color: #049e51;
    `}
`;

// Match all properties with its string label
const StatusNames = {
  Status: 'Status',
  Mode: 'Mode',
  Sail_mode: 'Sail Mode',
  Wp_dist: 'WP Dist',
  Next_wp: 'Next WP',
  Water_depth: 'Water Depth',
  Water_temp: 'Water Temp',
  Water_speed: 'Water Speed',
  Wind_speed: 'Wind Speed',
  Wind_direction: 'Wind Dir',
  Boat_speed: 'Boat Speed',
  Throttle: 'Throttle',
  // Num_Sats: 'Num Sats'
  // Hdop: 'HDOP'
  Heading: 'Heading',
  Lat: 'Latitude',
  Lon: 'Longitude'
};

/**
 * Flatten a multidimensional object
 *
 * For example:
 *   flattenObject({ a: 1, b: { c: 2 } })
 * Returns:
 *   { a: 1, c: 2}
 */
const flattenObject = obj => {
  const flattened = {};

  if (typeof obj === 'object') {
    Object.keys(obj).forEach(key => {
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
const formatVesselStatusData = data => {
  // Variable to hold array with statuses
  const statuses = [];
  const flattened = flattenObject(data);

  // Add degrees to the end - 17.7°C
  const formatTemperature = temperature => {
    return `${parseFloat(temperature).toFixed(1)}\xB0C`;
  };

  // Add m/s to the end - 2.5m/s
  const formatSpeed = speed => {
    return `${parseFloat(speed).toFixed(2)}m/s`;
  };

  // Add degree to the end - 10°
  const formatDirection = direction => {
    return `${parseFloat(direction).toFixed(1)}\xB0`;
  };

  /*
    Convert coordinate to degree, minutes, seconds
    For example:
      -33°54.35'
   */
  const toDegreesMinutesAndSeconds = coordinate => {
    const absolute = Math.abs(coordinate);
    const degrees = Math.floor(absolute);
    const minutesNotTruncated = (absolute - degrees) * 60;
    const minutes = Math.floor(minutesNotTruncated);
    const seconds = Math.floor((minutesNotTruncated - minutes) * 60);

    return `${degrees}°${minutes}.${seconds}'`;
  };

  // Convert latitude to degree, minutes, seconds
  const formatLatitude = lat => {
    const latitude = toDegreesMinutesAndSeconds(lat);
    const latitudeCardinal = lat >= 0 ? 'N' : 'S';

    return `${latitude} ${latitudeCardinal}`;
  };

  // Convert longitude to degree, minutes, seconds
  const formatLongitude = lng => {
    const longitude = toDegreesMinutesAndSeconds(lng);
    const longitudeCardinal = lng >= 0 ? 'E' : 'W';

    return `${longitude} ${longitudeCardinal}`;
  };

  if (Object.entries(flattened).length !== 0) {
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(flattened)) {
      if (value !== null) {
        // We have a value, display it
        if (key === 'Water_temp') {
          statuses[StatusNames[key]] = formatTemperature(value);
        } else if (key === 'Wind_speed' || key === 'Water_speed') {
          statuses[StatusNames[key]] = formatSpeed(value);
        } else if (key === 'Wind_direction' || key === 'Heading') {
          statuses[StatusNames[key]] = formatDirection(value);
        } else if (key === 'Lat') {
          statuses[StatusNames[key]] = formatLatitude(value);
        } else if (key === 'Lon') {
          statuses[StatusNames[key]] = formatLongitude(value);
        } else if (key === 'Status') {
          statuses[StatusNames[key]] =
            value === 'MAV_STATE_ACTIVE' ? <StatusTag type="green">Active</StatusTag> : value;
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

  return (
    <StatusList>
      {Object.keys(statuses).map((index, id) => (
        <React.Fragment key={uid(index, id)}>
          <dt>{index}</dt>
          <dd>{statuses[index]}</dd>
        </React.Fragment>
      ))}
    </StatusList>
  );
};

export default VesselStatus;
