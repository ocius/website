import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { Col, Row } from 'react-flexbox-grid';
import React from 'react';
import { graphql } from 'gatsby';
import Heading from '../components/Heading';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import NavTabs from '../components/Tabs/NavTabs';
import NavTab from '../components/Tabs/NavTab';
import Container from '../components/Container';
import Layout from '../layouts/Layout';

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

export default ({ data }) => {
  const { edges } = data.allLinksYaml;

  return (
    <Layout>
      <SEO title="In The News" />
      <PageHeader>
        <Heading level={1} size="large" header>
          Media Coverage
        </Heading>
        <NavTabs>
          <NavTab label="Blog" to="news" />
          <NavTab label="Media Coverage" to="media-coverage" />
        </NavTabs>
      </PageHeader>
      <section className="page-content">
        <Container>
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
        </Container>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query MediaCoverageQuery {
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
`;
