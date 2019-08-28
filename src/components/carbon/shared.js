import styled, { keyframes, css } from 'styled-components';

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

export const FormWrapper = styled.div`
  padding: 1.5rem;
  flex: 1 1;

  hr {
    border: 0;
    height: 1px;
    background: #8c8c8c;
    margin: 32px 0rem 8px;
  }

  .bx--dropdown__wrapper--inline .bx--label {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.8rem;
    letter-spacing: 0.16px;
    margin: 0 0.8rem 0 0;
  }

  .bx--label {
    ${bxLabel}
  }
`;

export const FormItem = styled.div`
  font-size: 1.5rem;
  margin: 0 0 1rem;
`;
