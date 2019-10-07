import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { skeletonAnimation } from './shared';

const Text = styled.p`
  position: relative;
  border: none;
  padding: 0;
  box-shadow: none;
  pointer-events: none;
  background: #e5e5e5;
  width: 100%;
  height: 1rem;
  margin-bottom: 0.5rem;

  &:before {
    content: '';
    width: 0%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #bebebe;
    animation: 3000ms ease-in-out ${skeletonAnimation} infinite;
  }
`;

const TextSkeleton = ({ count }) => {
  const loaderRows = () => {
    const rows = [];
    for (let index = 0; index < count; index += 1) {
      rows.push(<Text key={index} className="skeleton" />);
    }
    return rows;
  };

  return <>{loaderRows()}</>;
};

TextSkeleton.propTypes = {
  count: PropTypes.number
};

TextSkeleton.defaultProps = {
  count: 1
};

export default TextSkeleton;
