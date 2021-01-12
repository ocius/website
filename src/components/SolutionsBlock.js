import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Img from 'gatsby-image';
import Container from './Container';
import Segmented from './Segmented';
import Button from './Button';
import Heading from './Heading';
import { Spacing, AccentRowWrapper } from './common';

const Article = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0.5em;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`;

const List = styled.ul`
  flex: 1;
  margin-top: 0;
`;

export default () => (
  <AccentRowWrapper>
    <Segmented>
      <Container className="page-content">
        <Row className="centered">
          <Col xs={12} md={8} lg={8} mdOffset={2}>
            <Spacing $value="80px" />
            <Heading level={2} size="large" underline="center">
              How Ocius is changing the world
            </Heading>
          </Col>
        </Row>
        <StaticQuery
          query={graphql`
            query {
              DefenceIcon: file(relativePath: { eq: "images/solutions-defence.png" }) {
                ...imageSharpIcons
              }

              OilAndGasIcon: file(relativePath: { eq: "images/solutions-oilandgas.png" }) {
                ...imageSharpIcons
              }

              ScienceIcon: file(relativePath: { eq: "images/solutions-science.png" }) {
                ...imageSharpIcons
              }
            }

            fragment imageSharpIcons on File {
              childImageSharp {
                fixed(width: 199) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          `}
          render={(data) => (
            <Row className="primary-content">
              <Col xs={12} md={6} lg={4}>
                <Article>
                  <Wrapper>
                    {data.DefenceIcon && (
                      <Img fixed={data.DefenceIcon.childImageSharp.fixed} alt="Defence Solutions" />
                    )}
                    <Heading level={3} size="medium" underline="left">
                      Defence
                    </Heading>
                    <List>
                      <li>Anti-Submarine Warfare</li>
                      <li>Intelligence, Surveillance &amp; Reconnaissance</li>
                      <li>Electronic Warfare</li>
                      <li>Mine Counter Measures</li>
                      <li>Gateway Communications</li>
                    </List>

                    <Button color="blue" size="tiny" href="/defence">
                      Find out more
                    </Button>
                  </Wrapper>
                </Article>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Article>
                  <Wrapper>
                    {data.OilAndGasIcon && (
                      <Img
                        fixed={data.OilAndGasIcon.childImageSharp.fixed}
                        alt="Oil and Gas Solutions"
                      />
                    )}
                    <Heading level={3} size="medium" underline="left">
                      Oil &amp; Gas
                    </Heading>
                    <List>
                      <li>Seabed and Pipeline Surveys</li>
                      <li>Environment Monitoring</li>
                      <li>Security</li>
                    </List>

                    <Button color="blue" size="tiny" href="/oil-and-gas">
                      Find out more
                    </Button>
                  </Wrapper>
                </Article>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <Article>
                  <Wrapper>
                    {data.ScienceIcon && (
                      <Img fixed={data.ScienceIcon.childImageSharp.fixed} alt="Science Solutions" />
                    )}
                    <Heading level={3} size="medium" underline="left">
                      Science
                    </Heading>
                    <List>
                      <li>Weather “ground truth“</li>
                      <li>Current profiling</li>
                      <li>Climate Change</li>
                      <li>Hurricane Landfall Prediction</li>
                      <li>Fisheries</li>
                    </List>

                    <Button color="blue" size="tiny" href="/science">
                      Find out more
                    </Button>
                  </Wrapper>
                </Article>
              </Col>
            </Row>
          )}
        />
      </Container>
    </Segmented>
  </AccentRowWrapper>
);
