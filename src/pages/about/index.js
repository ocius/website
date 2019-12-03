import React from 'react';
import { graphql } from 'gatsby';
import { Row, Col } from 'react-flexbox-grid';
import { Router } from '@reach/router';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import SEO from '../../components/SEO';
import Layout from '../../layouts/Layout';
import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Heading from '../../components/Heading';
import NavTabs from '../../components/Tabs/NavTabs';
import NavTab from '../../components/Tabs/NavTab';
import People from './people';
import Prizes from './prizes';
import Partners from './partners';
import OurStory from './our-story';

const CardThumbnail = styled(BackgroundImage)`
  height: 250px;
  border-radius: 2px;
  box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
`;

const Card = styled.div`
  display: flex;
  flex: 1 0 0px;
  flex-direction: column;
  margin: 1.5rem 0.5rem;
  max-width: 100%;
  position: relative;

  &:hover ${CardThumbnail} {
    transform: translateY(-0.25rem);
    box-shadow: rgba(46, 41, 51, 0.08) 0px 4px 8px, rgba(71, 63, 79, 0.16) 0px 8px 16px;
  }
`;

const ExternalLink = styled.a`
  border-bottom: medium none;
  color: #001826;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
`;

const CardBody = styled.div`
  position: relative;
`;

const Source = styled.p`
  font-size: 1em;
  margin: 0 0 0.25em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #60d2f6;
  border-radius: 20px;
  padding: 4px 20px;
  position: absolute;
  top: -20px;
  left: 0;
`;

const Date = styled.p`
  font-size: 1em;
  font-weight: 300;
  margin: 0 0 0.25em;
  color: rgb(22, 65, 148);
`;

const MediaCoverage = ({ data }) => {
  const { edges } = data.allLinksYaml;

  return (
    <>
      <header id="media-coverage">
        <Heading level={1} size="huge" underline className="centered">
          Media Coverage
        </Heading>
      </header>
      <Row style={{ padding: '2.5rem 0' }}>
        {edges.map(({ node }) => (
          <Col xs={12} md={4} lg={4} key={node.id}>
            <Card>
              <ExternalLink target="_blank" href={node.url}>
                <CardThumbnail fluid={node.thumbnail.childImageSharp.fluid} />
              </ExternalLink>
              <CardBody>
                <Heading level={2} size="small" weight="thick">
                  {node.title}
                </Heading>
                <Source>{node.source}</Source>
                <Date>{node.date}</Date>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title="About"
        description="Our Mission. To supply the world's best unmanned surface vessels with more power, payload and
      performance."
      />
      <PageHeader>
        <Heading level={1} size="huge" header>
          About
        </Heading>
        <NavTabs>
          <NavTab label="People" to="about" />
          <NavTab label="Our Partners" to="about/partners" />
          <NavTab label="Our Story" to="about/our-story" />
          <NavTab label="Awards" to="about/awards" />
          <NavTab label="In The News" to="about/in-the-news" />
        </NavTabs>
      </PageHeader>
      <Container className="page-content">
        <Router>
          <People path="about" data={data} />
          <Partners path="about/partners" data={data} />
          <Prizes path="about/awards" data={data} />
          <OurStory path="about/our-story" data={data} />
          <MediaCoverage path="about/in-the-news" data={data} />
        </Router>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query getAboutPageData {
    MarkBethwaite: file(relativePath: { eq: "pages/about/images/Mark-Bethwaite.jpg" }) {
      ...imageSharpAvatar
    }

    RobertDane: file(relativePath: { eq: "pages/about/images/Robert-Dane-Grayscale.png" }) {
      ...imageSharpAvatar
    }

    GeoffZuber: file(relativePath: { eq: "pages/about/images/Geoff-Zuber.png" }) {
      ...imageSharpAvatar
    }

    LloydBreckenridge: file(relativePath: { eq: "pages/about/images/Lloyd-Breckenridge.jpg" }) {
      ...imageSharpAvatar
    }

    PeterWlodarczyk: file(relativePath: { eq: "pages/about/images/Peter-Wlodarczyk.jpg" }) {
      ...imageSharpAvatar
    }

    TraceySharah: file(relativePath: { eq: "pages/about/images/Tracey-Sharah.jpg" }) {
      ...imageSharpAvatar
    }

    AndrewAitken: file(relativePath: { eq: "pages/about/images/Andrew-Aitken.png" }) {
      ...imageSharpAvatar
    }

    AustralianGovernment: file(
      relativePath: { eq: "pages/about/images/australiangovernment.png" }
    ) {
      ...imageSharpLogotype
    }

    SteberInternational: file(relativePath: { eq: "pages/about/images/Steber-International.jpg" }) {
      ...imageSharpLogotype
    }

    DefenceInnovationHub: file(
      relativePath: { eq: "pages/about/images/Defence-Innovation-Hub.png" }
    ) {
      ...imageSharpLogotype
    }
    Thales: file(relativePath: { eq: "pages/about/images/thales-logo.png" }) {
      ...imageSharpLogotype
    }

    OneTwoThree: file(
      relativePath: { eq: "pages/about/images/One-Two-Three-Naval-Architects.jpg" }
    ) {
      ...imageSharpLogotype
    }

    UNSW: file(relativePath: { eq: "pages/about/images/UNSW.jpg" }) {
      ...imageSharpLogotype
    }

    ClarkIP: file(relativePath: { eq: "pages/about/images/Clark-IP-Logo.png" }) {
      ...imageSharpLogotype
    }

    Spitfire: file(relativePath: { eq: "pages/about/images/Spitfire-Assoc-Logo.jpg" }) {
      ...imageSharpLogotype
    }

    allLinksYaml {
      edges {
        node {
          id
          url
          title
          source
          date(formatString: "DD MMMM, YYYY")
          thumbnail {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }

  fragment imageSharpAvatar on File {
    childImageSharp {
      fixed(width: 150, height: 150) {
        ...GatsbyImageSharpFixed
      }
    }
  }

  fragment imageSharpLogotype on File {
    childImageSharp {
      fixed(width: 550) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;
