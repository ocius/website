import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import axios from 'axios';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import { Feedback, Alert, FormField, FormLabel, TextareaField } from '../Form';
import Heading from '../Heading';
import Button from '../Button';
import { Spacing } from '../common';

const FieldWrapper = styled.div`
  margin: 0 0 1.2em;
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
      formMessage: null,
    };

    // Bind class methods
    this.handleFormSubmitSuccess = this.handleFormSubmitSuccess.bind(this);
    this.handleFormSubmitError = this.handleFormSubmitError.bind(this);
  }

  handleFormSubmitSuccess() {
    this.setState({
      submitSuccess: true,
      formMessage: 'Your message was sent successfully. You will receive a reply within 24 hours.',
    });
  }

  handleFormSubmitError(error) {
    this.setState({
      submitSuccess: false,
      formMessage: `Unable to submit form. ${error}. Please try again.`,
    });
  }

  render() {
    return (
      <>
        <Row id="technical" className="centered">
          <Col xs={12} md={8} lg={8} mdOffset={2}>
            <Spacing $value="80px" />
            <Heading level={2} size="large" underline="center">
              BlueBottle USV Brochure
            </Heading>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={8} lg={8} mdOffset={2} style={{ paddingBottom: '20px' }}>
            <p className="centered" style={{ maxWidth: 400, margin: '0 auto 2em' }}>
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
                interest: '',
              }}
              onSubmit={({ fullName, position, company, email, phone, interest }, actions) => {
                const endPoint = 'https://qf498rjqnj.execute-api.us-east-1.amazonaws.com';

                axios
                  .post(`${endPoint}/Prod`, {
                    // HACK: Endpoint expects name property
                    fullName,
                    position,
                    company,
                    email,
                    phone,
                    interest,
                  })
                  .then((response) => {
                    if (response.status === 200) {
                      this.handleFormSubmitSuccess();
                      actions.resetForm();
                    } else {
                      this.handleFormSubmitError();
                    }
                  })
                  .catch((error) => {
                    this.handleFormSubmitError(error);
                  });
              }}
            >
              {({ errors, touched, handleSubmit, isSubmitting }) => (
                <form className="form-aligned" onSubmit={handleSubmit}>
                  {this.state.formMessage && (
                    <Alert success={this.state.submitSuccess}>{this.state.formMessage}</Alert>
                  )}
                  <FieldWrapper>
                    <FormLabel htmlFor="fullName">Name:</FormLabel>
                    <FormField
                      type="text"
                      id="fullName"
                      name="fullName"
                      className={`form-control ${
                        errors.fullName && touched.fullName && 'is-invalid'
                      }`}
                      validate={TechnicalSpecificationForm.validateFullName}
                      placeholder="Full Name (required)"
                    />
                    <ErrorMessage name="fullName">
                      {(msg) => <Feedback position="center">{msg}</Feedback>}
                    </ErrorMessage>
                  </FieldWrapper>

                  <FieldWrapper>
                    <FormLabel htmlFor="company">Company:</FormLabel>
                    <FormField
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Company or Company Website"
                    />
                  </FieldWrapper>

                  <FieldWrapper>
                    <FormLabel htmlFor="position">Position:</FormLabel>
                    <FormField type="text" id="position" name="position" placeholder="Position" />
                  </FieldWrapper>

                  <FieldWrapper>
                    <FormLabel htmlFor="email">Email:</FormLabel>
                    <FormField
                      type="email"
                      id="email"
                      name="email"
                      className={`form-control ${errors.email && touched.email && 'is-invalid'}`}
                      validate={TechnicalSpecificationForm.validateEmail}
                      placeholder="Email (required)"
                    />
                    <ErrorMessage name="email">
                      {(msg) => <Feedback position="center">{msg}</Feedback>}
                    </ErrorMessage>
                  </FieldWrapper>

                  <FieldWrapper>
                    <FormLabel htmlFor="phone">Phone:</FormLabel>
                    <FormField type="tel" id="phone" name="phone" placeholder="Phone" />
                  </FieldWrapper>

                  <FieldWrapper>
                    <FormLabel htmlFor="interest">Reason for interest:</FormLabel>
                    <TextareaField
                      id="interest"
                      name="interest"
                      component="textarea"
                      className={`form-control ${
                        errors.interest && touched.interest && 'is-invalid'
                      }`}
                      validate={TechnicalSpecificationForm.validateInterest}
                      cols={40}
                      rows={10}
                      placeholder="Reason for interest (required)"
                    />
                    <ErrorMessage name="interest">
                      {(msg) => <Feedback position="center">{msg}</Feedback>}
                    </ErrorMessage>
                  </FieldWrapper>

                  <Button
                    style={{ margin: '0 auto', display: 'block' }}
                    type="submit"
                    size="small"
                    color="blue"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </form>
              )}
            </Formik>
          </Col>
        </Row>
      </>
    );
  }
}

TechnicalSpecificationForm.propTypes = {};
TechnicalSpecificationForm.defaultProps = {};

export default TechnicalSpecificationForm;
