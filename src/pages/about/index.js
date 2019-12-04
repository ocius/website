import React from 'react';
import { graphql } from 'gatsby';
import { Router } from '@reach/router';
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

export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title="About"
        description="Our Mission. To supply the world's best unmanned surface vessels with more power, payload and
      performance."
      />
      <PageHeader>
        <Heading level={1} size="large" header>
          About
        </Heading>
        <NavTabs>
          <NavTab label="People" to="about" />
          <NavTab label="Our Partners" to="about/partners" />
          <NavTab label="Our Story" to="about/our-story" />
          <NavTab label="Awards" to="about/awards" />
        </NavTabs>
      </PageHeader>
      <Container className="page-content">
        <Router>
          <People path="about" data={data} />
          <Partners path="about/partners" data={data} />
          <Prizes path="about/awards" data={data} />
          <OurStory path="about/our-story" data={data} />
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
