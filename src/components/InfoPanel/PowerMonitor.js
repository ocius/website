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
  margin-bottom: 0.5rem;
`;

const ItemWrapper = styled.div`
  margin: 0 0 1rem;
`;

const PowerMonitor = () => {
  return (
    <MonitorWrapper>
      <ItemWrapper>
        <Label>Battery: Voltage 28.4</Label>
        <Progress percent={96} />
      </ItemWrapper>
      <ItemWrapper>
        <Label>Charge/Discharge Power: -44W</Label>
        <Progress percent={4.3} />
      </ItemWrapper>
      <ItemWrapper>
        <Label>Solar Charge: 24.16W</Label>
        <Progress percent={3.9} />
      </ItemWrapper>
    </MonitorWrapper>
  );
};

export default PowerMonitor;
