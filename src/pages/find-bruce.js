import React from 'react';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Container from '../components/Container';
import Heading from '../components/Heading';

export default () => (
  <Layout>
    <SEO
      title="Find Bruce"
      description="See where Bruce is, what he is doing and see what Bruce sees at any time – LIVE. Bruce is now
      transmitting LIVE some of his on- board sensors, cameras and data. NB Time is Greenwich Mean Time. Press
      START button in the top right corner"
    />
    <PageHeader>Find Bruce</PageHeader>
    <section className="page-content">
      <Container>
        <article>
          <Heading size="medium" level={3}>
            See where Bruce is, what he is doing and see what Bruce sees at any time – LIVE.
          </Heading>
          <p>
            Bruce is now transmitting LIVE some of his on- board sensors, cameras and data.
          </p>
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
