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

const PowerMonitor = ({ data }) => {
  const getWholePercent = (percentFor, percentOf) => {
    return Math.floor((percentFor / percentOf) * 100);
  };

  // Extract the battery voltage
  const [BatteryA, BatteryB] = [Number(data.Props.BatteryA), Number(data.Props.BatteryB)];
  // Calculate percentage of charge
  const BatteryAPercentage = getWholePercent(BatteryA, 30);
  const BatteryBPercentage = getWholePercent(BatteryB, 30);

  return (
    <MonitorWrapper>
      <ItemWrapper>
        <Label>Battery A: Voltage {BatteryA}</Label>
        <Progress percent={BatteryAPercentage} />
      </ItemWrapper>
      <ItemWrapper>
        <Label>Battery B: Voltage {BatteryB}</Label>
        <Progress percent={BatteryBPercentage} />
      </ItemWrapper>
    </MonitorWrapper>
  );
};

export default PowerMonitor;
