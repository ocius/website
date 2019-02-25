import React from 'react';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import HeroBlock from '../components/HeroBlock';
import Heading from '../components/Heading';
import { add, gutter, span } from '../common/grid';
import mq from '../common/mq';
import HeroBackground from '../images/wallpaperocius-768x432.jpg';

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
  }
};

export default () => (
  <Layout>
    <SEO title="OCIUS - Satellites of the Sea" />
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
  </Layout>
);
