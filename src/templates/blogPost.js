import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/Layout';
import Container from '../components/Container';
import Row from '../components/GridRow';
import Column from '../components/GridColumn';
import RecentNews from '../components/RecentNews';
import Header from '../components/header';
import SocialIconButton from '../components/SocialIconButton';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <Header title="News" description={post.excerpt} />
      <section className="page-content">
        <Container>
          <Row>
            <Column className="primary-content" sm={8} md={7} lg={7} fluid>
              <h2 className="title">{post.frontmatter.title}</h2>
              <p className="date">{post.frontmatter.date}</p>
              <p className="author">{post.frontmatter.author}</p>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
              <div className="post-share">
                <h5>Share this post:</h5>
                <SocialIconButton network="email" href="mailto:?subject=&body=" />
                <SocialIconButton
                  network="twitter"
                  href="https://twitter.com/intent/tweet?text=&url=&via="
                />
                <SocialIconButton
                  network="facebook"
                  href="https://www.facebook.com/sharer/sharer.php?u="
                />
                <SocialIconButton href="fb-messenger://share/?link=" network="facebookMessenger" />
                <SocialIconButton network="reddit" href="http://www.reddit.com/submit/?url=" />
              </div>
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
