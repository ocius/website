import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import Container from '../components/Container';
import Row from '../components/GridRow';
import Column from '../components/GridColumn';
import RecentNews from '../components/RecentNews';
import Header from '../components/header';
import SocialShareContainer from '../components/SocialShareContainer';
import SocialShare from '../components/SocialShare';

export default ({ data }) => {
  const post = data.markdownRemark;
  const { title, date, author } = post.frontmatter;
  return (
    <Layout>
      <Header title="News" description={post.excerpt} />
      <section className="page-content">
        <Container>
          <Row>
            <Column className="primary-content" sm={8} md={7} lg={7} fluid>
              <h2 className="title">{title}</h2>
              <p className="date">{date}</p>
              <p className="author">{author}</p>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <SocialShareContainer
                text={title}
                url={window.location.href}
                headingText="Share this post:"
              >
                {SocialShare}
              </SocialShareContainer>
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
