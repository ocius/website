import React from 'react';
import { Link, graphql } from 'gatsby';
import { Grid, Container } from 'semantic-ui-react';
import Layout from '../components/layout';
import Header from '../components/header';
import '../styles/global.css';

export default ({ data }) => (
  <Layout>
    <Header title="Contact" description="Links to contact Ocius" />

    <div className="container-body ">
      <Grid columns={3} stackable className="container-contact-main">
        <Grid.Row>
          <Grid.Column width={5} className="padding">
            <Container>
              <strong>
                <p> For General Inquiries</p>
              </strong>
              <p>
                {' '}
                Main Phone:{' '}
                <a className="phone-link" href="tel:+61 2 9924 6400">
                  +61 2 9924 6400
                </a>
              </p>

              <p>
                {' '}
                Email:{' '}
                <a className="email-link" href="mailto:admin@ocius.com.au">
                  admin@ocius.com.au
                </a>
              </p>
              <br />
              <strong>
                <p> Address:</p>
              </strong>
              <p> Ainsworth Building</p>
              <p>University of New South Wales</p>
              <p>Willis Annex</p>
              <p>Kensington NSW 2052</p>

              <p>
                Phone:{' '}
                <a className="phone-link" href="tel:+61 2 9924 6400">
                  +61 2 9924 6400
                </a>
              </p>
            </Container>
          </Grid.Column>
          <Grid.Column width={5} className="padding">
            <Container>
              <strong>
                <p>For Investment Enquiries</p>
              </strong>
              <p>
                {' '}
                Email:{' '}
                <a className="email-link" href="mailto:cosecretary@ocius.com.au">
                  admin@ocius.com.au
                </a>{' '}
              </p>
              <br />
              <strong>
                <p> Postal Address:</p>
              </strong>
              <p> Office Box 4304</p>
              <p>Castlecrag</p>
              <p> Australia 2068</p>
            </Container>
          </Grid.Column>

          <Grid.Column width={4} floated="right" className="container-contact-right">
            <Grid.Column width={4} className="container-contact-right-items" divided="vertically">
              <h3> Latest News... </h3>
              <br />
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                  <Link to={node.fields.slug} style={{ color: 'black' }}>
                    <h3>{node.frontmatter.title}</h3>
                  </Link>
                  <br />
                  <p>{node.excerpt}</p>
                  <p>{node.frontmatter.date}</p>
                  <br />
                  <br />
                  <br />
                </div>
              ))}
            </Grid.Column>
          </Grid.Column>
          <Grid.Column width={2} className="container-contact-right" />
        </Grid.Row>
      </Grid>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
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
`;
