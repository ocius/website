import React from 'react';
import styled from 'styled-components';

import mq from '../common/mq';
import PanelCallout from './PanelCallout';

const PanelContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${mq.max[960]}) {
    flex-wrap: wrap;
  }
`;

function PanelCalloutGroup({ children }) {
  return <PanelContainer className="PanelCalloutGroup">{children}</PanelContainer>;
}

PanelCalloutGroup.propTypes = {
  children: (props, propName, componentName) => {
    const prop = props[propName];
    let error = null;

    React.Children.forEach(prop, child => {
      if (child.type !== PanelCallout) {
        error = new Error(`${componentName} children should be of type "PanelCallout".`);
      }

      if (child.type === PanelCallout && React.Children.count.length > 4) {
        error = new Error(`${componentName} should have no more than 4 children.`);
      }
    });

    return error;
  }
};

PanelCalloutGroup.defaultProps = {
  children: ''
};

export default PanelCalloutGroup;
