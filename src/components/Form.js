import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { Field } from 'formik';

export const Feedback = styled.div`
  display: block;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  font-size: 80%;
  color: #dc3545;
  text-align: center;
  text-align: ${(props) => (props.position ? props.position : 'left')};
`;

export const Alert = styled.span`
  display: block;
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;

  ${ifProp(
    'success',
    css`
      color: #155724;
      background-color: #d4edda;
      border-color: #c3e6cb;
    `,
    css`
      color: #721c24;
      background-color: #f8d7da;
      border-color: #f5c6cb;
    `
  )};
`;

export const FormLabel = styled.label`
  text-align: right;
  display: inline-block;
  vertical-align: middle;
  width: calc(20% - 2em);
  margin: 0 2em 0 0;
`;

export const FormField = styled(Field)`
  &.is-invalid,
  &:invalid {
    border-color: #dc3545;
    padding-right: calc(1.5em + 0.75rem);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23dc3545' viewBox='-2 -2 7 7'%3e%3cpath stroke='%23dc3545' d='M0 0l3 3m0-3L0 3'/%3e%3ccircle r='.5'/%3e%3ccircle cx='3' r='.5'/%3e%3ccircle cy='3' r='.5'/%3e%3ccircle cx='3' cy='3' r='.5'/%3e%3c/svg%3E");
    background-repeat: no-repeat;
    background-position: center right calc(0.375em + 0.1875rem);
    background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);

    &:focus {
      border-color: #dc3545;
      box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }
  }
`;

export const TextareaField = styled(FormField)`
  &.is-invalid,
  &:invalid {
    padding-right: calc(1.5em + 0.75rem);
    background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
  }
`;
