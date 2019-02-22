import React from 'react';
import PropTypes from 'prop-types';

// Import media queries
import mq from '../common/mq';

const Segmented = ({ children, borderBottom }) => (
  <div
    className="Segmented"
    style={{
      borderBottom,
      paddingBottom: '2.25rem',
      marginBottom: '2.25rem',
      [`@media (minWidth: ${mq.min['1024']})`]: {
        marginBottom: '3.2rem',
        paddingBottom: '3.2rem'
      }
    }}
  >
    {children}
  </div>
);

Segmented.propTypes = {
  children: PropTypes.node.isRequired,
  borderBottom: PropTypes.string
};

Segmented.defaultProps = {
  borderBottom: '1px solid rgba(189,206,227, 0.47)'
};

export default Segmented;
