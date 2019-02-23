import React from 'react';
import Header from '../components/header';
import Layout from '../layouts/Layout';
import Container from '../components/Container';
import Row from '../components/GridRow';
import Column from '../components/GridColumn';
import Icon from '../components/Icon';
import Segmented from '../components/Segmented';
import Button from '../components/Button';

const styles = {
  alignment: {
    left: {
      textAlign: 'left'
    },
    center: {
      textAlign: 'center'
    }
  }
};

export default () => (
  <Layout>
    <Header title="Oil And Gas" desciption="Applications for oil and gas" />
    <Container style={styles.alignment.center}>
      <Segmented borderBottom="">
        <h3>
          USVs are already being used in the Oil &amp; Gas industry
          <br />
          <strong>Bluebottles can do more</strong>
        </h3>
      </Segmented>
      <Segmented>
        <Row>
          <Column sm={12} md={4} lg={4} fluid>
            <Icon.Compass
              fill="#4db4e6"
              style={{
                height: '70px',
                marginBottom: '3px',
                width: 'auto'
              }}
            />
            <h5>Seabed & Pipeline Surveys</h5>
            <ul style={styles.alignment.left}>
              <li>GPS mapping</li>
              <li>Assist seismic survey</li>
              <li>Much cheaper than crewed vessels</li>
              <li>MBES and other sensors to suit job</li>
              <li>Coastal waters, navigation channel hazards</li>
              <li>Onboard processing for anomalies for real-time check</li>
            </ul>
          </Column>
          <Column sm={12} md={4} lg={4} fluid>
            <Icon.Envira
              fill="#4db4e6"
              style={{
                height: '70px',
                marginBottom: '3px',
                width: 'auto'
              }}
            />
            <h5>Environmental Monitoring</h5>
            <ul style={styles.alignment.left}>
              <li>Hydrocarbon monitoring</li>
              <li>Pipeline and leak checking</li>
              <li>Marine biodiversity monitoring</li>
              <li>Subsea floor sensors gateway communications</li>
              <li>Pre-exploration meteorological and oceanographic data</li>
            </ul>
          </Column>
          <Column sm={12} md={4} lg={4} fluid>
            <Icon.Lock
              fill="#4db4e6"
              style={{
                height: '70px',
                marginBottom: '3px',
                width: 'auto'
              }}
            />
            <h5>Security</h5>
            <ul style={styles.alignment.left}>
              <li>Early warning against asymmetrical threats</li>
              <li>Bluebottles can hear under the water and see and sense above the water</li>
              <li>
                Patrols for environmental monitoring also provide protection of high-value assets
                over the horizon.
              </li>
            </ul>
          </Column>
        </Row>
      </Segmented>
      <Segmented borderBottom="">
        <Row>
          <Column sm={12} md={12} lg={12} fluid>
            <h3>WE ARE LOOKING FOR PARTNERS TO DO JOINT VENTURE AND DEMONSTRATION PROJECTS</h3>
            <Button color="white" size="medium" href="/contact">
              Contact Us Now
            </Button>
          </Column>
        </Row>
      </Segmented>
    </Container>
  </Layout>
);
