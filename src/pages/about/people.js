import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Segmented from '../../components/Segmented';
import Heading from '../../components/Heading';
import SEO from '../../components/SEO';

const Hero = styled(Row)`
  border-bottom: 1px solid #c7c7c7;
  padding-bottom: 4rem;
  margin-top: 4rem;
`;

const HeroBlock = styled(Col)`
  text-align: left;
  box-sizing: border-box;
  padding: 2rem 5rem;

  & + & {
    border-left: 1px solid #c7c7c7;
  }
`;

const People = ({ data }) => {
  return (
    <>
      <SEO title="Our Mission, Our Culture, People" />
      <Hero>
        <HeroBlock xs={12} md={6} lg={6}>
          <Heading level={2} size="large">
            Our Mission
          </Heading>
          <p>
            Innovative Autonomous Solutions
            <br />
            for
            <br />
            Persistent Maritime Surveillance
          </p>
        </HeroBlock>
        <HeroBlock xs={12} md={6} lg={6}>
          <Heading level={2} size="large">
            Our Culture
          </Heading>
          <p>
            Agile Australian company
            <br />
            Respect for our stakeholders, our team and the ocean environment in which our products
            operate.
            <br />
            Responsibility to our stakeholders, our team and the environment.
            <br />
          </p>
        </HeroBlock>
      </Hero>
      <header id="people" className="centered">
        <Heading level={1} size="huge" underline>
          People
        </Heading>
      </header>
      <Segmented borderBottom="">
        <Row className="primary-content centered">
          <Col xs={12} md={6} lg={3}>
            {data.MarkBethwaite && (
              <Img fixed={data.MarkBethwaite.childImageSharp.fixed} alt="Mark Bethwaite" />
            )}
            <Heading level={3} size="medium">
              Mark Bethwaite
              <br />
              Chairman
            </Heading>
            <div className="left-align">
              <p>
                Now a professional director, Mark has been a shareholder in OCIUS since 2000. He has
                a degree in Engineering and an MBA and has been Managing Director of two large
                mining companies and one of Australia’s leading industry associations.
              </p>
              <p>
                Mark represented Australia in sailing in the 1972 and 1976 Olympic Games and has won
                World Championships in three international classes. Mark was made a Member of the
                Order of Australia (AM) in early 2011 for services to industry and to sailing.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            {data.RobertDane && (
              <Img fixed={data.RobertDane.childImageSharp.fixed} alt="Robert Dane" />
            )}
            <Heading level={3} size="medium">
              Robert Dane
              <br />
              Chief Executive Officer
            </Heading>
            <div className="left-align">
              <p>
                Robert Dane is founder and CEO. In 1996, Robert, a passionate sailor and
                environmentalist, invented and patented the &apos;solarsail&apos; and designed the
                first ‘solarsailor’ prototype which won the Advanced Technology Boat Race in
                Canberra in 1997.
              </p>
              <p>
                The first commercial &apos;solarsailor&apos; ferry won the Australian Design Award
                of the Year in 2001. Robert is Intel Environment Laureate and a WWF Future Maker
                recipient and was recently honoured to be a finalist for the International Windship
                Awards Lifetime Achievement Award. In 2017, Robert was awarded the Spitfire Memorial
                Defence Association Fellowship.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            {data.GeoffZuber && (
              <Img fixed={data.GeoffZuber.childImageSharp.fixed} alt="Geoff Zuber" />
            )}
            <Heading level={3} size="medium">
              Geoff Zuber
              <br />
              Non-Executive Director
            </Heading>
            <div className="left-align">
              <p>
                Well respected for his strategic thinking and passion for business transformation
                programs, Geoff has earned the admiration and respect of many C- level executives
                within leading Australian organisations in both government and private sectors.
              </p>
              <p>
                Part of the founding management team at Holocentric, a Canberra based, he draws upon
                his extensive experience working in sales and in senior management roles for global
                companies such as Honeywell, Microsoft and Cisco Systems to help steer the company
                to success
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            {data.AndrewAitken && (
              <Img fixed={data.AndrewAitken.childImageSharp.fixed} alt="Andrew Aitken" />
            )}
            <Heading level={3} size="medium">
              Andrew Aitken
              <br />
              Director and Ocius Corporate Lawyer
            </Heading>
            <div className="left-align">
              <p>
                Andrew practices principally in the areas of commercial law, succession and estate
                planning. Andrew provides advice on the sale and purchase of businesses and
                companies, corporate governance, risk management and a wide range of issues facing
                SME owners, including intellectual property, shareholder agreements and commercial
                contracts.
              </p>
            </div>
          </Col>
        </Row>
      </Segmented>
      <Segmented borderBottom="">
        <Row className="primary-content centered">
          <Col xs={12} md={6} lg={4}>
            {data.LloydBreckenridge && (
              <Img fixed={data.LloydBreckenridge.childImageSharp.fixed} alt="Lloyd Breckenridge" />
            )}
            <Heading level={3} size="medium">
              Lloyd Breckenridge
              <br />
              Chief Engineer
            </Heading>
            <div className="left-align">
              <p>
                Lloyd has over 30 years of experience as a software engineer working in varied roles
                for both large organisations and small innovative companies in Australia and
                overseas. The last 6 years has seen him primarily involved in autonomous vehicle
                development and applications. Lloyd was a key member of Team Thunder, who
                successfully competed in the 2014 UAV Challenge Outback Rescue competition run by
                the CSIRO and Queensland University of Technology.
              </p>
              <p>
                He has had considerable sailing experience having started sailing at an early age on
                Lake Macquarie. In his current role as Senior Systems Engineer for OCIUS Technology
                Ltd he feels he has found his dream job.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            {data.PeterWlodarczyk && (
              <Img fixed={data.PeterWlodarczyk.childImageSharp.fixed} alt="Peter Wlodarczyk" />
            )}
            <Heading level={3} size="medium">
              Peter Wlodarczyk
              <br />
              Lead Engineer
            </Heading>
            <div className="left-align">
              <p>
                Graduating from the University of Newcastle with a BE (Computer Engineering), Peter
                has over 20 years experience as a computer systems/software engineer in defense, IT
                and medical device industries. For the last 15 years, Peter has worked for ResMed as
                a software engineer, system engineer and researcher, innovating new products for
                sleep apnea and respiratory failure.
              </p>
              <p>
                He has developed a keen interest in UAVs, working with Lloyd in a team that
                successfully completed the 2014 UAV Challenge Outback Rescue competition run by the
                CSIRO and Queensland University of Technology.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            {data.TraceySharah && (
              <Img fixed={data.TraceySharah.childImageSharp.fixed} alt="Tracey Sharah" />
            )}
            <Heading level={3} size="medium">
              Tracey Sharah B.Com CPA DipFP
              <br />
              Group Accountant & Company Secretary
            </Heading>
            <div className="left-align">
              <p>
                Tracey has over 25 years’ experience in corporate and public practice accounting,
                business advisory, tax and superannuation. 17 years of this experience is in running
                her own CPA Public Practice Accounting Firm.
              </p>
              <p>
                Specialising in Company Secretarial and outsourced Corporate Financial Officer
                engagements, Business Taxation, Accounting, Advisory and Self-Managed Superannuation
                Funds. The practice is a 100% sustainable business, adopts the latest accounting and
                tax technology apps and 90% paperless.
              </p>
            </div>
          </Col>
        </Row>
      </Segmented>
    </>
  );
};

export default People;
