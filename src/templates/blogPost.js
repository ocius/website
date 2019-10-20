import React from 'react';
import { graphql } from 'gatsby';
import { Row, Col } from 'react-flexbox-grid';
import Layout from '../layouts/Layout';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import Container from '../components/Container';
import Sidebar from '../components/Sidebar';
import SocialShareContainer from '../components/SocialShareContainer';
import SocialShare from '../components/SocialShare';
import Heading from '../components/Heading';

export default ({ data }) => {
  const post = data.markdownRemark;
  const { title, date, author } = post.frontmatter;
  return (
    <Layout>
      <SEO title={title} description={post.excerpt} />
      <PageHeader>News</PageHeader>
      <section className="page-content">
        <Container>
          <Row>
            <Col className="primary-content" xs={12} md={7} lg={7}>
              <Heading className="title" level={2} size="large">
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
            <Col className="secondary-content" xs={12} md={5} lg={4} lgOffset={1}>
              <Sidebar />
            </Col>
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
        date(formatString: "DD MMMM, YYYY")
        author
      }
      excerpt
    }
  }
`;
