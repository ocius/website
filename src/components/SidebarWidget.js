import styled from 'styled-components';
import mq from '../common/mq';

// Sidebar widget styling
const gutter = 30;
const SidebarWidget = styled.aside`
  padding: 15px 20px;
  background-color: #fff;

  @media (max-width: ${mq.min[480]}) {
    margin-left: -${gutter / 2}px;
    margin-right: -${gutter / 2}px;
  }
`;

export default SidebarWidget;
