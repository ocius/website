import React from 'react';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Row from '../components/GridRow';
import Column from '../components/GridColumn';
import Icon from '../components/Icon';
import Segmented from '../components/Segmented';
import HeroBlock from '../components/HeroBlock';
import Button from '../components/Button';
import Heading from '../components/Heading';
// Import background image
import HeaderBackground from '../images/Elevation.jpg';

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
    <SEO
      title="Science"
      description="Science Weather 'ground truth' Hurricane Landfall Prediction Climate Change Fisheries Weather LIVE
        Wind direction &amp; strength Solar intensity &amp; cloud Wave direction &amp; height Air pressure Water
        temperature Camera shots."
      image={HeaderBackground}
    />
    <Segmented borderBottom="">
      <HeroBlock
        image={HeaderBackground}
        gradient="linear"
        style={{
          textAlign: 'center',
          color: '#ffffff'
        }}
        constrained
      >
        <Heading level="2" weight="thick">
          Science
        </Heading>
        <Row>
          <Column sm={12} md={6} lg={6} fluid>
            <Heading level="2" size="medium" weight="thick">
              Weather “ground truth“
            </Heading>
          </Column>
          <Column sm={12} md={6} lg={6} fluid>
            <Heading level="2" size="medium" weight="thick">
              Climate Change
            </Heading>
          </Column>
        </Row>
        <Row>
          <Column sm={12} md={6} lg={6} fluid>
            <Heading level="2" size="medium" weight="thick">
              Hurricane Landfall Prediction
            </Heading>
          </Column>
          <Column sm={12} md={6} lg={6} fluid>
            <Heading level="2" size="medium" weight="thick">
              Fisheries
            </Heading>
          </Column>
        </Row>
      </HeroBlock>
    </Segmented>
    <Container style={styles.alignment.center}>
      <Segmented>
        <Row>
          <Column sm={12} md={4} lg={4} fluid>
            <Icon.Bolt
              fill="#4db4e6"
              style={{
                height: '70px',
                marginBottom: '3px',
                width: 'auto'
              }}
            />
            <h5>Weather LIVE</h5>
            <ul style={styles.alignment.left}>
              <li>Wind direction & strength</li>
              <li>Solar intensity & cloud</li>
              <li>Wave direction & height</li>
              <li>Air pressure</li>
              <li>Water temperature</li>
              <li>Camera shots</li>
              <li>All transmitted back to base in real time</li>
            </ul>
          </Column>
          <Column sm={12} md={4} lg={4} fluid>
            <Icon.StackOverflow
              fill="#4db4e6"
              style={{
                height: '70px',
                marginBottom: '3px',
                width: 'auto'
              }}
            />
            <h5>Data storage on board for later use</h5>
            <ul style={styles.alignment.left}>
              <li>
                Large volumes of data for scientific research sorted and stored for later download
              </li>
              <li>Time and date and GPS correlated against scientific parameters</li>
              <li>&amp;Ground truth&amp; for satellite and computer modelling</li>
            </ul>
          </Column>
          <Column sm={12} md={4} lg={4} fluid>
            <Icon.Handshake
              fill="#4db4e6"
              style={{
                height: '70px',
                marginBottom: '3px',
                width: 'auto'
              }}
            />
            <h5>Multiple options</h5>
            <ul style={styles.alignment.left}>
              <li>Discuss with us your mission goals</li>
              <li>Replace expensive bouys with mobile platforms</li>
              <li>Configure your own modular payload</li>
              <li>150 kg &amp;wet&amp; sensors & 150 kg &amp;dry&amp; equipment</li>
            </ul>
          </Column>
        </Row>
      </Segmented>
      <Segmented borderBottom="">
        <h3>
          Persistent USVs are valuable tools for oceanographic and climate change research
          <br />
          <strong>Let Bluebottles help you do more</strong>
          <br />
          For how we can support your goals...
        </h3>
        <Button color="white" size="medium" href="/contact">
          Contact Us Now
        </Button>
      </Segmented>
    </Container>
  </Layout>
);
