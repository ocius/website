import React from 'react';
import radium, { Style } from 'radium';

import mq from '../common/mq';
import PanelCallout from './PanelCallout';

const styles = {
  container: {
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',

    [`@media (max-width: ${mq.max[960]})`]: {
      flexWrap: 'wrap'
    }
  }
};

const scopedStyles = {
  mediaQueries: {
    [`(max-width: ${mq.max[480]})`]: {
      '.Heading': {
        fontSize: '30px !important',
        marginTop: '13px !important'
      }
    },

    [`(max-width: ${mq.max[960]})`]: {
      '.PanelCallout': {
        flex: '1 1 calc(100%)',
        maxWidth: 'none !important'
      }
    }
  },

  // Ideally, the anchor styles would exist within PanelCallout, but we don't
  // want to repeat the <Style> block for each PanelCallout

  '.PanelCallout:hover .Heading': {
    transform: 'translateY(-5px)'
  }
};

function PanelCalloutGroup({ children }) {
  return (
    <div className="PanelCalloutGroup" style={styles.container}>
      <Style scopeSelector=".PanelCalloutGroup" rules={scopedStyles} />

      {children}
    </div>
  );
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

export default radium(PanelCalloutGroup);
