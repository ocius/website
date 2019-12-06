import { Col, Row } from 'react-flexbox-grid';
import React from 'react';
import { graphql } from 'gatsby';
import Loadable from '@loadable/component';
import Heading from '../components/Heading';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import NavTabs from '../components/Tabs/NavTabs';
import NavTab from '../components/Tabs/NavTab';
import Container from '../components/Container';
import Layout from '../layouts/Layout';

// Lazy load component
const Card = Loadable(() => import(`../components/Card`));

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
                <Card
                  url={node.url}
                  thumbnail={node.thumbnail}
                  title={node.title}
                  source={node.source}
                  date={node.date}
                />
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
