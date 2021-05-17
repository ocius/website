import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const LongArrow = ({ fill, ...props }) => (
  <Icon viewBox="0 0 79.397 8.134" {...props}>
    <path d="m14.877 4.067h64.521" fill="none" stroke={fill} strokeWidth="1.36" />
    <path
      d="m0,4.067 16.773,4.066c-1.201-1.009-1.896-2.498-1.896-4.066s.695-3.059 1.896-4.067l-16.773,4.067z"
      fill={fill}
    />
  </Icon>
);

LongArrow.propTypes = {
  fill: PropTypes.string,
};

LongArrow.defaultProps = {
  fill: '#ffffff',
};

export default LongArrow;
