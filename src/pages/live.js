import React from 'react';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Container from '../components/Container';
import Heading from '../components/Heading';

export default () => (
  <Layout>
    <SEO title="Live" description="See where Bluebottles are at any time – LIVE." />
    <PageHeader>Find Bruce</PageHeader>
    <section className="page-content">
      <Container>
        <article>
          <Heading size="medium" level={3}>
            See where Bluebottles are at any time – LIVE. USVs are transmitting LIVE some of their
            on- board sensors, cameras and data.
          </Heading>
          <p>
            For camera - Press boat desired and mast or rudder camera and then START button in the
            top right corner.
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
