import styled from 'styled-components';
import mq from '../common/mq';

const Spacing = styled.div`
  height: ${(props) => props.xs || '50px'};
  @media (min-width: ${mq.min[768]}) {
    height: ${(props) => props.md || props.xs};
  }
  @media (min-width: ${mq.min[1200]}) {
    height: ${(props) => props.lg || props.md || props.xs};
  }
`;

export default Spacing;
