import React from 'react';
import styled from 'styled-components';

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

const VesselStatus = () => {
  return (
    <StatusList>
      <dt>Latitude:</dt>
      <dd>-33.90594</dd>
      <dt>Longitude:</dt>
      <dd>151.23461</dd>
      <dt>Heading:</dt>
      <dd>287.3</dd>
      <dt>Throttle:</dt>
      <dd>0.0</dd>
      <dt>Boat Speed:</dt>
      <dd>0.0</dd>
      <dt>Wind Dir:</dt>
      <dd>306.4</dd>
      <dt>Wind Speed:</dt>
      <dd>0.8</dd>
      <dt>Water Speed:</dt>
      <dd>1.1</dd>
      <dt>Water Temp:</dt>
      <dd>24.8</dd>
      <dt>Water Depth:</dt>
      <dd>0.0</dd>
      <dt>Next WP:</dt>
      <dd>0</dd>
      <dt>WP Dist:</dt>
      <dd>24</dd>
      <dt>Status:</dt>
      <dd>Disarmed</dd>
      <dt>Mode:</dt>
      <dd>MANUAL</dd>
      <dt>Sail Mode:</dt>
      <dd>Motor Only</dd>
    </StatusList>
  );
};

export default VesselStatus;
