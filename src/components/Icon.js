import React from 'react';
import PropTypes from 'prop-types';
import assign from 'object-assign';
import classNames from 'classnames';

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
    width: '1em'
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
    width: dimensions.width
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('Icon', className)}
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
  viewBox: PropTypes.string.isRequired,
  className: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object])
};

Icon.defaultProps = {
  className: '',
  fill: '',
  width: 32,
  height: 32,
  label: '',
  style: {}
};

// Interface

const Email = props => (
  <Icon {...props}>
    <path d="M0 8.023v17.031c0 0.18 0.188 0.359 0.188 0.539l10.354-9.323-10.542-8.247zM32 25.771v-17.57l-10.354 8.068 10.354 9.502zM30.306 5.333h-28.235c-0.565 0-1.131 0.359-1.506 0.716l14.871 11.653c0.377 0.359 0.94 0.359 1.506 0l14.871-11.653c-0.379-0.357-0.942-0.716-1.508-0.716zM14.306 19.138l-2.26-1.794-10.352 9.323h28.988l-10.354-9.502-2.26 1.792c-0.565 0.359-1.317 0.716-1.883 0.716-0.752 0.181-1.316-0.178-1.881-0.535v0z" />
  </Icon>
);

// Social

const Facebook = props => (
  <Icon {...props}>
    <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z" />
  </Icon>
);

const FacebookMessenger = props => (
  <Icon {...props}>
    <path d="M16 0c-8.8 0-16 6.6-16 14.8 0 4.7 2.3 8.8 5.9 11.5v5.7l5.5-3c1.5 0.4 3 0.6 4.6 0.6 8.8 0 16-6.6 16-14.8s-7.2-14.8-16-14.8zM17.7 19.9l-4.1-4.3-8 4.4 8.7-9.2 4.1 4.3 8-4.4-8.7 9.2z" />
  </Icon>
);

const Pinterest = props => (
  <Icon {...props}>
    <path d="M16 2.138c-7.656 0-13.863 6.206-13.863 13.863 0 5.875 3.656 10.887 8.813 12.906-0.119-1.094-0.231-2.781 0.050-3.975 0.25-1.081 1.625-6.887 1.625-6.887s-0.412-0.831-0.412-2.056c0-1.925 1.119-3.369 2.506-3.369 1.181 0 1.756 0.887 1.756 1.95 0 1.188-0.756 2.969-1.15 4.613-0.331 1.381 0.688 2.506 2.050 2.506 2.462 0 4.356-2.6 4.356-6.35 0-3.319-2.387-5.638-5.787-5.638-3.944 0-6.256 2.956-6.256 6.019 0 1.194 0.456 2.469 1.031 3.163 0.113 0.137 0.131 0.256 0.094 0.4-0.106 0.438-0.338 1.381-0.387 1.575-0.063 0.256-0.2 0.306-0.463 0.188-1.731-0.806-2.813-3.337-2.813-5.369 0-4.375 3.175-8.387 9.156-8.387 4.806 0 8.544 3.425 8.544 8.006 0 4.775-3.012 8.625-7.194 8.625-1.406 0-2.725-0.731-3.175-1.594 0 0-0.694 2.644-0.863 3.294-0.313 1.206-1.156 2.712-1.725 3.631 1.3 0.4 2.675 0.619 4.106 0.619 7.656 0 13.863-6.206 13.863-13.863 0-7.662-6.206-13.869-13.863-13.869z" />
  </Icon>
);

const Reddit = props => (
  <Icon {...props}>
    <path d="M32 15.6c0-2-1.7-3.7-3.7-3.7-0.9 0-1.8 0.3-2.4 0.9-2.4-1.5-5.6-2.5-9.1-2.6l2.1-5.9 5.2 1.2c0 1.6 1.4 3 3 3 1.7 0 3-1.3 3-3s-1.4-3-3-3c-1.3 0-2.3 0.8-2.8 1.9l-6.2-1.4-2.6 7.3c-3.7 0.1-7 1.1-9.5 2.6-0.6-0.6-1.4-0.9-2.3-0.9-2 0-3.7 1.6-3.7 3.7 0 1.3 0.6 2.4 1.7 3.1-0.1 0.4-0.1 0.7-0.1 1.1 0 5.3 6.4 9.6 14.4 9.6 7.9 0 14.4-4.3 14.4-9.6 0-0.4 0-0.7-0.1-1.1 1-0.7 1.7-1.9 1.7-3.2zM27.1 3.7c1 0 1.9 0.8 1.9 1.8s-0.8 1.8-1.9 1.8c-1 0-1.9-0.8-1.9-1.8 0.1-1 0.9-1.8 1.9-1.8zM2 17.5c-0.5-0.5-0.9-1.2-0.9-1.9 0-1.4 1.1-2.5 2.5-2.5 0.5 0 1 0.2 1.4 0.4-1.4 1.2-2.4 2.5-3 4zM9.1 18.1c0-1.2 1-2.3 2.3-2.3s2.3 1 2.3 2.3c0 1.2-1 2.3-2.3 2.3-1.2 0-2.3-1-2.3-2.3zM21.3 24.2c-0.1 0.1-1.7 1.7-5.4 1.7s-5.2-1.7-5.2-1.7c-0.2-0.2-0.2-0.6 0.1-0.8 0.2-0.2 0.6-0.2 0.8 0.1 0 0 1.3 1.3 4.4 1.3s4.5-1.4 4.5-1.4c0.2-0.2 0.6-0.2 0.8 0s0.2 0.6 0 0.8zM20.9 20.4c-1.3 0-2.3-1-2.3-2.3 0-1.2 1-2.3 2.3-2.3s2.3 1 2.3 2.3c-0.1 1.3-1.1 2.3-2.3 2.3zM29.9 17.6c-0.5-1.5-1.6-2.9-3.1-4 0.4-0.3 0.9-0.5 1.4-0.5 1.4 0 2.5 1.1 2.5 2.5 0.1 0.8-0.2 1.5-0.8 2z" />
  </Icon>
);

const Twitter = props => (
  <Icon {...props}>
    <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z" />
  </Icon>
);

const Whatsapp = props => (
  <Icon {...props}>
    <path d="M1.2 15.9c0 2.6 0.7 5.2 2 7.4l-2.1 7.7 7.9-2.1c2.2 1.2 4.6 1.8 7.1 1.8v0c8.2 0 14.9-6.7 14.9-14.9 0-4-1.5-7.7-4.4-10.5-2.8-2.8-6.6-4.3-10.5-4.3-8.2 0-14.9 6.7-14.9 14.9zM5.9 22.9l-0.3-0.5c-1.2-2-1.9-4.2-1.9-6.6 0-6.8 5.5-12.4 12.4-12.4 3.3 0 6.4 1.3 8.7 3.6s3.6 5.4 3.6 8.7c0 6.8-5.5 12.4-12.4 12.4v0c-2.2 0-4.4-0.6-6.3-1.7l-0.5-0.3-4.7 1.2 1.4-4.4zM16.1 30.7v0 0c0 0 0 0 0 0z" />
    <path d="M12.3 9.6c-0.3-0.6-0.6-0.6-0.8-0.6s-0.5 0-0.7 0c-0.2 0-0.7 0.1-1 0.5s-1.3 1.3-1.3 3.1c0 1.8 1.3 3.6 1.5 3.8s2.6 4.1 6.3 5.6c3.1 1.2 3.8 1 4.5 0.9s2.2-0.9 2.5-1.8c0.3-0.9 0.3-1.6 0.2-1.8s-0.3-0.2-0.7-0.4c-0.4-0.2-2.2-1.1-2.5-1.2s-0.6-0.2-0.8 0.2c-0.2 0.4-1 1.2-1.2 1.5-0.2 0.2-0.4 0.3-0.8 0.1s-1.6-0.6-3-1.8c-1.1-1-1.9-2.2-2.1-2.6s0-0.6 0.2-0.8c0.2-0.2 0.4-0.4 0.6-0.7 0.2-0.2 0.2-0.4 0.4-0.6 0.1-0.2 0.1-0.5 0-0.7-0.3-0.1-1-1.9-1.3-2.7z" />
  </Icon>
);

const WeChat = props => (
  <Icon {...props} viewBox="0 0 261 225">
    <path d="M181 74c-24 1-45 9-62 25a74 74 0 0 0-23 63l-27-3a17 17 0 0 0-9 1l-26 16 5-21c1-5 1-8-4-11C6 123-6 93 3 61c8-29 29-47 58-56 38-13 82 0 105 31a72 72 0 0 1 15 38zM70 64c0-6-5-11-11-11a11 11 0 0 0-11 10 11 11 0 0 0 10 12 11 11 0 0 0 12-11zm58-11a11 11 0 0 0-11 11 11 11 0 0 0 11 11 11 11 0 1 0 0-22z" />
    <path d="M236 225c-8-4-15-9-23-9s-15 3-23 4c-23 2-45-4-62-21-34-30-29-78 10-103 34-23 84-15 109 16 21 27 18 64-8 86-7 7-10 12-5 21l2 6zm-88-85a9 9 0 1 0 0-18 9 9 0 0 0-9 10 9 9 0 0 0 9 8zm57-18a9 9 0 0 0-9 9 9 9 0 0 0 8 9 9 9 0 0 0 9-8 9 9 0 0 0-8-10z" />
  </Icon>
);

export default {
  Email,
  Facebook,
  FacebookMessenger,
  Pinterest,
  Reddit,
  Twitter,
  Whatsapp,
  WeChat
};
