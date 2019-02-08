import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import Container from '../components/Container';
import Header from '../components/header';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <Header title={post.frontmatter.title} description={post.excerpt} />
        <Container>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </div>
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
