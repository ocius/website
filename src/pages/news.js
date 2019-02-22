import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Header from '../components/header';
import Layout from '../layouts/Layout';
import Container from '../components/Container';
import Row from '../components/GridRow';
import Column from '../components/GridColumn';
import RecentNews from '../components/RecentNews';
import Segmented from '../components/Segmented';
import Button from '../components/Button';

export default ({ data }) => {
  return (
    <Layout>
      <Header title="News" description="Ocius blog and news" />
      <section className="page-content">
        <Container>
          <Row>
            <Column className="primary-content" sm={8} md={7} lg={7} fluid>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Segmented>
                  <article key={node.id} className="post">
                    {node.frontmatter.featuredImage && (
                      <div className="img-wrap">
                        <Link to={node.fields.slug}>
                          <Img
                            fixed={node.frontmatter.featuredImage.childImageSharp.fixed}
                            alt={node.frontmatter.title}
                          />
                        </Link>
                      </div>
                    )}
                    <h3>
                      <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                    </h3>
                    <p className="date">{node.frontmatter.date}</p>
                    <p>{node.excerpt}</p>
                    <Button color="gray" size="small" border={false} to={node.fields.slug}>
                      Read More
                    </Button>
                  </article>
                </Segmented>
              ))}
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
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                fixed(width: 700, height: 400) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt(pruneLength: 160)
        }
      }
    }
  }
`;
