import React from 'react';
import Layout from '../layouts/Layout';
import Header from '../components/header';
import Container from '../components/Container';
import Row from '../components/GridRow';
import Column from '../components/GridColumn';

export default () => (
  <Layout>
    <Header title="Contact" description="Links to contact Ocius" />
    <section className="page-content">
      <Container>
        <Row>
          <Column className="primary-content" sm={8} md={7} lg={7} fluid>
            <p>Email</p>
            <p>Phone</p>
            <p>Twitter</p>
            <p>Facebook</p>
            <p>Instagram</p>
          </Column>
          <Column className="secondary-content" sm={4} md={5} lg={4} lgShift={1} fluid>
            Latest Posts
          </Column>
        </Row>
      </Container>
    </section>
  </Layout>
);
