import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";

export default ({ data }) => {
  return (
    <Layout>
      <Header title="News" description="Ocius blog and news"/>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title} <span> — {node.frontmatter.date} </span>
            </h3>
          </Link>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
