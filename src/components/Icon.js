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
  viewBox: PropTypes.string,
  className: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object])
};

Icon.defaultProps = {
  viewBox: '0 0 32 32',
  className: '',
  fill: '',
  width: 0,
  height: 0,
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

const Envira = props => (
  <Icon {...props} viewBox="0 0 448 512">
    <path d="M0 32c477.6 0 366.6 317.3 367.1 366.3L448 480h-26l-70.4-71.2c-39 4.2-124.4 34.5-214.4-37C47 300.3 52 214.7 0 32zm79.7 46c-49.7-23.5-5.2 9.2-5.2 9.2 45.2 31.2 66 73.7 90.2 119.9 31.5 60.2 79 139.7 144.2 167.7 65 28 34.2 12.5 6-8.5-28.2-21.2-68.2-87-91-130.2-31.7-60-61-118.6-144.2-158.1z" />
  </Icon>
);

const Lock = props => (
  <Icon {...props} viewBox="0 0 448 512">
    <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" />
  </Icon>
);

const Compass = props => (
  <Icon {...props} viewBox="0 0 496 512">
    <path d="M225.38 233.37c-12.5 12.5-12.5 32.76 0 45.25 12.49 12.5 32.76 12.5 45.25 0 12.5-12.5 12.5-32.76 0-45.25-12.5-12.49-32.76-12.49-45.25 0zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm126.14 148.05L308.17 300.4a31.938 31.938 0 0 1-15.77 15.77l-144.34 65.97c-16.65 7.61-33.81-9.55-26.2-26.2l65.98-144.35a31.938 31.938 0 0 1 15.77-15.77l144.34-65.97c16.65-7.6 33.8 9.55 26.19 26.2z" />
  </Icon>
);

const Bomb = props => (
  <Icon {...props} viewBox="0 0 512 512">
    <path d="M440.5 88.5l-52 52L415 167c9.4 9.4 9.4 24.6 0 33.9l-17.4 17.4c11.8 26.1 18.4 55.1 18.4 85.6 0 114.9-93.1 208-208 208S0 418.9 0 304 93.1 96 208 96c30.5 0 59.5 6.6 85.6 18.4L311 97c9.4-9.4 24.6-9.4 33.9 0l26.5 26.5 52-52 17.1 17zM500 60h-24c-6.6 0-12 5.4-12 12s5.4 12 12 12h24c6.6 0 12-5.4 12-12s-5.4-12-12-12zM440 0c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12s12-5.4 12-12V12c0-6.6-5.4-12-12-12zm33.9 55l17-17c4.7-4.7 4.7-12.3 0-17-4.7-4.7-12.3-4.7-17 0l-17 17c-4.7 4.7-4.7 12.3 0 17 4.8 4.7 12.4 4.7 17 0zm-67.8 0c4.7 4.7 12.3 4.7 17 0 4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0-4.7 4.7-4.7 12.3 0 17l17 17zm67.8 34c-4.7-4.7-12.3-4.7-17 0-4.7 4.7-4.7 12.3 0 17l17 17c4.7 4.7 12.3 4.7 17 0 4.7-4.7 4.7-12.3 0-17l-17-17zM112 272c0-35.3 28.7-64 64-64 8.8 0 16-7.2 16-16s-7.2-16-16-16c-52.9 0-96 43.1-96 96 0 8.8 7.2 16 16 16s16-7.2 16-16z" />
  </Icon>
);

const Anchor = props => (
  <Icon {...props} viewBox="0 0 576 512">
    <path d="M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z" />
  </Icon>
);

const Link = props => (
  <Icon {...props} viewBox="0 0 512 512">
    <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z" />
  </Icon>
);

const ConnectDevelop = props => (
  <Icon {...props} viewBox="0 0 576 512">
    <path d="M550.5 241l-50.089-86.786c1.071-2.142 1.875-4.553 1.875-7.232 0-8.036-6.696-14.733-14.732-15.001l-55.447-95.893c.536-1.607 1.071-3.214 1.071-4.821 0-8.571-6.964-15.268-15.268-15.268-4.821 0-8.839 2.143-11.786 5.625H299.518C296.839 18.143 292.821 16 288 16s-8.839 2.143-11.518 5.625H170.411C167.464 18.143 163.447 16 158.625 16c-8.303 0-15.268 6.696-15.268 15.268 0 1.607.536 3.482 1.072 4.821l-55.983 97.233c-5.356 2.41-9.107 7.5-9.107 13.661 0 .535.268 1.071.268 1.607l-53.304 92.143c-7.232 1.339-12.59 7.5-12.59 15 0 7.232 5.089 13.393 12.054 15l55.179 95.358c-.536 1.607-.804 2.946-.804 4.821 0 7.232 5.089 13.393 12.054 14.732l51.697 89.732c-.536 1.607-1.071 3.482-1.071 5.357 0 8.571 6.964 15.268 15.268 15.268 4.821 0 8.839-2.143 11.518-5.357h106.875C279.161 493.857 283.447 496 288 496s8.839-2.143 11.518-5.357h107.143c2.678 2.946 6.696 4.821 10.982 4.821 8.571 0 15.268-6.964 15.268-15.268 0-1.607-.267-2.946-.803-4.285l51.697-90.268c6.964-1.339 12.054-7.5 12.054-14.732 0-1.607-.268-3.214-.804-4.821l54.911-95.358c6.964-1.339 12.322-7.5 12.322-15-.002-7.232-5.092-13.393-11.788-14.732zM153.535 450.732l-43.66-75.803h43.66v75.803zm0-83.839h-43.66c-.268-1.071-.804-2.142-1.339-3.214l44.999-47.41v50.624zm0-62.411l-50.357 53.304c-1.339-.536-2.679-1.34-4.018-1.607L43.447 259.75c.535-1.339.535-2.679.535-4.018s0-2.41-.268-3.482l51.965-90c2.679-.268 5.357-1.072 7.768-2.679l50.089 51.965v92.946zm0-102.322l-45.803-47.41c1.339-2.143 2.143-4.821 2.143-7.767 0-.268-.268-.804-.268-1.072l43.928-15.804v72.053zm0-80.625l-43.66 15.804 43.66-75.536v59.732zm326.519 39.108l.804 1.339L445.5 329.125l-63.75-67.232 98.036-101.518.268.268zM291.75 355.107l11.518 11.786H280.5l11.25-11.786zm-.268-11.25l-83.303-85.446 79.553-84.375 83.036 87.589-79.286 82.232zm5.357 5.893l79.286-82.232 67.5 71.25-5.892 28.125H313.714l-16.875-17.143zM410.411 44.393c1.071.536 2.142 1.072 3.482 1.34l57.857 100.714v.536c0 2.946.803 5.624 2.143 7.767L376.393 256l-83.035-87.589L410.411 44.393zm-9.107-2.143L287.732 162.518l-57.054-60.268 166.339-60h4.287zm-123.483 0c2.678 2.678 6.16 4.285 10.179 4.285s7.5-1.607 10.179-4.285h75L224.786 95.821 173.893 42.25h103.928zm-116.249 5.625l1.071-2.142a33.834 33.834 0 0 0 2.679-.804l51.161 53.84-54.911 19.821V47.875zm0 79.286l60.803-21.964 59.732 63.214-79.553 84.107-40.982-42.053v-83.304zm0 92.678L198 257.607l-36.428 38.304v-76.072zm0 87.858l42.053-44.464 82.768 85.982-17.143 17.678H161.572v-59.196zm6.964 162.053c-1.607-1.607-3.482-2.678-5.893-3.482l-1.071-1.607v-89.732h99.91l-91.607 94.821h-1.339zm129.911 0c-2.679-2.41-6.428-4.285-10.447-4.285s-7.767 1.875-10.447 4.285h-96.429l91.607-94.821h38.304l91.607 94.821H298.447zm120-11.786l-4.286 7.5c-1.339.268-2.41.803-3.482 1.339l-89.196-91.875h114.376l-17.412 83.036zm12.856-22.232l12.858-60.803h21.964l-34.822 60.803zm34.822-68.839h-20.357l4.553-21.16 17.143 18.214c-.535.803-1.071 1.874-1.339 2.946zm66.161-107.411l-55.447 96.697c-1.339.535-2.679 1.071-4.018 1.874l-20.625-21.964 34.554-163.928 45.803 79.286c-.267 1.339-.803 2.678-.803 4.285 0 1.339.268 2.411.536 3.75z" />
  </Icon>
);

const Ship = props => (
  <Icon {...props} viewBox="0 0 640 512">
    <path d="M496.616 372.639l70.012-70.012c16.899-16.9 9.942-45.771-12.836-53.092L512 236.102V96c0-17.673-14.327-32-32-32h-64V24c0-13.255-10.745-24-24-24H248c-13.255 0-24 10.745-24 24v40h-64c-17.673 0-32 14.327-32 32v140.102l-41.792 13.433c-22.753 7.313-29.754 36.173-12.836 53.092l70.012 70.012C125.828 416.287 85.587 448 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24 61.023 0 107.499-20.61 143.258-59.396C181.677 487.432 216.021 512 256 512h128c39.979 0 74.323-24.568 88.742-59.396C508.495 491.384 554.968 512 616 512c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24-60.817 0-101.542-31.001-119.384-75.361zM192 128h256v87.531l-118.208-37.995a31.995 31.995 0 0 0-19.584 0L192 215.531V128z" />
  </Icon>
);

const Podcast = props => (
  <Icon {...props} viewBox="0 0 448 512">
    <path d="M267.429 488.563C262.286 507.573 242.858 512 224 512c-18.857 0-38.286-4.427-43.428-23.437C172.927 460.134 160 388.898 160 355.75c0-35.156 31.142-43.75 64-43.75s64 8.594 64 43.75c0 32.949-12.871 104.179-20.571 132.813zM156.867 288.554c-18.693-18.308-29.958-44.173-28.784-72.599 2.054-49.724 42.395-89.956 92.124-91.881C274.862 121.958 320 165.807 320 220c0 26.827-11.064 51.116-28.866 68.552-2.675 2.62-2.401 6.986.628 9.187 9.312 6.765 16.46 15.343 21.234 25.363 1.741 3.654 6.497 4.66 9.449 1.891 28.826-27.043 46.553-65.783 45.511-108.565-1.855-76.206-63.595-138.208-139.793-140.369C146.869 73.753 80 139.215 80 220c0 41.361 17.532 78.7 45.55 104.989 2.953 2.771 7.711 1.77 9.453-1.887 4.774-10.021 11.923-18.598 21.235-25.363 3.029-2.2 3.304-6.566.629-9.185zM224 0C100.204 0 0 100.185 0 224c0 89.992 52.602 165.647 125.739 201.408 4.333 2.118 9.267-1.544 8.535-6.31-2.382-15.512-4.342-30.946-5.406-44.339-.146-1.836-1.149-3.486-2.678-4.512-47.4-31.806-78.564-86.016-78.187-147.347.592-96.237 79.29-174.648 175.529-174.899C320.793 47.747 400 126.797 400 224c0 61.932-32.158 116.49-80.65 147.867-.999 14.037-3.069 30.588-5.624 47.23-.732 4.767 4.203 8.429 8.535 6.31C395.227 389.727 448 314.187 448 224 448 100.205 347.815 0 224 0zm0 160c-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64z" />
  </Icon>
);

const Bolt = props => (
  <Icon {...props} viewBox="0 0 320 512">
    <path d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z" />
  </Icon>
);

const StackOverflow = props => (
  <Icon {...props} viewBox="0 0 384 512">
    <path d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z" />
  </Icon>
);

const Handshake = props => (
  <Icon {...props} viewBox="0 0 640 512">
    <path d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z" />
  </Icon>
);

const OciusGlobe = props => (
  <Icon {...props} viewBox="0 0 13660 16000">
    <path d="M9195 15176c-110-23-267-89-338-144-63-48-146-145-175-203-70-140-78-235-67-754l7-355h348v403c0 371 1 406 19 454 11 29 28 67 39 85 85 137 285 202 453 147 89-29 97-34 157-96 99-101 96-85 100-570l3-423h347l7 188c13 333 9 658-8 752-23 121-74 217-163 305-81 81-137 117-249 162-151 60-331 79-480 49zM1270 15171c-220-31-415-167-517-359-159-300-79-700 182-915 105-87 172-119 328-158 169-41 380-13 536 73 150 83 269 227 327 398 24 70 27 338 5 410-83 277-258 452-530 534-62 19-251 28-331 17zm303-384c34-16 79-48 110-79 199-198 108-534-165-612-137-39-274-3-373 99-82 83-100 129-99 255 0 95 3 110 28 162 48 96 142 171 249 199 61 16 187 3 250-24zM4254 15170c-264-28-448-202-550-520-14-42-18-88-18-200 1-132 3-153 29-230 94-285 255-437 510-484 98-18 467-22 788-9l167 6v337h-405c-424 0-433 1-534 47-50 23-120 91-146 143-12 25-31 78-41 118-18 70-18 74 0 145 36 139 85 207 188 259 90 45 123 48 542 48h396v337l-242 6c-294 8-588 7-684-3zM6710 14450v-730h340v1460h-340v-730zM11600 14974v-165l478 2c492 2 540-1 585-39 21-19 23-89 3-118-8-11-32-26-53-32-59-18-274-39-418-41-283-3-402-36-506-141-97-97-124-174-117-331 8-193 100-298 323-371 69-23 76-23 575-23h505v330l-80-1c-819-6-899-4-949 29-32 21-43 74-24 114 21 45 91 62 328 78 113 8 246 15 295 15 196 1 335 71 428 213 68 105 75 293 15 414-37 75-151 167-241 195-118 36-136 37-644 38h-503v-166zM7509 12783c106-210 108-451 3-673-44-94-69-128-158-215-66-65-95-86-181-131-28-15-31-20-26-53 3-20 11-56 18-81s18-72 25-105 22-94 32-135c11-41 33-124 49-185 93-362 273-892 395-1163 13-29 24-55 24-57 0-23 222-488 300-630 21-38 51-95 66-125 16-30 36-66 45-80s56-92 105-174c48-82 103-172 121-200 19-28 38-58 43-66 24-38 274-396 280-400 3-3 19-23 35-45 17-22 32-42 35-45 4-3 19-23 35-45 17-22 32-42 35-45 4-3 31-37 62-76s63-77 70-85 38-43 68-79c106-125 244-273 390-419 135-135 303-292 420-391 36-30 71-61 79-68 22-21 150-124 200-161 25-19 48-37 51-41 3-3 23-19 45-36 22-16 46-34 52-41 7-6 28-21 48-33 19-12 35-26 35-31s5-9 10-9c6 0 16-5 23-10 7-6 34-27 60-47l48-36 32 30c203 188 486 252 745 167 23-8 44-14 46-14 7 0 156 240 156 251 0 5 3 9 8 9 4 0 12 9 17 20 8 16 101 175 142 245 7 11 15 27 20 35 4 8 19 35 33 60 79 135 360 693 360 715 0 2 12 30 26 62 41 91 51 113 84 198 17 44 35 89 41 100 12 26 63 168 98 275 57 173 84 267 110 390 6 30 18 86 26 123 29 132 27 140-131 434-65 122-68 127-75 133-3 3-18 27-33 54s-43 73-62 103c-18 29-34 57-34 62s-3 11-7 13c-5 2-35 44-68 93-66 99-206 297-215 305-3 3-19 23-36 45-16 22-37 49-46 60s-32 38-50 61c-122 152-210 247-422 460-133 132-273 266-313 298-39 31-73 60-75 64s-32 29-68 57c-36 27-67 52-70 55-41 50-678 480-711 480-5 0-9 4-9 9s-8 11-17 14c-10 3-52 25-93 47-68 38-195 107-238 129-24 13-177 85-242 114-30 13-113 48-185 77-71 28-139 56-150 60-48 20-324 113-410 138-117 35-257 71-350 92-22 5-69 16-105 24-164 37-591 106-660 106h-30l19-37zM6100 12804c-91-9-389-60-520-90-36-8-85-20-110-25-99-23-139-32-220-56-47-13-101-28-120-33-143-40-475-157-600-212-14-6-34-14-45-18-20-8-54-23-169-75-70-31-299-145-371-184-145-79-426-249-461-279-5-5-21-15-34-22-25-13-192-130-200-140-3-3-30-23-60-45s-61-45-68-52-16-13-20-13-21-12-37-28c-17-15-53-45-80-67-28-21-52-42-55-46-3-3-45-40-95-81-88-73-401-379-500-488-46-50-136-155-176-205-10-11-41-49-70-85-30-35-76-94-102-130s-55-74-65-85c-54-64-342-504-342-523 0-2-8-16-19-30-10-15-35-58-56-97-21-38-52-95-68-125-17-30-34-62-38-70-10-17-105-219-143-302-14-31-26-59-26-62s-16-40-35-82c-19-41-35-81-35-88s-3-16-7-20c-4-3-13-23-20-44-29-78-75-210-102-292-61-184-74-226-81-260-4-19-20-80-34-135-29-109-30-110-74-330-33-168-54-305-82-545-13-114-34-570-26-578 4-3 55 0 114 6 59 7 148 17 197 23 50 5 146 16 215 24 220 25 378 38 785 66 375 25 1000 22 1345-7l65-5 40 66c79 131 241 261 376 301l59 18v206c0 114 4 256 10 316 22 250 32 343 45 414 7 41 18 109 25 150s21 118 32 170 24 115 28 140c5 25 21 90 35 145 15 55 35 132 45 170 21 82 54 188 104 336 33 99 45 135 81 229 7 19 23 62 35 95s33 84 46 113 24 57 24 62c0 6 4 18 10 28 5 9 21 44 36 77 75 171 209 445 311 636 59 109 186 324 195 327 4 2 8 8 8 13 0 7 131 218 152 244 4 5 29 42 55 80 52 80 214 307 222 315 4 3 19 23 36 45 16 22 32 42 35 45s19 23 36 45c16 22 34 45 39 51 6 7 26 31 45 55 106 131 238 279 350 393l126 128-8 67c-18 135 12 319 68 419l24 42-23-2c-12 0-38-3-57-4z" />
    <path d="M6185 11948c-21-24-75-83-121-133-45-49-93-103-105-120-13-16-30-37-39-45-17-17-190-233-236-295-16-22-33-45-39-51-5-6-27-36-48-65-20-30-61-88-90-129-47-66-151-219-177-260-5-8-20-31-33-50-12-19-36-57-51-85-16-27-32-52-36-55-3-3-9-12-13-20s-18-33-32-55-28-47-32-55-19-35-33-61c-143-243-315-598-430-884-28-71-55-139-60-150-13-31-48-131-77-220-14-44-31-96-38-115s-18-55-25-80-16-56-20-70-16-54-25-90-21-76-25-90-13-52-20-85-18-80-25-105-18-76-24-115c-7-38-16-92-21-120-35-193-48-290-70-523-6-56-10-204-10-327v-225h28c40-1 186-54 250-92 83-48 215-181 262-261 41-71 74-156 86-220 3-20 11-40 18-45 6-4 47-16 91-28s107-29 140-38c83-23 279-84 345-107 30-11 75-27 100-35s54-19 65-24c11-4 54-21 95-36s104-40 140-57c36-16 88-38 115-49 74-29 459-220 463-230 2-4 8-8 14-8 10 0 211-116 278-160 14-10 79-52 145-96 66-43 122-81 125-84s39-30 80-60 77-57 80-60 34-27 70-55c36-27 67-52 70-55s34-30 70-60c153-129 429-401 559-550 40-47 83-96 95-110s40-47 61-75c22-27 45-55 50-61 6-6 21-27 35-48 21-30 29-36 50-31 114 26 267 28 365 4 120-29 270-111 341-186 18-18 36-33 42-33 14 0 148 92 291 199 63 47 135 101 160 120s48 37 51 40c3 4 28 25 55 46 28 22 52 42 55 45s39 34 80 69c160 135 389 356 588 566 179 190 171 177 135 228-51 73-83 148-112 263-23 87-11 285 24 400 5 17-3 28-47 60-29 21-55 41-58 44s-45 35-95 70c-49 35-92 67-95 70s-23 19-45 36c-22 16-51 39-65 51s-44 36-67 55c-109 87-189 153-203 168-8 8-55 50-105 93-105 90-572 558-666 667-35 41-71 82-80 90-15 15-67 77-177 215-31 39-58 72-62 75-3 3-18 23-35 45-16 22-32 42-35 45-4 3-46 61-95 130s-92 127-95 130-41 59-84 125c-44 66-92 139-108 162-15 23-28 46-28 51 0 6-4 12-8 14-7 3-121 187-131 213-2 6-7 12-10 15-6 5-23 35-65 114-12 22-25 45-29 50-34 45-300 586-349 710-11 28-23 55-27 61-4 5-23 48-41 95s-39 99-45 115c-7 17-21 53-31 80-9 28-21 55-24 60-4 6-13 28-19 50-7 22-16 49-21 60-13 31-57 155-70 200-7 22-17 51-22 65-16 41-101 314-118 380-6 19-21 73-34 120s-30 110-36 140c-7 30-16 66-21 80-8 25-32 125-51 215-5 28-17 76-26 108-14 51-18 57-43 57-63 0-281 56-314 80-5 4-31 19-57 33-59 33-89 57-164 134l-62 63-37-42zM12601 8838c-15-57-101-324-121-373-22-54-28-70-46-120-10-27-24-61-31-75s-13-29-13-33c0-9-9-32-54-130-14-32-26-60-26-62 0-11-119-266-201-430-71-143-179-346-236-445-11-19-34-60-50-90-17-30-61-104-97-164s-66-110-66-113c0-7-55-88-62-91-5-2-8-8-8-13 0-12-51-91-65-101-8-6 14-35 75-98 27-27 94-158 112-215 38-128 46-248 24-365-8-41-14-75-13-76s38-16 82-32c128-49 272-87 416-111 84-14 387-14 465-1 32 6 82 15 109 20 28 5 71 12 97 15l47 6 9 52c13 70 39 265 54 412 16 161 16 847 0 1025-7 74-20 182-28 240s-19 137-25 175c-15 105-30 193-44 260-7 33-18 87-25 120-12 58-35 147-85 340-13 50-35 126-50 170s-35 107-45 140c-33 106-67 196-76 205-7 7-15-8-23-42zM2025 6584c-93-7-233-18-310-24-183-14-333-28-475-45-63-8-155-18-205-24-49-6-136-16-192-22l-103-12v-79c0-92 29-373 61-598 19-129 87-459 125-600 83-312 76-296 159-352 39-26 75-47 82-47 6-1 13-5 15-9 4-11 153-98 548-321 63-36 643-324 740-368 36-17 121-54 190-83s148-63 177-76c28-13 58-24 65-24 8 0 18-4 23-8 6-5 44-21 85-36 77-28 93-35 145-56 17-7 68-25 115-41 47-15 123-41 170-57 157-54 411-131 500-152 19-4 87-21 150-38 63-16 129-32 145-35 17-4 84-18 150-32s147-30 180-36c105-17 169-27 215-34 25-3 88-12 140-20 141-21 296-35 376-35h71l18 58c10 31 34 89 55 128l37 70-59 70c-73 85-156 184-171 204-38 48-94 117-105 128-6 8-26 35-44 60-18 26-38 53-45 60s-13 16-13 20-12 21-26 37c-24 28-97 131-136 193-9 15-21 32-25 37-20 24-113 177-113 185 0 6-4 10-10 10-5 0-10 4-10 10 0 5-15 33-33 62-19 29-37 60-41 68-3 8-25 47-47 85-35 61-196 385-219 440-4 11-18 42-29 68-12 26-29 67-37 90-9 23-20 51-25 62-20 48-57 146-84 228l-29 87h-66c-57 0-150 18-245 48-135 42-295 174-381 313-65 107-114 277-114 395v51l-77 7c-139 11-1088 4-1268-10z" />
    <path d="M4840 6308c-25-101-111-238-198-320-43-41-71-61-154-111-24-15-26-19-16-49 35-105 138-369 181-463 101-224 322-637 372-695 7-8 14-20 16-25 7-17 162-249 181-269 10-11 18-23 18-27s6-14 13-21 31-38 52-68 41-57 44-60 19-23 36-45c16-22 32-42 35-45s19-23 36-45c16-22 39-51 52-65 12-14 48-57 79-95 32-39 69-80 83-92l26-21 60 28c125 60 181 73 319 78 84 3 149 0 185-9 233-53 427-207 521-414 12-27 23-51 24-52 1-2 33 4 71 12 38 9 92 20 119 26 105 23 151 35 310 80 57 17 273 87 321 105 41 15 42 15 33 52-19 80-6 238 29 347 30 98 125 245 198 310 39 34 41 43 17 71-10 10-36 42-58 69-21 28-42 52-45 55s-25 30-50 60c-106 130-397 426-530 540-162 139-264 221-355 285-38 27-72 52-75 55s-48 33-100 68c-52 34-99 65-105 69-25 19-95 63-101 63-3 0-18 8-32 19-49 34-290 165-402 218-152 73-255 118-380 168-52 20-104 41-115 46-31 14-273 98-345 120-115 35-344 99-354 99-1 0-8-24-16-52zM11524 5521c-80-77-123-107-200-142-166-75-300-94-454-64-95 18-125 27-180 54-24 11-49 21-55 21s-42-35-80-77c-242-270-583-601-765-744-30-24-62-51-70-59-8-9-33-29-55-46-22-16-44-34-50-40-5-6-35-30-65-52s-77-58-105-79c-27-21-111-81-185-133-74-51-138-96-142-99-3-3 2-37 12-76 32-121 25-282-18-422-24-76-114-223-166-271l-25-23 20-47c11-26 27-63 36-82 23-53 66-163 127-320 41-108 130-378 166-505 28-101 63-228 76-280 8-33 20-77 26-97l11-38h70c119 0 249-43 382-125 42-26 192-179 200-204 3-12 11-21 16-21s9-6 9-12c0-7 7-21 14-31 13-17 19-16 93 29 43 26 80 50 83 54s16 13 29 20c29 15 191 129 209 147 8 7 23 18 34 24s27 17 36 24c9 8 62 49 117 91 55 43 102 81 105 85 3 3 34 30 70 60 36 29 87 74 115 99 27 25 79 72 115 105 90 82 230 224 325 330 44 49 89 99 101 111 11 12 38 44 60 70 21 27 46 56 54 64s28 33 45 55c16 22 32 42 35 45 4 3 40 50 81 105s80 106 87 113c6 7 12 17 12 21s8 16 18 27c44 48 288 435 340 539 9 17 18 32 22 35 8 7 240 473 240 483 0 5 12 34 26 65 15 31 30 66 34 77 9 23 37 91 50 120 5 11 16 40 24 65s26 77 41 115c23 61 79 237 105 330 60 218 88 329 95 377l7 46-63-13c-35-7-94-18-130-24-85-14-392-14-478 0-178 29-419 95-577 157l-50 20-60-57zM1180 4407c0-17 100-236 199-437 96-192 139-270 264-475 38-63 208-318 243-365 22-30 67-91 100-135 247-334 718-810 1074-1087 63-49 124-96 135-105 40-34 254-182 336-233 46-29 96-61 111-71 85-59 296-175 503-277 94-46 178-87 188-93 9-5 50-22 90-38 39-16 86-36 102-45 17-9 34-16 38-16 5 0 23-6 40-14 40-17 94-38 172-66 33-12 76-28 95-36 19-7 67-23 105-35 39-11 106-32 150-45s96-28 115-33c178-48 242-63 355-86 72-14 148-30 170-35 70-15 272-44 455-64 492-55 972-47 1500 25 144 20 309 50 540 99 60 12 271 69 363 98 99 30 93 18 62 127-10 35-18 106-20 170-3 93-6 111-21 120-10 5-23 14-28 18-6 5-56 35-111 68s-140 84-189 114-91 55-93 55-19 11-37 25-35 25-39 25c-5 0-261 158-309 191-15 11-30 19-32 19-3 0-62 36-131 80s-129 80-134 80-11 3-13 8c-3 8-84 62-93 62-6 0-88 52-95 61-3 3-29 19-57 35-29 16-53 32-53 37 0 4-4 7-10 7-5 0-56 30-112 68-57 37-107 69-113 71-5 2-35 21-65 41s-95 64-145 96c-49 32-94 62-100 67-34 25-83 58-102 68s-26 9-40-4c-31-27-145-82-223-108-65-21-94-24-220-24-122 1-156 4-216 23-190 59-351 189-442 359-30 56-72 172-72 200 0 22-4 23-67 23-139 0-620 60-843 105-36 7-90 18-120 24-183 36-269 56-400 90-105 28-238 64-260 71-14 4-65 20-115 35-124 38-346 111-430 141-132 48-180 66-200 75-11 4-56 22-100 39s-89 35-100 40-45 19-75 31-78 32-107 45c-28 13-54 24-57 24-5 0-85 36-211 95-169 79-276 129-315 150-96 49-297 154-340 177-25 14-81 44-125 68s-97 54-117 67c-21 12-42 23-48 23-5 0-10 5-10 10 0 6-6 10-14 10s-21 6-28 13-28 20-45 28c-18 7-33 17-33 21 0 5-7 8-15 8s-15-1-15-3zM7755 3380c-42-18-163-59-235-81-41-12-100-30-130-40-30-9-86-25-125-34-38-9-90-22-115-30-25-7-72-18-105-25s-73-16-90-20c-16-5-47-11-67-15-37-6-38-7-38-47 0-61-37-194-72-257-22-38-15-52 36-78 17-9 33-19 36-22s46-32 95-65c50-32 114-75 144-95s59-38 65-41c12-6 101-63 188-122 31-21 59-38 63-38 3 0 21-11 39-25s38-25 44-25c7 0 12-4 12-8 0-5 10-14 23-20 12-6 45-25 72-42 28-17 60-36 73-42 12-6 22-15 22-20 0-4 4-8 10-8 5 0 65-35 133-77 157-99 155-98 202-126 22-13 81-50 130-81 50-31 114-71 143-89 30-17 68-41 86-52s68-42 112-68c43-27 118-72 166-102l88-53 44 61c24 34 64 80 88 103 47 45 141 114 154 114 5 0 17 7 27 14 20 15 21 8-26 186-52 197-163 553-222 710-27 73-47 123-61 157-8 17-14 34-14 38 0 3-11 31-25 61s-25 57-25 60c0 17-34 73-41 68-64-39-341-52-454-20-81 22-177 70-255 127-57 42-91 75-157 156-14 16-23 19-38 13z" />
  </Icon>
);

const ChevronLeft = props => (
  <Icon {...props}>
    <path
      d="M28.8 6.2l-12.8 12.8-12.8-12.8-3.2 3.2 16 16.4 16-16.4z"
      transform="rotate(90 16 16)"
    />
  </Icon>
);

const ChevronRight = props => (
  <Icon {...props}>
    <path
      d="M28.8 6.2l-12.8 12.8-12.8-12.8-3.2 3.2 16 16.4 16-16.4z"
      transform="rotate(-90 16 16)"
    />
  </Icon>
);

const ArrowLeft = props => (
  <Icon {...props}>
    <path d="M8.4 14.667l6.933-7.467-2-1.867-8.933 9.733c-0.533 0.533-0.533 1.333 0 1.867l8.933 9.733 2-1.867-6.933-7.467h19.6v-2.667h-19.6z" />
  </Icon>
);

const ArrowRight = props => (
  <Icon {...props}>
    <path
      d="M8.4 14.667l6.933-7.467-2-1.867-8.933 9.733c-0.533 0.533-0.533 1.333 0 1.867l8.933 9.733 2-1.867-6.933-7.467h19.6v-2.667h-19.6z"
      transform="rotate(180 16 16)"
    />
  </Icon>
);

const News = props => (
  <Icon {...props} viewBox="0 0 576 512">
    <path d="M552 64H112c-20.858 0-38.643 13.377-45.248 32H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h496c13.255 0 24-10.745 24-24V88c0-13.255-10.745-24-24-24zM48 392V144h16v248c0 4.411-3.589 8-8 8s-8-3.589-8-8zm480 8H111.422c.374-2.614.578-5.283.578-8V112h416v288zM172 280h136c6.627 0 12-5.373 12-12v-96c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v96c0 6.627 5.373 12 12 12zm28-80h80v40h-80v-40zm-40 140v-24c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H172c-6.627 0-12-5.373-12-12zm192 0v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-144v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 72v-24c0-6.627 5.373-12 12-12h104c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z" />
  </Icon>
);

const Home = props => (
  <Icon {...props} viewBox="0 0 576 512">
    <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
  </Icon>
);

const Idea = props => (
  <Icon {...props} viewBox="0 0 352 512">
    <path d="M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z" />
  </Icon>
);

const Contact = props => (
  <Icon {...props} viewBox="0 0 512 512">
    <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
  </Icon>
);

const Drone = props => (
  <Icon {...props} viewBox="0 0 640 512">
    <path d="M496.616 372.639l70.012-70.012c16.899-16.9 9.942-45.771-12.836-53.092L512 236.102V96c0-17.673-14.327-32-32-32h-64V24c0-13.255-10.745-24-24-24H248c-13.255 0-24 10.745-24 24v40h-64c-17.673 0-32 14.327-32 32v140.102l-41.792 13.433c-22.753 7.313-29.754 36.173-12.836 53.092l70.012 70.012C125.828 416.287 85.587 448 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24 61.023 0 107.499-20.61 143.258-59.396C181.677 487.432 216.021 512 256 512h128c39.979 0 74.323-24.568 88.742-59.396C508.495 491.384 554.968 512 616 512c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24-60.817 0-101.542-31.001-119.384-75.361zM192 128h256v87.531l-118.208-37.995a31.995 31.995 0 0 0-19.584 0L192 215.531V128z" />
  </Icon>
);

const Globe = props => (
  <Icon {...props} viewBox="0 0 496 512">
    <path
      fill="currentColor"
      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm179.3 160h-67.2c-6.7-36.5-17.5-68.8-31.2-94.7 42.9 19 77.7 52.7 98.4 94.7zM248 56c18.6 0 48.6 41.2 63.2 112H184.8C199.4 97.2 229.4 56 248 56zM48 256c0-13.7 1.4-27.1 4-40h77.7c-1 13.1-1.7 26.3-1.7 40s.7 26.9 1.7 40H52c-2.6-12.9-4-26.3-4-40zm20.7 88h67.2c6.7 36.5 17.5 68.8 31.2 94.7-42.9-19-77.7-52.7-98.4-94.7zm67.2-176H68.7c20.7-42 55.5-75.7 98.4-94.7-13.7 25.9-24.5 58.2-31.2 94.7zM248 456c-18.6 0-48.6-41.2-63.2-112h126.5c-14.7 70.8-44.7 112-63.3 112zm70.1-160H177.9c-1.1-12.8-1.9-26-1.9-40s.8-27.2 1.9-40h140.3c1.1 12.8 1.9 26 1.9 40s-.9 27.2-2 40zm10.8 142.7c13.7-25.9 24.4-58.2 31.2-94.7h67.2c-20.7 42-55.5 75.7-98.4 94.7zM366.3 296c1-13.1 1.7-26.3 1.7-40s-.7-26.9-1.7-40H444c2.6 12.9 4 26.3 4 40s-1.4 27.1-4 40h-77.7z"
      className=""
    />
  </Icon>
);

const Sliders = props => (
  <Icon {...props} viewBox="0 0 512 512">
    <path
      fill="#777777"
      d="M496 64H288v64h208a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zM16 128h176V64H16A16 16 0 0 0 0 80v32a16 16 0 0 0 16 16zm0 160h304v-64H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm480-64h-80v64h80a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 160H160v64h336a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM0 400v32a16 16 0 0 0 16 16h48v-64H16a16 16 0 0 0-16 16z"
    />
    <path
      fill="currentColor"
      d="M272 32h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm128 160h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16zM144 352h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16z"
    />
  </Icon>
);

const Download = props => (
  <Icon {...props} viewBox="0 0 512 512">
    <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z" />
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
  WeChat,
  Envira,
  Lock,
  Compass,
  Bomb,
  Anchor,
  Link,
  ConnectDevelop,
  Ship,
  Podcast,
  Bolt,
  StackOverflow,
  Handshake,
  OciusGlobe,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  News,
  Home,
  Idea,
  Contact,
  Drone,
  Globe,
  Sliders,
  Download
};
