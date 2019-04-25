import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { Col } from 'react-flexbox-grid';
import Heading from '../components/Heading';

const SubmitButton = styled.button`
  appearance: none;
  backface-visibility: hidden;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  -moz-box-align: center;
  align-items: center;
  font-weight: 600;
  line-height: 1;
  overflow: hidden;
  padding-left: ${30 / 13}em;
  padding-right: ${30 / 13}em;
  padding-bottom: ${21 / 13}em;
  padding-top: ${26 / 13}em;
  font-size: 13px;
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  vertical-align: middle;
  white-space: nowrap;
  background-color: #001826;
  color: #ffffff;

  &:hover,
  &:active,
  &:focus {
    background-color: #003859;
  }

  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;

const Alert = styled.span`
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

const Feedback = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 0.25rem;
  font-size: 80%;
  color: #dc3545;
`;

const FormField = styled(Field)`
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

const TextareaField = styled(FormField)`
  &.is-invalid,
  &:invalid {
    padding-right: calc(1.5em + 0.75rem);
    background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);
  }
`;

const FieldWrapper = styled.div`
  margin: 0 0 0.625em;
`;

class TechnicalSpecificationForm extends React.Component {
  static validateFullName(value) {
    let error;
    if (!value) {
      error = 'Please enter your name';
    }
    return error;
  }

  static validateInterest(value) {
    let error;
    if (!value) {
      error = 'Please enter reason for interest';
    }
    return error;
  }

  static validateEmail(value) {
    let error;
    if (!value) {
      error = 'Please enter your email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Please provide a valid email';
    }
    return error;
  }

  constructor(props) {
    super(props);
    this.state = {
      submitSuccess: false,
      formMessage: null
    };

    // Bind class methods
    this.handleFormSubmitSuccess = this.handleFormSubmitSuccess.bind(this);
    this.handleFormSubmitError = this.handleFormSubmitError.bind(this);
  }

  handleFormSubmitSuccess() {
    this.setState({
      submitSuccess: true,
      formMessage: 'Your message was sent successfully. You will receive a reply within 24 hours.'
    });
  }

  handleFormSubmitError(error) {
    this.setState({
      submitSuccess: false,
      formMessage: `Unable to submit form. ${error}. Please try again.`
    });
  }

  render() {
    return (
      <Col xs={12} md={12} lg={12} style={{ paddingBottom: '20px' }}>
        <header id="technical" className="centered">
          <Heading level={1} size="huge" underline>
            BlueBottle USV Brochure
          </Heading>
        </header>
        <p>
          For technical specifications of Ocius&apos; BlueBottle USV, contact us below for a PDF
          Brochure
        </p>
        <Formik
          initialValues={{
            fullName: '',
            position: '',
            company: '',
            email: '',
            phone: '',
            interest: ''
          }}
          onSubmit={({ fullName, position, company, email, phone, interest }, actions) => {
            const endPoint = 'https://c2fpksv8c0.execute-api.us-east-1.amazonaws.com/dev';

            axios
              .post(`${endPoint}/contact`, {
                // HACK: Endpoint expects name property
                fullName,
                position,
                company,
                email,
                phone,
                interest
              })
              .then(response => {
                if (response.status === 200) {
                  this.handleFormSubmitSuccess();
                  actions.resetForm();
                } else {
                  this.handleFormSubmitError();
                }
              })
              .catch(error => {
                this.handleFormSubmitError(error);
              });
          }}
          render={({ errors, touched, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              {this.state.formMessage && (
                <Alert success={this.state.submitSuccess}>{this.state.formMessage}</Alert>
              )}
              <FieldWrapper>
                <FormField
                  type="text"
                  name="fullName"
                  className={`form-control ${errors.fullName && touched.fullName && 'is-invalid'}`}
                  validate={TechnicalSpecificationForm.validateFullName}
                  placeholder="Full Name (required)"
                />
                <ErrorMessage name="fullName">{msg => <Feedback>{msg}</Feedback>}</ErrorMessage>
              </FieldWrapper>

              <FieldWrapper>
                <FormField type="text" name="position" placeholder="Position" />
              </FieldWrapper>
              <FieldWrapper>
                <FormField type="text" name="company" placeholder="Company or Company Website" />
              </FieldWrapper>
              <FieldWrapper>
                <FormField
                  type="email"
                  name="email"
                  className={`form-control ${errors.email && touched.email && 'is-invalid'}`}
                  validate={TechnicalSpecificationForm.validateEmail}
                  placeholder="Email (required)"
                />
                <ErrorMessage name="email">{msg => <Feedback>{msg}</Feedback>}</ErrorMessage>
              </FieldWrapper>

              <FieldWrapper>
                <FormField type="tel" name="phone" placeholder="Phone" />
              </FieldWrapper>
              <FieldWrapper>
                <TextareaField
                  name="interest"
                  component="textarea"
                  className={`form-control ${errors.interest && touched.interest && 'is-invalid'}`}
                  validate={TechnicalSpecificationForm.validateInterest}
                  cols={40}
                  rows={10}
                  placeholder="Reason for interest (required)"
                />
                <ErrorMessage name="interest">{msg => <Feedback>{msg}</Feedback>}</ErrorMessage>
              </FieldWrapper>

              <SubmitButton type="submit" disabled={isSubmitting}>
                Submit
              </SubmitButton>
            </form>
          )}
        />
      </Col>
    );
  }
}

TechnicalSpecificationForm.propTypes = {};
TechnicalSpecificationForm.defaultProps = {};

export default TechnicalSpecificationForm;
