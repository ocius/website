import React from 'react';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Container from '../components/Container';
import Heading from '../components/Heading';

export default () => (
  <Layout>
    <SEO
      title="Live Feed"
      description="Transmitting LIVE on-board sensors, cameras and data. NB Time is Greenwich Mean Time. Press START button in the top right corner"
    />
    <PageHeader>Find Bruce</PageHeader>
    <section className="page-content">
      <Container>
        <article>
          <Heading size="medium" level={3}>
            Transmitting LIVE on-board sensors, cameras and data
          </Heading>
          <p>NB Time is Greenwich Mean Time. Press START button in the top right corner.</p>
          <iframe
            title="See where Bruce is"
            src="https://usvna.ocius.com.au/usvna/oc_server"
            width="100%"
            height="900px"
          />
        </article>
      </Container>
    </section>
  </Layout>
);
