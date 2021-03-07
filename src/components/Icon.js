import React from 'react';
import PropTypes from 'prop-types';
import assign from 'object-assign';

function getIconDimensions(height, width) {
  if (height && width) {
    return { height, width };
  }

  if (!height && width) {
    return { height: width, width };
  }

  if (height && !width) {
    return { height, width: height };
  }

  return {
    height: '1em',
    width: '1em',
  };
}

function getIconAriaData(label) {
  const aria = {};

  if (label) {
    aria['aria-label'] = label;
  } else {
    aria['aria-hidden'] = 'true';
  }

  return aria;
}

function Icon(props) {
  const { children, className, fill, height, label, viewBox, width } = props;
  const dimensions = getIconDimensions(height, width);
  const aria = getIconAriaData(label);

  const style = {
    display: 'inline-block',
    fill: fill || 'currentColor',
    height: dimensions.height,
    lineHeight: 1,
    verticalAlign: 'middle',
    width: dimensions.width,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={props && props.style ? assign({}, style, props.style) : style}
      viewBox={viewBox}
      role={label ? 'img' : null}
      {...aria}
    >
      {children}
    </svg>
  );
}

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  viewBox: PropTypes.string,
  className: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object]),
};

Icon.defaultProps = {
  viewBox: '0 0 32 32',
  className: '',
  fill: '',
  width: 0,
  height: 0,
  label: '',
  style: {},
};

export default Icon;
