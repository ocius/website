import React from 'react';
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
`;

const PowerMonitor = () => {
  return (
    <MonitorWrapper>
      <Label>Battery: Voltage 28.4</Label>
      <Progress percent={96} />
      <Label>Charge/Discharge Power: -44 watts</Label>
      <Progress percent={4.3} />
      <Label>Solar Charge: 24.16 watts</Label>
      <Progress percent={3.9} />
    </MonitorWrapper>
  );
};

export default PowerMonitor;
