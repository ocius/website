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

class TechnicalSpecificationForm extends React.Component {
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
                  validate={({ fullName, email, interest }) => {
                    const errors = {};

                    if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
                      errors.email = true;
                    }

                    if (!interest || !fullName) errors.message = true;

                    return errors;
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
                  render={props => (
                    <form onSubmit={props.handleSubmit}>
                      {this.state.formMessage && (
                        <Alert success={this.state.submitSuccess}>{this.state.formMessage}</Alert>
                      )}
                      <Field type="text" name="fullName" placeholder="Full Name (required)" />
                      <Field type="text" name="position" placeholder="Position" />
                      <Field type="text" name="company" placeholder="Company or Company Website" />
                      <Field type="email" name="email" placeholder="Email (required)" />
                      <Field type="tel" name="phone" placeholder="Phone" />
                      <Field
                        name="interest"
                        component="textarea"
                        cols={40}
                        rows={10}
                        placeholder="Reason for interest"
                      />
                      <button type="submit">Submit</button>
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
