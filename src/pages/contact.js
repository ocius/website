import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Header from '../components/header';

const ContactHeader = styled.div`
  min-height: 180px;
  background-color: #125192;
`;

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  padding-top: 90px;
  color: #60d2f6;
`;

const PrimaryContent = styled.div`
  width: 85%;
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

const Address = styled.div`
  padding-bottom: 20px;
`;

export default () => (
  <Layout>
    <ContactHeader>
      <Container>
        <Header title="Contact" description="Links to contact Ocius" />
      </Container>
    </ContactHeader>
    <PrimaryContent>
      <Enquiries className="row">
        <div className="col-sm-6">
          <div>
            <ContentTitle>For General Enquiries</ContentTitle>
            <p>
              Main Phone:
              <Link to="/contact"> +61 2 9924 6400</Link>
            </p>
            <p>
              Email:
              <Link to="/contact"> admin@ocius.com.au</Link>
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div>
            <ContentTitle>For Investment Enquiries</ContentTitle>
            <p>
              Email:
              <Link to="/contact"> cosecretary@ocius.com.au</Link>
            </p>
          </div>
        </div>
      </Enquiries>
      <Address className="row">
        <div className="col-sm-6">
          <div>
            <ContentTitle>Address:</ContentTitle>
            <p>Ainsworth Building</p>
            <p>University of New South Wales</p>
            <p>Willis Annex</p>
            <p>Kensington NSW 2052</p>
            <p>
              Phone:
              <Link to="/contact"> +61 2 9924 6400</Link>
            </p>
          </div>
        </div>
        <div className="col-sm-6">
          <div>
            <ContentTitle>Postal Address:</ContentTitle>
            <p>Office Box 4304</p>
            <p>Castlecrag</p>
            <p>Australia 2068</p>
          </div>
        </div>
      </Address>
    </PrimaryContent>
  </Layout>
);
