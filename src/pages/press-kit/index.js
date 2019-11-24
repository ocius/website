import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../../layouts/Layout';
import Segmented from '../../components/Segmented';
import SEO from '../../components/SEO';
import Container from '../../components/Container';
import Heading from '../../components/Heading';
import PageHeader from '../../components/PageHeader';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

const DownloadableContainer = styled.div`
  position: relative;
`;

const DownloadableOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  ${DownloadableContainer}:hover & {
    opacity: 1;
    z-index: 1;
  }
`;

const Downloadable = ({ node }) => (
  <Col xs={12} md={4} lg={4} key={node.id}>
    <Link to={node.publicURL}>
      <DownloadableContainer>
        <DownloadableOverlay>
          <Icon.Download
            fill="white"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '20%',
              height: '20%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        </DownloadableOverlay>
        <Img
          style={{ height: '300px' }}
          imgStyle={{ objectFit: 'contain' }}
          fixed={node.childImageSharp.fixed}
          alt={node.name}
        />
      </DownloadableContainer>
    </Link>
  </Col>
);

export default ({ data }) => (
  <Layout>
    <SEO
      title="Press Kit"
      description="Our latest high resolution media resources available for download"
    />
    <Segmented borderBottom="">
      <PageHeader>Press Kit</PageHeader>
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
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Heading level={2} size="large">
              Media Library
            </Heading>
          </Col>
        </Row>
        <Row>
          {data.media.edges.map(item => {
            return <Downloadable node={item.node} key={item.node.id} />;
          })}
        </Row>
        <Row>
          <Col xs={12} md={12} lg={12}>
            <Button
              color="white"
              to="https://drive.google.com/drive/folders/1beCdCnYaKyE4455mAd4kJKjPJWBAgSfb?usp=sharing"
              size="medium"
              border
              outbound
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
        </Row>
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
