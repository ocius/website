import React from 'react';
import { graphql } from 'gatsby';
import PageLayoutSidebar from '../layouts/PageLayoutSidebar';
import Header from '../components/header';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <PageLayoutSidebar>
      <div>
        <Header title={post.frontmatter.title} description={post.excerpt} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </PageLayoutSidebar>
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
