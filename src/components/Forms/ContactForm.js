import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import styled from 'styled-components';
import { Feedback, Alert, FormField, TextareaField } from '../Form';
import Button from '../Button';

const FieldWrapper = styled.div`
  margin: 0 0 1.2em;
`;

const ContactForm = () => {
  const { register, handleSubmit, errors, reset, formState } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  });
  const [formSuccess, setFormSuccess] = useState(false);
  const [formMessage, setFormMessage] = useState(null);
  const { isSubmitting, isValid } = formState;

  const handleFormSubmitError = (error) => {
    setFormSuccess(false);
    setFormMessage(`Unable to submit form. ${error}. Please try again.`);
  };

  const onSubmit = ({ name, company, email, message }) => {
    if (isValid) {
      // TODO: Fix lambda URL
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
    <form onSubmit={handleSubmit(onSubmit)}>
      {formMessage && <Alert success={formSuccess}>{formMessage}</Alert>}
      <FieldWrapper>
        <FormField
          type="text"
          id="name"
          name="name"
          className={`form-control ${errors.name && 'is-invalid'}`}
          placeholder="Name (required)"
          ref={register({ required: true })}
        />
        {/* show an error when name field is empty */}
        {errors.name && <Feedback>Please enter your name</Feedback>}
      </FieldWrapper>

      <FieldWrapper>
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
        {errors.email && <Feedback>Please provide a valid email</Feedback>}
      </FieldWrapper>

      <FieldWrapper>
        <FormField
          type="text"
          id="company"
          name="company"
          placeholder="Company or Company Website"
          ref={register()}
        />
      </FieldWrapper>

      <FieldWrapper>
        <TextareaField
          as="textarea"
          id="message"
          name="message"
          className={`form-control ${errors.message && 'is-invalid'}`}
          cols={40}
          rows={10}
          placeholder="Message (required)"
          ref={register({ required: true })}
        />
        {/* show an error when message field is empty */}
        {errors.message && <Feedback>Please enter your message</Feedback>}
      </FieldWrapper>

      <Button type="submit" size="small" color="blue" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  );
};

ContactForm.propTypes = {};
ContactForm.defaultProps = {};

export default ContactForm;
