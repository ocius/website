import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Col, Row } from 'react-flexbox-grid';
import BackgroundImage from 'gatsby-background-image';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Container from './Container';
import Heading from './Heading';
import Button from './Button';
import MaskOverlay from './MaskOverlay';
import { Feedback, Alert, FormField } from './Form';
import mq from '../common/mq';

const NewsletterContainer = styled(BackgroundImage)`
  color: #ffffff;
  position: relative;
  overflow: hidden;
  padding: 12rem 0;

  @media (max-width: ${mq.max[1024]}) {
    padding: 8rem 0;
  }

  @media (max-width: ${mq.max[768]}) {
    max-height: 592px;
    padding: 6rem 0;
  }

  @media (min-width: ${mq.min[1024]}) {
    :before,
    :after {
      background-attachment: fixed;
    }
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

const NewsletterForm = ({ topMaskBackgroundColor, bottomMaskBackgroundColor }) => {
  const { register, handleSubmit, errors, reset, formState } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      name: '',
    },
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const { isSubmitting, isValid } = formState;

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

  const onSubmit = ({ email, name }) => {
    if (isValid) {
      // Honeypot for bots
      if (name) {
        handleFormSubmitError('Automatic subscriptions are prohibited');
        return;
      }

      addToMailchimp(email)
        .then((data) => {
          if (data.result === 'success') {
            handleFormSubmitSuccess();
            reset();
          } else {
            handleFormSubmitError(data.msg);
          }
        })
        .catch((error) => {
          // Errors in here are client side
          // Mailchimp always returns a 200
          handleFormSubmitError(error);
        });
    }
  };

  return (
    <StaticQuery
      query={graphql`
        query {
          NewsletterBackground: file(relativePath: { eq: "images/newsletter-bg.jpg" }) {
            childImageSharp {
              fluid(quality: 85, maxWidth: 1920) {
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
            <MaskOverlay flipped position="top" color={topMaskBackgroundColor} />
            <Container className="centered">
              <Row>
                <Col xs={12} md={8} mdOffset={2} lg={6} lgOffset={3}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Heading
                      level={3}
                      size="large"
                      weight="thick"
                      color="white"
                      style={{ marginTop: 0 }}
                    >
                      Sign up to
                      <br />
                      our newsletter
                    </Heading>
                    <p>
                      By submitting your email address below, you agree to receive email updates on
                      Ocius Technologies and their latest projects.
                    </p>
                    <FormGroup>
                      {/* Real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                      <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                        <Field type="text" name="name" tabIndex="-1" ref={register} />
                      </div>

                      <div className="form-col-8">
                        <Field
                          className={`form-control ${errors.email && 'is-invalid'}`}
                          placeholder="Email address"
                          name="email"
                          type="email"
                          ref={register({
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          })}
                        />
                        {/* show an error when an invalid email provided */}
                        {errors.email && <Feedback>Please provide a valid email</Feedback>}
                      </div>
                      <div className="form-col-4">
                        <Button type="submit" size="tiny" color="blue" disabled={isSubmitting}>
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
            <MaskOverlay flipped color={bottomMaskBackgroundColor} />
          </NewsletterContainer>
        );
      }}
    />
  );
};

NewsletterForm.propTypes = {
  topMaskBackgroundColor: PropTypes.string,
  bottomMaskBackgroundColor: PropTypes.string,
};

NewsletterForm.defaultProps = {
  topMaskBackgroundColor: undefined,
  bottomMaskBackgroundColor: undefined,
};

export default NewsletterForm;
