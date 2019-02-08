import React from 'react';
import Layout from '../layouts/Layout';
import Header from '../components/header';
import Container from '../components/Container';
import Row from '../components/GridRow';
import Column from '../components/GridColumn';
import RecentNews from '../components/RecentNews';

export default () => (
  <Layout>
    <Header title="Contact" description="Links to contact Ocius" />
    <section className="page-content">
      <Container>
        <Row>
          <Column className="primary-content" sm={8} md={7} lg={7} fluid>
            <Row>
              <Column sm={12} md={6} lg={6} fluid>
                <strong>For General Enquiries</strong>
                <address>
                  Main Phone: <a href="callto:+61299246400">+61 2 9924 6400</a>
                  <br />
                  Email: <a href="mailto:admin@ocius.com.au">admin@ocius.com.au</a>
                </address>
              </Column>
              <Column sm={12} md={6} lg={6} fluid>
                <strong>For Investment Enquiries</strong>
                <address>
                  Email: <a href="mailto:cosecretary@ocius.com.au">cosecretary@ocius.com.au</a>
                </address>
              </Column>
            </Row>
            <Row>
              <Column sm={12} md={6} lg={6} fluid>
                <strong>Address:</strong>
                <address>
                  Ainsworth Building
                  <br />
                  University of New South Wales
                  <br />
                  Willis Annex
                  <br />
                  Kensington NSW 2052
                  <br />
                  Phone: <a href="callto:+61299246400">+61 2 9924 6400</a>
                </address>
              </Column>
              <Column sm={12} md={6} lg={6} fluid>
                <strong>Postal Address:</strong>
                <address>
                  Office Box 4304
                  <br />
                  Castlecrag
                  <br />
                  Australia 2068
                </address>
              </Column>
            </Row>
          </Column>
          <Column className="secondary-content" sm={4} md={5} lg={4} lgShift={1} fluid>
            <RecentNews />
          </Column>
        </Row>
      </Container>
    </section>
  </Layout>
);
