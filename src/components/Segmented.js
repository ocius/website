import React from 'react';
import PropTypes from 'prop-types';

// Import media queries
import mq from '../common/mq';

const Segmented = ({ children, borderBottom, multiplier, ...rest }) => (
  <div
    className="Segmented"
    style={{
      borderBottom,
      paddingBottom: `${2.25 * multiplier}rem`,
      marginBottom: `${2.25 * multiplier}2.25rem`,
      [`@media (minWidth: ${mq.min['1024']})`]: {
        marginBottom: `${3.2 * multiplier}rem`,
        paddingBottom: `${3.2 * multiplier}rem`
      }
    }}
    {...rest}
  >
    {children}
  </div>
);

Segmented.propTypes = {
  children: PropTypes.node.isRequired,
  borderBottom: PropTypes.string,
  multiplier: PropTypes.number
};

Segmented.defaultProps = {
  borderBottom: '1px solid #efefef',
  multiplier: 1
};

export default Segmented;
