import React from 'react';
import { Formik, Field } from 'formik';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import { Row, Col } from 'react-flexbox-grid';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Container from '../components/Container';
import RecentNews from '../components/RecentNews';

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
      formMessage:
        'Contact Form Successfully Submitted. You will receive a reply to your message within 24 hours.'
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
      <Layout>
        <SEO
          title="BlueBottle USV Brochure"
          description="For technical specifications of Ocius' BlueBottle USV, contact us below for a PDF Brochure"
        />
        <PageHeader>BlueBottle USV Brochure</PageHeader>
        <section className="page-content">
          <Container>
            <Row>
              <Col className="primary-content" xs={12} md={7} lg={7}>
                <p>
                  For technical specifications of Ocius&apos; BlueBottle USV, contact us below for a
                  PDF Brochure
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
                  onSubmit={({ fullName, email, interest }, actions) => {
                    const endPoint = 'https://c2fpksv8c0.execute-api.us-east-1.amazonaws.com/dev';

                    axios
                      .post(`${endPoint}/contact`, {
                        // HACK: Endpoint expects name property
                        fullName,
                        position: '',
                        company: '',
                        email,
                        phone: '',
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
                        <Field
                          type="text"
                          name="fullName"
                          validate={TechnicalSpecificationForm.validateFullName}
                          placeholder="Full Name (required)"
                        />
                        {errors.fullName && touched.fullName && (
                          <Feedback>{errors.fullName}</Feedback>
                        )}
                      </FieldWrapper>

                      <FieldWrapper>
                        <Field type="text" name="position" placeholder="Position" />
                      </FieldWrapper>
                      <FieldWrapper>
                        <Field
                          type="text"
                          name="company"
                          placeholder="Company or Company Website"
                        />
                      </FieldWrapper>
                      <FieldWrapper>
                        <Field
                          type="email"
                          name="email"
                          validate={TechnicalSpecificationForm.validateEmail}
                          placeholder="Email (required)"
                        />
                        {errors.email && touched.email && <Feedback>{errors.email}</Feedback>}
                      </FieldWrapper>

                      <FieldWrapper>
                        <Field type="tel" name="phone" placeholder="Phone" />
                      </FieldWrapper>
                      <FieldWrapper>
                        <Field
                          name="interest"
                          component="textarea"
                          validate={TechnicalSpecificationForm.validateInterest}
                          cols={40}
                          rows={10}
                          placeholder="Reason for interest"
                        />
                        {errors.interest && touched.interest && (
                          <Feedback>{errors.interest}</Feedback>
                        )}
                      </FieldWrapper>

                      <SubmitButton type="submit" disabled={isSubmitting}>
                        Submit
                      </SubmitButton>
                    </form>
                  )}
                />
              </Col>
              <Col className="secondary-content" xs={12} md={5} lg={4} lgOffset={1}>
                <RecentNews />
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    );
  }
}

TechnicalSpecificationForm.propTypes = {};
TechnicalSpecificationForm.defaultProps = {};

export default TechnicalSpecificationForm;
