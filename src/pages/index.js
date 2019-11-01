import React from 'react';
import { graphql } from 'gatsby';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Segmented from '../components/Segmented';
import Button from '../components/Button';
import HeroBlock from '../components/HeroBlock';
import Heading from '../components/Heading';
import PanelCallout from '../components/PanelCallout';
import PanelCalloutGroup from '../components/PanelCalloutGroup';
import ArticlePreviewBlock from '../components/ArticlePreviewBlock';
import RecentNews from '../components/RecentNews';
import { add, gutter, span } from '../common/grid';
import mq from '../common/mq';
import Icon from '../components/Icon';

const gutterWidth = 30;

const Callout = styled.div`
  top: 10%;
  left: 0;
  right: 0;
  position: absolute;
  text-align: center;

  @media (max-width: ${mq.max[480]}) {
    top: 6%;
    padding: 0 ${gutterWidth / 2}px;
  }

  @media (min-width: ${mq.min[1024]}) {
    /*margin-right: ${add([span(2), gutter()])};*/
    width: ${span(12)};
  }
`;

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="OCIUS - Satellites of the Sea" />
      <Segmented borderBottom="">
        {data.HeroBackground && (
          <HeroBlock image={data.HeroBackground.childImageSharp.fluid} gradient="leftCorner">
            <Callout className="HeroBlock-callout">
              <Heading level={1} size="huge" weight="thick">
                Innovative Autonomous Solutions
              </Heading>
              <Heading level={2} size="medium">
                For persistent maritime surveillance
              </Heading>
            </Callout>
          </HeroBlock>
        )}
      </Segmented>
      <Container className="centered">
        <Segmented borderBottom="">
          <Row>
            <Col xs={12} md={8} lg={8} lgOffset={2}>
              <Heading level={2} size="large" underline>
                A new generation of ocean drones. Power large payloads,
                roam widely, and stay at sea for months at a time.
              </Heading>
              <p>
                USVs offer economic and operational advantages over conventional methods in a
                multitude of industries. The videos and links below demonstrate just some of the
                solutions we offer.
              </p>
              <Button color="white" size="medium" to="/usv" border>
                What is a USV?
                <Icon.ArrowRight
                  fill="#000000"
                  style={{
                    width: '18px',
                    height: '18px',
                    marginLeft: '3px'
                  }}
                />
              </Button>
            </Col>
          </Row>
        </Segmented>
      </Container>

      <div id="solutions" style={{ backgroundColor: '#efefef', paddingBottom: '20px' }}>
        <Segmented borderBottom="">
          <PanelCalloutGroup>
            {data.DefenceTile && (
              <PanelCallout
                bgImage={data.DefenceTile.childImageSharp.fluid}
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
                bgImage={data.OilTile.childImageSharp.fluid}
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
                bgImage={data.ScienceTile.childImageSharp.fluid}
                title="Science"
                url="/science"
              >
                <p>Environmental monitoring</p>
                <p>Seabed Mapping</p>
              </PanelCallout>
            )}
          </PanelCalloutGroup>
        </Segmented>

        <Container>
          <Segmented borderBottom="">
            <ArticlePreviewBlock />
          </Segmented>
        </Container>

        <Container>
          <RecentNews />
        </Container>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query getHomepageImages {
    HeroBackground: file(relativePath: { eq: "images/drone_boat_32.jpg" }) {
      ...imageSharpHeroBackground
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

  fragment imageSharpHeroBackground on File {
    childImageSharp {
      fluid(quality: 91, maxWidth: 1320) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }

  fragment imageSharpTile on File {
    childImageSharp {
      fluid(maxWidth: 600, maxHeight: 470, quality: 90) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;
