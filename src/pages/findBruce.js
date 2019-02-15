import React from 'react';
import Header from '../components/header';
import Layout from '../layouts/Layout';
import Container from '../components/Container';

export default () => (
  <Layout>
    <Header title="Find Bruce" description="Track our drones in real time" />
    <section className="page-content">
      <Container>
        <article>
          <h3>
            See where <i>Bruce</i> is, what he is doing and see what Bruce sees at any time – LIVE.
          </h3>
          <p>
            <i>Bruce</i> is now transmitting LIVE some of his on- board sensors, cameras and data.
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
