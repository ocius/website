import React from 'react';
import { Formik, Field } from 'formik';
import { Row, Col } from 'react-flexbox-grid';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Container from '../components/Container';
import RecentNews from '../components/RecentNews';

export default () => (
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
              For technical specifications of Ocius&apos; BlueBottle USV, contact us below for a PDF
              Brochure
            </p>
            <Formik
              initialValues={{
                full_name: '',
                position: '',
                company: '',
                email: '',
                phone: '',
                interest: ''
              }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
              }}
              render={props => (
                <form onSubmit={props.handleSubmit}>
                  <Field type="text" name="full_name" placeholder="Full Name (required)" />
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
