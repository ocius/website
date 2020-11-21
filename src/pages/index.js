import React from 'react';
import { graphql } from 'gatsby';
import Loadable from '@loadable/component';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import Container from '../components/Container';
import Segmented from '../components/Segmented';
import Button from '../components/Button';
import HeroBlock from '../components/HeroBlock';
import Heading from '../components/Heading';
import Icon from '../components/Icon';

// Lazy load all the components
const SidebarWidget = Loadable(() => import(`../components/SidebarWidget`));
const PanelCallout = Loadable(() => import(`../components/PanelCallout`));
const PanelCalloutGroup = Loadable(() => import(`../components/PanelCalloutGroup`));
const ArticlePreviewBlock = Loadable(() => import(`../components/ArticlePreviewBlock`));
const RecentNews = Loadable(() => import(`../components/RecentNews`));
const Sidebar = Loadable(() => import(`../components/Sidebar`));

const HeroSubheading = styled.p`
  color: #2d4355;
  font-size: 2em;
  line-height: 1.2;
`;

const Spacing = styled.div`
  height: ${(props) => props.$value || '50px'};
`;

export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title="OCIUS - Satellites of the Sea"
        description="OCIUS Technology's Unmanned Surface Vessels (USVs) provide innovative autonomous solutions for persistent maritime surveillance"
      />

      {data.HeroBackground && (
        <HeroBlock image={data.HeroBackground.childImageSharp.fluid} masked scrim="dark">
          <Row>
            <Col xs={12} md={6} lg={5}>
              <Spacing $value="80px" />
              <Heading level={1} size="huge" weight="thick" header underline="left">
                Autonomous
                <br />
                maritime
                <br />
                surveillance
              </Heading>
              <HeroSubheading>Intelligent, networked &amp; integrated</HeroSubheading>
              <Spacing $value="280px" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={6}>
              {data.Computer && <Img fluid={data.Computer.childImageSharp.fluid} alt="Radar" />}
            </Col>
            <Col xs={12} md={6} lg={6}>
              <Heading level={3} color="white" size="large" weight="thick" underline="left">
                A new generation
                <br />
                Of autonomous
                <br />
                Ocean monitoring.
              </Heading>
              <p>
                Power large payloads, roam widely, and stay at sea for months at a time. Ocius USVs
                offer economic and operational advantages over convertional methods in a multitude
                of industries. Utilising solar, wind and wave power, these vessels can autonomously
                monitor designated areas for lengths of time. The videos and links below demonstrate
                just some of the solutions we offer.
              </p>
              <Button color="blue" size="tiny" href="/usv">
                Find out more
              </Button>
              <Button color="transparent" size="tiny" href="/live" border>
                Watch live
              </Button>
            </Col>
          </Row>
        </HeroBlock>
      )}
      <Container className="centered">
        <Segmented borderBottom="">
          <Row>
            <Col xs={12} md={8} lg={8} mdOffset={2}>
              <Heading level={2} size="large" underline>
                A new generation of ocean drones. Power large payloads, roam widely, and stay at sea
                for months at a time.
              </Heading>
              <p>
                USVs offer economic and operational advantages over conventional methods in a
                multitude of industries. The videos and links below demonstrate just some of the
                solutions we offer.
              </p>
              <Button color="white" size="medium" href="/usv" border>
                What is a USV?
                <Icon.ArrowRight
                  fill="#000000"
                  style={{
                    width: '18px',
                    height: '18px',
                    marginLeft: '3px',
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
          <Sidebar>
            <SidebarWidget className="recent-news">
              <RecentNews />
            </SidebarWidget>
          </Sidebar>
        </Container>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query getHomepageImages {
    HeroBackground: file(relativePath: { eq: "images/ocius-bg.png" }) {
      ...imageSharpHeroBackground
    }

    Computer: file(relativePath: { eq: "images/computer.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
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

  fragment imageSharpHeroBackground on File {
    childImageSharp {
      fluid(quality: 100, maxWidth: 1920) {
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
