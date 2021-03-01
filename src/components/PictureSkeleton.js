import React from 'react';
import styled from 'styled-components';
import { skeletonAnimation } from './common';

const SkeletonWrapper = styled.div`
  position: relative;
  border: none;
  padding: 0;
  box-shadow: none;
  pointer-events: none;
  background: #565656;
  height: 24rem;
  max-height: 24rem;
  margin-bottom: 1rem;

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

const PictureSkeleton = (props) => <SkeletonWrapper {...props} />;

export default PictureSkeleton;
