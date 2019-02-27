import React from 'react';
import { graphql } from 'gatsby';
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

export default ({ data }) => (
  <Layout>
    <SEO title="OCIUS - Satellites of the Sea" />
    <Segmented borderBottom="">
      {data.HeroBackground && (
        <HeroBlock
          image={data.HeroBackground.childImageSharp.sizes.src}
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
      )}
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
        {data.DefenceTile && (
          <PanelCallout
            bgImage={data.DefenceTile.childImageSharp.sizes.src}
            title="Defence"
            url="/defence"
          >
            <p>Anti Submarine Warfare</p>
            <p>Electronic Warfare</p>
            <p>Gateway Coms</p>
            <p>Mine Counter Measures</p>
          </PanelCallout>
        )}

        {data.OilTile && (
          <PanelCallout
            bgImage={data.OilTile.childImageSharp.sizes.src}
            title="Oil &amp; Gas"
            url="/oil-and-gas"
          >
            <p>Mapping pipelines</p>
            <p>Security</p>
            <p>Environmental monitoring</p>
          </PanelCallout>
        )}

        {data.ScienceTile && (
          <PanelCallout
            bgImage={data.ScienceTile.childImageSharp.sizes.src}
            title="Science"
            url="/science"
          >
            <p>Environmental monitoring</p>
            <p>Seabed Mapping</p>
          </PanelCallout>
        )}
      </PanelCalloutGroup>
    </Segmented>
  </Layout>
);

export const query = graphql`
  query getHomepageImages {
    HeroBackground: file(relativePath: { eq: "images/wallpaperocius-768x432.jpg" }) {
      childImageSharp {
        sizes(quality: 100) {
          src
        }
      }
    }

    ScienceTile: file(relativePath: { eq: "images/Science-Home-Tile-Background.jpg" }) {
      ...imageSharpTile
    }

    OilTile: file(relativePath: { eq: "images/Oil-Home-Tile-Background.jpg" }) {
      ...imageSharpTile
    }

    DefenceTile: file(relativePath: { eq: "images/Defence-Home-Tile-Background.jpg" }) {
      ...imageSharpTile
    }
  }

  fragment imageSharpTile on File {
    childImageSharp {
      sizes(quality: 100) {
        src
      }
    }
  }
`;
