import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Layout from '../../layouts/Layout';
import Segmented from '../../components/Segmented';
import SEO from '../../components/SEO';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import PageHeader from '../../components/PageHeader';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import ResponsiveIframe from '../../components/ResponsiveIframe';

export default ({ data }) => (
  <Layout>
    <SEO
      title="Press Kit"
      description="Our latest high resolution media resources available for download"
    />
    <Segmented borderBottom="">
      <PageHeader>
        <Heading level={1} size="huge" header>
          Press Kit
      </Heading>
      </PageHeader>
    </Segmented>
    <Container className="page-content centered">
      <Segmented borderBottom="">
        <Row>
          <Col xs={12} md={12} lg={12}>
            {data.GlobeLogo && (
              <Img
                style={{ maxWidth: '100%' }}
                imgStyle={{ objectFit: 'contain' }}
                fixed={data.GlobeLogo.childImageSharp.fixed}
                alt="OCIUS' Logo"
              />
            )}
          </Col>
          <Col xs={12} md={12} lg={12}>
            <Button color="white" size="medium" to="/link-to-zip-file" border>
              Download the OCIUS logo kit
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

      <Segmented borderBottom="">
        <Col xs={12} md={12} lg={12}>
          <Heading level={2} size="large">
            Media Library
          </Heading>
        </Col>
      </Segmented>
      <Segmented borderBottom="">
        <Row>
          <ResponsiveIframe
            src="https://drive.google.com/file/d/1F-YD7TEncGH1nmrOJj3nMGHG8oRqVaim/preview"
            title="PAC2019 Overview"
          />
        </Row>
      </Segmented>
      <Segmented borderBottom="">
        <Col xs={12} md={12} lg={12}>
          <Button
            color="white"
            href="https://drive.google.com/drive/folders/1beCdCnYaKyE4455mAd4kJKjPJWBAgSfb?usp=sharing"
            size="medium"
            type="outbound"
            border
          >
            View the full library
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
      </Segmented>
    </Container>
  </Layout>
);

export const query = graphql`
  query getPressKitImages {
    GlobeLogo: file(relativePath: { eq: "pages/press-kit/OCIUS-Globe-Logo.png" }) {
      ...imageSharpLogotype
    }
    media: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: "pages/press-kit/Media" }
      }
    ) {
      edges {
        node {
          ...imageSharpMediatype
          name
          publicURL
          id
        }
      }
    }
  }

  fragment imageSharpMediatype on File {
    childImageSharp {
      fixed(height: 300) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;
