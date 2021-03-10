import React from 'react';
import { graphql } from 'gatsby';
import { Grid, Row, Col } from 'react-styled-flexboxgrid/src';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import Sidebar from '../components/Sidebar';
import SocialShareContainer from '../components/SocialShareContainer';
import SocialShare from '../components/SocialShare';
import Heading from '../components/Heading';
import { Spacing } from '../components/common';

const BlogPage = ({ data }) => {
  const post = data.markdownRemark;
  const { title, date, author } = post.frontmatter;
  return (
    <Layout>
      <SEO title={title} description={post.excerpt} />
      <section className="page-content">
        <Grid>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <Spacing $value="80px" />
              <Heading level={1} size="huge" weight="thick" underline="left">
                News
              </Heading>
            </Col>
          </Row>
          <Row>
            <Col className="primary-content" xs={12} md={12} lg={7}>
              <Heading className="title" level={2} size="large" weight="thick">
                {title}
              </Heading>
              <p className="date">{date}</p>
              <p className="author">{author}</p>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              {typeof window !== 'undefined' && (
                <SocialShareContainer
                  text={title}
                  url={window.location.href}
                  headingText="Share this post:"
                >
                  {SocialShare}
                </SocialShareContainer>
              )}
            </Col>
            <Col className="secondary-content" xs={12} md={12} lg={4} lgOffset={1}>
              <Sidebar />
            </Col>
          </Row>
        </Grid>
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
        date(formatString: "DD MMMM, YYYY")
        author
      }
      excerpt
    }
  }
`;

export default BlogPage;
