import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Container from '../components/Container';
import Row from '../components/GridRow';
import Column from '../components/GridColumn';
import RecentNews from '../components/RecentNews';
import Heading from '../components/Heading';
import Segmented from '../components/Segmented';
import Button from '../components/Button';

export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title="News"
        description="Ocius technology Ltd is building a new network of renewable energy powered unmanned surface
        vessels and today launched a &#8216;man-portable&#8217; version of the Bluebottle USV. &#8220;We&#8217;ve
        had a number of enquiries for small self sustaining USVs that can be deployed easily from a deck or beach."
      />
      <PageHeader>News</PageHeader>
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
                            fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                            alt={node.frontmatter.title}
                          />
                        </Link>
                      </div>
                    )}
                    <Heading level="3" size="medium">
                      <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                    </Heading>
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
                fluid(maxWidth: 700, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
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
