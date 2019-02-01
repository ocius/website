import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <Header title={post.frontmatter.title} description={post.excerpt}/>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
