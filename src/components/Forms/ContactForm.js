import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import axios from 'axios';
import styled from 'styled-components';
import { Feedback, Alert, FormField, TextareaField } from '../Form';
import Button from '../Button';

const FieldWrapper = styled.div`
  margin: 0 0 1.2em;
`;

class ContactForm extends React.Component {
  static validateName(value) {
    let error;
    if (!value) {
      error = 'Please enter your name';
    }
    return error;
  }

  static validateMessage(value) {
    let error;
    if (!value) {
      error = 'Please enter your message';
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
        <Formik
          initialValues={{
            name: '',
            company: '',
            email: '',
            message: '',
          }}
          onSubmit={({ name, company, email, message }, actions) => {
            const endPoint = 'https://qf498rjqnj.execute-api.us-east-1.amazonaws.com';

            axios
              .post(`${endPoint}/Prod`, {
                // HACK: Endpoint expects name property
                name,
                company,
                email,
                message,
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
            <form onSubmit={handleSubmit}>
              {this.state.formMessage && (
                <Alert success={this.state.submitSuccess}>{this.state.formMessage}</Alert>
              )}
              <FieldWrapper>
                <FormField
                  type="text"
                  id="name"
                  name="name"
                  className={`form-control ${errors.name && touched.name && 'is-invalid'}`}
                  validate={ContactForm.validateName}
                  placeholder="Name (required)"
                />
                <ErrorMessage name="name">{(msg) => <Feedback>{msg}</Feedback>}</ErrorMessage>
              </FieldWrapper>

              <FieldWrapper>
                <FormField
                  type="email"
                  id="email"
                  name="email"
                  className={`form-control ${errors.email && touched.email && 'is-invalid'}`}
                  validate={ContactForm.validateEmail}
                  placeholder="Email (required)"
                />
                <ErrorMessage name="email">{(msg) => <Feedback>{msg}</Feedback>}</ErrorMessage>
              </FieldWrapper>

              <FieldWrapper>
                <FormField
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company or Company Website"
                />
              </FieldWrapper>

              <FieldWrapper>
                <TextareaField
                  id="message"
                  name="message"
                  component="textarea"
                  className={`form-control ${errors.message && touched.message && 'is-invalid'}`}
                  validate={ContactForm.validateMessage}
                  cols={40}
                  rows={10}
                  placeholder="Message (required)"
                />
                <ErrorMessage name="message">{(msg) => <Feedback>{msg}</Feedback>}</ErrorMessage>
              </FieldWrapper>

              <Button type="submit" size="small" color="blue" disabled={isSubmitting}>
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </>
    );
  }
}

ContactForm.propTypes = {};
ContactForm.defaultProps = {};

export default ContactForm;
