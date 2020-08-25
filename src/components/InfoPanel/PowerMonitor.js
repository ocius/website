import React from 'react';
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

const PowerMonitor = ({ Batteries }) => {
  const getWholePercent = (percentFor, percentOf) => {
    return Math.floor((percentFor / percentOf) * 100);
  };

  const BatteryBars = Batteries.map((BatteryLevel, index) => (
    <ItemWrapper key={BatteryLevel.id}>
      <Label>
        Battery {String.fromCharCode(65 + index)}: {BatteryLevel}V
      </Label>
      <Progress percent={getWholePercent(BatteryLevel - 22, 8)} />
    </ItemWrapper>
  ));

  return <MonitorWrapper>{BatteryBars}</MonitorWrapper>;
};

PowerMonitor.propTypes = {
  Batteries: PropTypes.arrayOf(PropTypes.number),
};

PowerMonitor.defaultProps = {
  Batteries: [],
};

export default PowerMonitor;
