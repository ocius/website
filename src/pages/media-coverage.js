import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Container from '../components/Container';
import Heading from '../components/Heading';

const ImageHolder = styled(Img)`
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

  &:hover ${ImageHolder} {
    transform: translateY(-0.25rem);
    box-shadow: rgba(46, 41, 51, 0.08) 0px 4px 8px, rgba(71, 63, 79, 0.16) 0px 8px 16px;
  }
`;

const Link = styled.a`
  border-bottom: medium none;
  color: #001826;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
`;

const Source = styled.p`
  font-size: 1em;
  margin: 0 0 0.25em;
`;

const Date = styled.p`
  font-size: 1em;
  font-weight: 300;
  margin: 0 0 0.25em;
  color: rgb(22, 65, 148);
`;

export default ({ data }) => {
  const { edges: sites } = data.allSitesYaml;

  return (
    <Layout>
      <SEO title="Media Coverage" />
      <PageHeader>Media Coverage</PageHeader>
      <section className="page-content">
        <Container>
          <Row>
            <Col className="primary-content" xs={12} md={12} lg={12}>
              <Row>
                {sites.map(({ node }) => (
                  <Col xs={12} md={6} lg={4} key={node.id}>
                    <Card>
                      <Link href={node.url}>
                        <ImageHolder
                          fluid={node.childScreenshot.screenshotFile.childImageSharp.fluid}
                          alt={node.title}
                        />
                        <Heading level={2} size="small" weight="thick">
                          {node.title}
                        </Heading>
                      </Link>
                      <Source>{node.source}</Source>
                      <Date>{node.date}</Date>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query MediaCoverageQuery {
    allSitesYaml(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          url
          title
          source
          date(formatString: "DD MMMM, YYYY")
          childScreenshot {
            screenshotFile {
              childImageSharp {
                fluid(maxWidth: 700, maxHeight: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
