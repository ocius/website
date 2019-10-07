import React from 'react';
import styled from 'styled-components';
import { skeletonAnimation } from './shared';

const SkeletonWrapper = styled.div`
  position: relative;
  border: none;
  padding: 0;
  box-shadow: none;
  pointer-events: none;
  background: #e5e5e5;
  height: 4rem;
  max-height: 4rem;

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

const ListBox = styled.div`
  display: inline-block;
  background: none;
  appearance: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  width: 100%;
  position: relative;
  display: inline-flex;
  align-items: center;
  vertical-align: top;
  height: 4rem;
  padding: 0 4.8rem 0 1.6rem;
  cursor: pointer;
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ListBoxLabel = styled.span`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.6rem;
  letter-spacing: 0.32px;
  color: #565656;
  font-weight: 400;
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: 0.8rem;
  user-select: none;
`;

const DropdownSkeleton = props => {
  return (
    <>
      <ListBoxLabel>{props.label}</ListBoxLabel>
      <SkeletonWrapper className="bx--skeleton" {...props}>
        <ListBox role="button" />
      </SkeletonWrapper>
    </>
  );
};

export default DropdownSkeleton;
