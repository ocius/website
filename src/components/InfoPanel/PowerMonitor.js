import React from 'react';
import { uid } from 'react-uid';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Progress from '../Progress';

const MonitorWrapper = styled.div`
  font-size: 1.5rem;
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;

const Label = styled.span`
  display: block;
  margin-bottom: 0.5rem;
`;

const ItemWrapper = styled.div`
  margin: 0 0 1rem;
`;

// Displays the battery levels in Volts and graphically using ProgressBars
// Assumes Batteries.length() == BatteryPercentages.length()
const PowerMonitor = ({ Batteries, BatteryPercentages }) => {
  const BatteryBars = Batteries.map((BatteryLevel, index) => (
    <ItemWrapper key={uid(BatteryLevel, index)}>
      <Label>
        Battery {String.fromCharCode(65 + index)}: {BatteryLevel}V
      </Label>
      <Progress percent={parseFloat(BatteryPercentages[index])} />
    </ItemWrapper>
  ));

  return <MonitorWrapper>{BatteryBars}</MonitorWrapper>;
};

PowerMonitor.propTypes = {
  Batteries: PropTypes.arrayOf(PropTypes.string),
};

PowerMonitor.defaultProps = {
  Batteries: [],
};

export default PowerMonitor;
