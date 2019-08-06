import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { switchProp } from 'styled-tools';
import { STATUSES } from './constants';

const LineWrapper = styled.div`
  width: 100%;
  border-radius: 100px;
  background-color: #efefef;
  vertical-align: middle;
  overflow: hidden;

  progress {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
    left: -777px;
  }
`;

const ActiveAnim = keyframes`
  0% {
    width: 0;
    opacity: .1
  }

  20% {
    width: 0;
    opacity: .5
  }

  to {
    width: 100%;
    opacity: 0
  }
`;

const LineInner = styled.div`
  position: relative;
  min-height: 10px;
  border-radius: 100px;
  transition: width 0.3s ease;
  // hack to smooth UI
  // transform: translateZ(0);

  ${switchProp('status', {
    active: css`
      &:before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 10px;
        background: #fff;
        animation: ${ActiveAnim} 2s cubic-bezier(0.25, 1, 0.6, 1) infinite;
        content: '';
        opacity: 0;
      }
    `
  })}
`;

function Line({ percent, className, status, background, trailColor }) {
  const progressStyle = {
    width: `${percent}%`,
    backgroundColor: background
  };
  const trailStyle = {
    backgroundColor: trailColor
  };

  return (
    <LineWrapper className={className} style={trailStyle}>
      <progress value={percent} max={100} />
      <LineInner status={status} style={progressStyle} />
    </LineWrapper>
  );
}

Line.propTypes = {
  percent: PropTypes.number,
  className: PropTypes.string,
  status: PropTypes.oneOf([STATUSES.ACTIVE, STATUSES.SUCCESS, STATUSES.DEFAULT, STATUSES.ERROR]),
  background: PropTypes.string,
  trailColor: PropTypes.string
};

Line.defaultProps = {
  percent: 0,
  className: '',
  status: STATUSES.SUCCESS,
  background: '',
  trailColor: ''
};

export default Line;
