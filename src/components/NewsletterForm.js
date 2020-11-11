import React, { useState } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Formik, ErrorMessage } from 'formik';
import { Col, Row } from 'react-flexbox-grid';
import BackgroundImage from 'gatsby-background-image';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Container from './Container';
import Heading from './Heading';
import Button from './Button';
import { Feedback, Alert, FormField } from './Form';
import mq from '../common/mq';

const NewsletterContainer = styled(BackgroundImage)`
  color: #ffffff;
  position: relative;
  overflow: hidden;
  padding: 3.2rem 0;
  background-attachment: fixed;

  @media (max-width: ${mq.max[720]}) {
    max-height: 592px;
    background-attachment: scroll;
  }
`;

const Field = styled(FormField)`
  background-color: white !important;
`;

/*
  The following code uses HTML and CSS to fit labels and inputs within various width containers,
  including the viewport. The layout regions adjust their size as the viewport is adjusted. The labels
  and inputs subsequently adjust their size to fit within the layout region containers.

  The zoom level can be increased to 400% without requiring horizontal scrolling.
 */
const FormGroup = styled.div`
  display: flex;
  flex-flow: row wrap;

  [class*='form-col'] {
    flex: 0 1 100%;
  }

  [class*='form-col'] + [class*='form-col'] {
    padding-top: 1em;
  }

  @media (min-width: 576px) {
    [class*='form-col'] + [class*='form-col'] {
      padding: 0;
    }

    .form-col-4 {
      flex: 0 0 33.33333%;
      max-width: 33.33333%;
    }

    .form-col-8 {
      flex: 0 0 66.66667%;
      max-width: 66.66667%;
    }
  }
`;

const NewsletterForm = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = 'Please enter your email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Please provide a valid email';
    }
    return error;
  };

  const handleFormSubmitSuccess = () => {
    setSubmitSuccess(true);
    setFormMessage(
      'You have successfully subscribed to the newsletter. Thank you for your subscription.'
    );
  };

  const handleFormSubmitError = (error) => {
    setSubmitSuccess(false);
    setFormMessage(`Oops, unexpected error occurred: ${error}`);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
      }}
      onSubmit={({ email, name }, actions) => {
        // Honeypot for bots
        if (name) {
          handleFormSubmitError('Automatic subscriptions are prohibited');
          return;
        }

        addToMailchimp(email)
          .then((data) => {
            if (data.result === 'success') {
              handleFormSubmitSuccess();
              actions.resetForm();
            } else {
              handleFormSubmitError(data.msg);
            }
          })
          .catch((error) => {
            // Errors in here are client side
            // Mailchimp always returns a 200
            handleFormSubmitError(error);
          });
      }}
    >
      {({ errors, touched, handleSubmit, isSubmitting }) => (
        <>
          <StaticQuery
            query={graphql`
              query {
                NewsletterBackground: file(relativePath: { eq: "images/newsletter-bg.jpg" }) {
                  childImageSharp {
                    fluid(quality: 100, maxWidth: 1920) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            `}
            render={(data) => {
              // Set ImageData.
              const imageData = data.NewsletterBackground.childImageSharp.fluid;
              return (
                <NewsletterContainer Tag="section" fluid={imageData}>
                  <Container className="centered">
                    <Row>
                      <Col xs={12} md={6} mdOffset={3}>
                        <form onSubmit={handleSubmit}>
                          <Heading level={3} size="large" weight="thick" color="white">
                            Sign up to
                            <br />
                            our newsletter
                          </Heading>
                          <p>
                            By submitting your email address below, you agree to receive email
                            updates on Ocius Technologies and their latest projects.
                          </p>
                          <FormGroup>
                            {/* Real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                            <div
                              aria-hidden="true"
                              style={{ position: 'absolute', left: '-5000px' }}
                            >
                              <Field type="text" name="name" tabIndex="-1" />
                            </div>

                            <div className="form-col-8">
                              <Field
                                className={`form-control ${
                                  errors.email && touched.email && 'is-invalid'
                                }`}
                                validate={validateEmail}
                                placeholder="Email address"
                                name="email"
                                type="email"
                              />
                              <ErrorMessage name="email">
                                {(msg) => <Feedback>{msg}</Feedback>}
                              </ErrorMessage>
                            </div>
                            <div className="form-col-4">
                              <Button
                                type="submit"
                                size="tiny"
                                color="blue"
                                disabled={isSubmitting}
                              >
                                Subscribe
                              </Button>
                            </div>
                          </FormGroup>
                        </form>
                        {formMessage && (
                          <Alert
                            success={submitSuccess}
                            dangerouslySetInnerHTML={{
                              __html: formMessage,
                            }}
                          />
                        )}
                      </Col>
                    </Row>
                  </Container>
                </NewsletterContainer>
              );
            }}
          />
        </>
      )}
    </Formik>
  );
};

export default NewsletterForm;
