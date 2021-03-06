import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Row, Col } from 'react-flexbox-grid';
import { Feedback, Alert, FormField, FormLabel, TextareaField, FieldWrapper } from '../Form';
import Heading from '../Heading';
import Button from '../Button';
import { Spacing } from '../common';

const TechnicalSpecificationForm = () => {
  const { register, handleSubmit, errors, reset, formState } = useForm({
    mode: 'onBlur',
    defaultValues: {
      fullName: '',
      position: '',
      company: '',
      email: '',
      phone: '',
      interest: '',
    },
  });
  const [formSuccess, setFormSuccess] = useState(false);
  const [formMessage, setFormMessage] = useState(null);
  const { isSubmitting, isValid } = formState;

  const handleFormSubmitError = (error) => {
    setFormSuccess(false);
    setFormMessage(`Unable to submit form. ${error}. Please try again.`);
  };

  const onSubmit = ({ fullName, position, company, email, phone, interest }) => {
    if (isValid) {
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
            setFormSuccess(true);
            setFormMessage(
              'Your message was sent successfully. You will receive a reply within 24 hours.'
            );
            reset();
          } else {
            handleFormSubmitError();
          }
        })
        .catch((error) => {
          handleFormSubmitError(error);
        });
    }
  };

  return (
    <>
      <Row id="technical" className="centered">
        <Col xs={12} md={8} lg={8} mdOffset={2}>
          <Spacing $value="80px" />
          <Heading level={2} size="large" weight="thick" underline="center">
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

          <form className="form-aligned" onSubmit={handleSubmit(onSubmit)}>
            {formMessage && <Alert success={formSuccess}>{formMessage}</Alert>}
            <FieldWrapper>
              <FormLabel htmlFor="fullName">Name:</FormLabel>
              <FormField
                type="text"
                id="fullName"
                name="fullName"
                className={`form-control ${errors.fullName && 'is-invalid'}`}
                placeholder="Full Name (required)"
                ref={register({ required: true })}
              />
              {/* show an error when name field is empty */}
              {errors.fullName && <Feedback position="center">Please enter your name</Feedback>}
            </FieldWrapper>

            <FieldWrapper>
              <FormLabel htmlFor="company">Company:</FormLabel>
              <FormField
                type="text"
                id="company"
                name="company"
                placeholder="Company or Company Website"
                ref={register}
              />
            </FieldWrapper>

            <FieldWrapper>
              <FormLabel htmlFor="position">Position:</FormLabel>
              <FormField
                type="text"
                id="position"
                name="position"
                placeholder="Position"
                ref={register}
              />
            </FieldWrapper>

            <FieldWrapper>
              <FormLabel htmlFor="email">Email:</FormLabel>
              <FormField
                type="email"
                id="email"
                name="email"
                className={`form-control ${errors.email && 'is-invalid'}`}
                placeholder="Email (required)"
                ref={register({
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
              />
              {/* show an error when an invalid email provided */}
              {errors.email && <Feedback position="center">Please provide a valid email</Feedback>}
            </FieldWrapper>

            <FieldWrapper>
              <FormLabel htmlFor="phone">Phone:</FormLabel>
              <FormField type="tel" id="phone" name="phone" placeholder="Phone" ref={register} />
            </FieldWrapper>

            <FieldWrapper>
              <FormLabel htmlFor="interest">Reason for interest:</FormLabel>
              <TextareaField
                as="textarea"
                id="interest"
                name="interest"
                className={`form-control ${errors.interest && 'is-invalid'}`}
                cols={40}
                rows={10}
                placeholder="Reason for interest (required)"
                ref={register({ required: true })}
              />
              {/* show an error when interest field is empty */}
              {errors.interest && (
                <Feedback position="center">Please enter reason for interest</Feedback>
              )}
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
        </Col>
      </Row>
    </>
  );
};

TechnicalSpecificationForm.propTypes = {};
TechnicalSpecificationForm.defaultProps = {};

export default TechnicalSpecificationForm;
