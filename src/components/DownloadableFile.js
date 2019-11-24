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
          ></Icon.Download>
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

