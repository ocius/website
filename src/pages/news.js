import React from 'react';
import { Link, graphql } from 'gatsby';
import Header from '../components/header';
import Layout from '../layouts/Layout';
import Container from '../components/Container';
import Row from '../components/GridRow';
import Column from '../components/GridColumn';
import RecentNews from '../components/RecentNews';

const styles = {
  post: {
    borderBottom: '1px solid #efefef',
    marginBottom: '10px'
  },
  readMore: {
    display: 'inline-block',
    padding: '8px 15px',
    fontWeight: '500',
    textTransform: 'capitalize',
    margin: '0 0 15px',
    background: '#efefef',
    color: '#7a96a2',
    borderRadius: '3px',
    transition: '.2s linear',

    ':hover': {
      background: '#003859',
      textDecoration: 'none',
      color: '#fff'
    }
  }
};

export default ({ data }) => {
  return (
    <Layout>
      <Header title="News" description="Ocius blog and news" />
      <section className="page-content">
        <Container>
          <Row>
            <Column className="primary-content" sm={8} md={7} lg={7} fluid>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <article key={node.id} className="post" style={styles.post}>
                  <h3>
                    <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                  </h3>
                  <p className="date">{node.frontmatter.date}</p>
                  <p>{node.excerpt}</p>
                  <Link style={styles.readMore} to={node.fields.slug}>
                    Read More
                  </Link>
                </article>
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
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
