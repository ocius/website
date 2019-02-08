import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/header';

const ContactHeader = styled.div`
  min-height: 180px;
  background-color: #125192;
  margin-bottom: -8px;
`;

const Container = styled.div`
  width: 71%;
  margin: 0 auto;
  padding-top: 90px;
  color: #60d2f6;
`;

const Body = styled.div`
  margin-right: 15px;
`;

const PrimaryContent = styled.div`
  margin: 0 auto;
  font-size: 15px;
  padding-top: 20px;
`;

const ContentTitle = styled.p`
  font-weight: bold;
`;

const Enquiries = styled.div`
  padding-bottom: 20px;
`;

const GeneralEnquires = styled.div`
  min-width: 200px;
`;

const AddressBlog = styled.div`
  padding-bottom: 20px;
`;

const Address = styled.div`
  min-width: 200px;
`;

const SearchBox = styled.div`
  min-width: 350px;
  padding: 15px 20px;
  font-size: 1.2em;
  font-weight: bold;
  background-color: white;
  border-bottom: 7px solid #d4dde1;
  margin-bottom: 30px;
`;

const InputText = styled.input`
  font-size: 16px;
  font-weight: 300;
  padding: 9px;
  border: 0px;
  background: #f2f2f2;
  margin-top: 20px;
  width: 86%;
  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.span`
  &:hover {
    cursor: pointer;
    background-color: #3b3e42;
  }
  padding: 10px 20px;
  background-color: #001826;
`;

const SecondaryContent = styled.div`
  margin: 0 auto;
  margin-right: -15px;
  font-size: 15px;
  padding-top: 20px;
  background-color: #f2f2f2;
`;

const NewsBolg = styled.div`
  min-width: 350px;
  padding: 15px 20px;
  background-color: white;
  border-bottom: 7px solid #d4dde1;
  margin-bottom: 20px;
`;

const LastestNews = styled.div`
  padding-bottom: 15px;
`;

const News = styled.div`
  padding-top: 15px;
  border-bottom: 1px solid #efefef;
`;

const NewsLink = styled(Link)`
  font-size: 1.2em;
  font-weight: bold;
  color: black;
  &:focus,
  &:hover,
  &:visited {
    color: black;
  }
`;

const TitleLink = styled(Link)`
  font-size: 1.2em;
  font-weight: bold;
  color: black;
  &:focus,
  &:hover,
  &:visited {
    color: black;
  }
`;

const NewsExcerpt = styled.div`
  font-size: 1.1em;
  padding-top: 15px;
  font-weight: 300;
`;

const NewsDate = styled.div`
  font-size: 1em;
  padding-top: 5px;
  color: #a3a3a3;
  font-weight: 100;
  padding-bottom: 15px;
`;

export default ({ data }) => {
  const newblogs = data.allMarkdownRemark.edges.slice(0, 3);
  return (
    <Layout>
      <ContactHeader>
        <Container>
          <Header title="Contact" description="Links to contact Ocius" />
        </Container>
      </ContactHeader>
      <Body className="row">
        <PrimaryContent className="col-lg-7 col-md-12">
          <Enquiries className="row">
            <div className="col-lg-3 col-sm-2 col-2" />
            <div className="col-lg-3 col-sm-4 col-10">
              <GeneralEnquires>
                <ContentTitle>For General Enquiries</ContentTitle>
                <p>
                  Phone:
                  <Link to="/contact"> +61 2 9924 6400</Link>
                </p>
                <p>
                  Email:
                  <Link to="/contact"> admin@ocius.com.au</Link>
                </p>
              </GeneralEnquires>
            </div>
            <div className="col-lg-1 col-sm-1 col-2" />
            <div className="col-lg-5 col-sm-5 col-10">
              <div>
                <ContentTitle>For Investment Enquiries</ContentTitle>
                <p>
                  Email:
                  <Link to="/contact"> cosecretary@ocius.com.au</Link>
                </p>
              </div>
            </div>
          </Enquiries>
          <AddressBlog className="row">
            <div className="col-lg-3 col-sm-2 col-2" />
            <div className="col-lg-3 col-sm-4 col-10">
              <Address>
                <ContentTitle>Address:</ContentTitle>
                <p>Ainsworth Building</p>
                <p>University of New South Wales</p>
                <p>Willis Annex</p>
                <p>Kensington NSW 2052</p>
                <p>
                  Phone:
                  <Link to="/contact"> +61 2 9924 6400</Link>
                </p>
              </Address>
            </div>
            <div className="col-lg-1 col-sm-1 col-2" />
            <div className="col-lg-5 col-sm-5 col-10">
              <div>
                <ContentTitle>Postal Address:</ContentTitle>
                <p>Office Box 4304</p>
                <p>Castlecrag</p>
                <p>Australia 2068</p>
              </div>
            </div>
          </AddressBlog>
        </PrimaryContent>
        <SecondaryContent className="col-lg-5 col-md-12 col-12">
          <div className="col-xl-6 col-lg-6">
            <SearchBox>
              Search this site:
              <div>
                <InputText />
                <SearchButton />
              </div>
            </SearchBox>
            <NewsBolg>
              <LastestNews>
                <NewsLink to="/news">Latest News…</NewsLink>
              </LastestNews>
              {newblogs.map(({ node }) => (
                <News key={node.id}>
                  <TitleLink to={node.fields.slug}>
                    <div>{node.frontmatter.title}</div>
                  </TitleLink>
                  <NewsExcerpt>{node.excerpt}</NewsExcerpt>
                  <NewsDate>{node.frontmatter.date}</NewsDate>
                </News>
              ))}
            </NewsBolg>
          </div>
          <div className="col-xl-6 col-lg-6" />
        </SecondaryContent>
      </Body>
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
`;
