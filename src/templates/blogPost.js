import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import Container from '../components/Container';
import Row from '../components/GridRow';
import Column from '../components/GridColumn';
import RecentNews from '../components/RecentNews';
import Header from '../components/header';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Header title="News" description={post.excerpt} />
      <section className="page-content">
        <Container>
          <Row>
            <Column className="primary-content" sm={8} md={7} lg={7} fluid>
              <h2 className="title">{post.frontmatter.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Column>
            <Column className="secondary-content" sm={4} md={5} lg={4} lgShift={1} fluid>
              <RecentNews />
            </Column>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`;
