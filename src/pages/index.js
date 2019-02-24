import React from 'react';
import Layout from '../layouts/Layout';
import HeroBlock from '../components/HeroBlock';
import Heading from '../components/Heading';
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
  }
};

export default () => (
  <Layout>
    <HeroBlock
      image="https://ocius.com.au/wp-content/uploads/2017/09/wallpaperocius-768x432.jpg"
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
