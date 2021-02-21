import styled, { css } from 'styled-components';

export const bxLabel = css`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.6rem;
  letter-spacing: 0.32px;
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
    background: rgba(0, 0, 0, 0.1);
    margin: 30px 0rem 16px;
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
