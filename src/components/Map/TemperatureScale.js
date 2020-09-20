import React from 'react';
import styled from 'styled-components';
import RainbowColor from './RainbowColor';
import VSBar from './VerticalStackedBar';
import mq from '../../common/mq';

const ChartBarWrapper = styled.div`
  position: absolute;
  right: 0;
  height: 100%;
  z-index: 1;
  background: white;
  user-select: none;
  @media (max-width: ${mq.max[768]}) {
    display: none;
  }
`;

const TemperatureScale = () => {
  return (
    <ChartBarWrapper>
      <VSBar
        data={Array(19)
          .fill()
          .map((_, i) => {
            return { value: 1, description: `${28 - i}\u2103`, color: RainbowColor(i) };
          })}
        outlineColor="rgba(0,0,0,0)"
        fontSize="1.25rem"
      />
    </ChartBarWrapper>
  );
};

export default TemperatureScale;
