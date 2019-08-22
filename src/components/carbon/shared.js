import { keyframes, css } from 'styled-components';

export const skeletonAnimation = keyframes`
  0% {
    width: 0%;
    left: 0;
    right: auto;
    opacity: 0.3;
  }

  20% {
    width: 100%;
    left: 0;
    right: auto;
    opacity: 1;
  }
  
  28% {
    width: 100%;
    left: auto;
    right: 0;
  }

  51% {
    width: 0%;
    left: auto;
    right: 0;
  }

  58% {
    width: 0%;
    left: auto;
    right: 0;
  }

  82% {
    width: 100%;
    left: auto;
    right: 0;
  }

  83% {
    width: 100%;
    left: 0;
    right: auto;
  }

  96% {
    width: 0%;
    left: 0;
    right: auto;
  }

  100% {
    width: 0%;
    left: 0;
    right: auto;
    opacity: 0.3;
  }
`;

export const bxLabel = css`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.6rem;
  letter-spacing: 0.32px;
  color: #565656;
  font-weight: 400;
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: 0.8rem;
  pointer-events: none;
`;
