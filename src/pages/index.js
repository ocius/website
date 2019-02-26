import React from 'react';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Row from '../components/GridRow';
import Column from '../components/GridColumn';
import Segmented from '../components/Segmented';
import Button from '../components/Button';
import HeroBlock from '../components/HeroBlock';
import Heading from '../components/Heading';
import PanelCallout from '../components/PanelCallout';
import PanelCalloutGroup from '../components/PanelCalloutGroup';
import { add, gutter, span } from '../common/grid';
import mq from '../common/mq';
import HeroBackground from '../images/wallpaperocius-768x432.jpg';
import ScienceTile from '../images/Science-Home-Tile-Background.jpg';
import OilTile from '../images/Oil-Home-Tile-Background.jpg';
import DefenceTile from '../images/Defence-Home-Tile-Background.jpg';

const gutterWidth = 30;

const styles = {
  callout: {
    bottom: '110px',
    left: 0,
    position: 'absolute',
    right: 0,
    width: '100%',

    [`@media (max-width: ${mq.max[480]})`]: {
      paddingRight: `${gutterWidth}px`
    },

    [`@media (min-width: ${mq.min[1024]})`]: {
      marginRight: add([span(2), gutter()]),
      width: span(10)
    }
  },

  alignment: {
    center: {
      textAlign: 'center'
    }
  }
};

export default () => (
  <Layout>
    <SEO title="OCIUS - Satellites of the Sea" />
    <Segmented borderBottom="">
      <HeroBlock
        image={HeroBackground}
        gradient="leftCorner"
        style={{
          height: 'calc(100vh - 4em)',
          color: '#ffffff'
        }}
      >
        <div className="HeroBlock-callout" style={styles.callout}>
          <Heading level="1" size="huge" weight="thick">
            Innovative Autonomous Solutions
          </Heading>
          <Heading level="3">For persistent maritime surveillance</Heading>
        </div>
      </HeroBlock>
    </Segmented>
    <Container style={styles.alignment.center}>
      <Segmented borderBottom="">
        <Row>
          <Column sm={12} md={8} lg={8} lgShift={2} fluid>
            <Heading level="2">
              We are the solution to the most challenging problems of the ocean
            </Heading>
            <p>
              BlueBottle USVs are a new generation of ocean drones able to power large payloads,
              roam widely and stay at sea for months at a time
            </p>
            <p>
              BlueBottle offers economic and operational advantages over conventional methods in a
              multitude of industries, below are just some of the solutions we offer...
            </p>
            <Button color="white" size="medium" href="/bluebottle">
              What is a USV?
            </Button>
          </Column>
        </Row>
      </Segmented>
    </Container>

    <Segmented borderBottom="">
      <PanelCalloutGroup>
        <PanelCallout bgImage={DefenceTile} title="Defence" url="/defence">
          <p>Anti Submarine Warfare</p>
          <p>Electronic Warfare</p>
          <p>Gateway Coms</p>
          <p>Mine Counter Measures</p>
        </PanelCallout>

        <PanelCallout bgImage={OilTile} title="Oil &amp; Gas" url="/oil-and-gas">
          <p>Mapping pipelines</p>
          <p>Security</p>
          <p>Environmental monitoring</p>
        </PanelCallout>

        <PanelCallout bgImage={ScienceTile} title="Science" url="/science">
          <p>Environmental monitoring</p>
          <p>Seabed Mapping</p>
        </PanelCallout>
      </PanelCalloutGroup>
    </Segmented>
  </Layout>
);
