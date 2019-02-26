import React from 'react';
import SEO from '../../components/SEO';
import Layout from '../../layouts/Layout';
import Container from '../../components/Container';
import Segmented from '../../components/Segmented';
import Row from '../../components/GridRow';
import Column from '../../components/GridColumn';
import Heading from '../../components/Heading';

// Import all the images
import MarkBethwaite from './Mark-Bethwaite.jpg';
import RobertDane from './Robert-Dane.png';
import BobHawke from './Bob-Hawke.jpg';
import DavidSaxelby from './David-Saxelby.jpg';
import LloydBreckenridge from './Lloyd-Breckenridge.jpg';
import PeterWlodarczyk from './Peter-Wlodarczyk.jpg';
import TraceySharah from './Tracey-Sharah.jpg';

const styles = {
  center: {
    textAlign: 'center'
  }
};

export default () => (
  <Layout>
    <SEO
      title="About"
      description="Our Mission. To supply the world's best unmanned surface vessels with more power, payload and
      performance supporting Defence, Industry and Science personnel to monitor large areas of ocean continuously
      at low cost and with no one in harm's way."
    />
    <Container style={styles.center}>
      <Segmented>
        <Row>
          <Column sm={12} md={8} lg={8} lgShift={2} fluid>
            <Heading level={1} size="huge">
              Our Mission
            </Heading>
            <p>
              To supply the world&apos;s best unmanned surface vessels with more <br />
              <strong>power, payload and performance</strong>
              &nbsp;supporting Defence, Industry and Science personnel to monitor large areas of
              ocean&nbsp;
              <strong>continuously at low cost and with no one in harm&apos;s way.&nbsp;</strong>
            </p>
          </Column>
        </Row>
      </Segmented>
      <Segmented borderBottom="">
        <Heading level={2} size="huge">
          People
        </Heading>
        <Row>
          <Column sm={12} md={4} lg={4} fluid>
            <img src={MarkBethwaite} alt="Mark Bethwaite AM" />
            <Heading level={3} size="medium">
              Mark Bethwaite AM
              <br />
              Chairman
            </Heading>
            <p>
              Now a professional director, Mark has been a shareholder in OCIUS since 2000. He has a
              degree in Engineering and an MBA and has been Managing Director of two large mining
              companies and one of Australia’s leading industry associations.
            </p>
            <p>
              Mark represented Australia in sailing in the 1972 and 1976 Olympic Games and has won
              World Championships in three international classes. Mark was made a Member of the
              Order of Australia (AM) in early 2011 for services to industry and to sailing.
            </p>
          </Column>
          <Column sm={12} md={4} lg={4} fluid>
            <img src={RobertDane} alt="Robert Dane" />
            <Heading level={3} size="medium">
              Robert Dane
              <br />
              Chief Executive Officer
            </Heading>
            <p>
              Robert Dane is founder and CEO. In 1996, Robert, a passionate sailor and
              environmentalist, invented and patented the &apos;solarsail&apos; and designed the
              first ‘solarsailor’ prototype which won the Advanced Technology Boat Race in Canberra
              in 1997.
            </p>
            <p>
              The first commercial &apos;solarsailor&apos; ferry won the Australian Design Award of
              the Year in 2001. Robert is Intel Environment Laureate and a WWF Future Maker
              recipient and was recently honoured to be a finalist for the International Windship
              Awards Lifetime Achievement Award. In 2017, Robert was awarded the Spitfire Memorial
              Defence Association Fellowship.
            </p>
          </Column>
          <Column sm={12} md={4} lg={4} fluid>
            <img src={BobHawke} alt="Bob Hawke" />
            <Heading level={3} size="medium">
              The Hon. Bob Hawke AC
              <br />
              Chairman of Advisory Board
            </Heading>
            <p>
              Hon Bob Hawke was Prime Minister of Australia from 1983 to 1991. He has high-level
              industry and government relations in Australia, China, the USA, and Europe.
            </p>
            <p>He was Chairman of OCIUS (formerly Solar Sailor) for 12 years from 2002 - 2014.</p>
          </Column>
        </Row>
        <Row>
          <Column sm={12} md={3} lg={3} fluid>
            <img src={DavidSaxelby} alt="David Saxelby" />
            <Heading level={3} size="medium">
              David Saxelby
              <br />
              Non-Executive Director
            </Heading>
            <p>
              David is one of the most senior Executives in the Construction and Infrastructure
              Industry in Australia. He has held a number of senior industry positions including
              President and Board member of Australian Constructors Association, Board member of
              Roads Australia, Board member of Infrastructure Partnership Association and Board
              member of Minerals Council of Australia.
            </p>
            <p>
              Listed in the Top 100 Engineers in Australia for the past four years, David currently
              holds a number of board positions and consults extensively within the Industry. Most
              recently with Lend Lease as CEO of Construction and Infrastructure Australia, a $7Bn
              per annum business including Engineering, Building, Services and Capella Capital.
            </p>
          </Column>
          <Column sm={12} md={3} lg={3} fluid>
            <img src={LloydBreckenridge} alt="Lloyd Breckenridge" />
            <Heading level={3} size="medium">
              Lloyd Breckenridge
              <br />
              Chief Engineer
            </Heading>
            <p>
              Lloyd has over 30 years of experience as a software engineer working in varied roles
              for both large organisations and small innovative companies in Australia and overseas.
              The last 6 years has seen him primarily involved in autonomous vehicle development and
              applications. Lloyd was a key member of Team Thunder, who successfully competed in the
              2014 UAV Challenge Outback Rescue competition run by the CSIRO and Queensland
              University of Technology.
            </p>
            <p>
              He has had considerable sailing experience having started sailing at an early age on
              Lake Macquarie. In his current role as Senior Systems Engineer for OCIUS Technology
              Ltd he feels he has found his dream job.
            </p>
          </Column>
          <Column sm={12} md={3} lg={3} fluid>
            <img src={PeterWlodarczyk} alt="Peter Wlodarczyk" />
            <Heading level={3} size="medium">
              Peter Wlodarczyk
              <br />
              Lead Engineer
            </Heading>
            <p>
              Graduating from the University of Newcastle with a BE (Computer Engineering), Peter
              has over 20 years experience as a computer systems/software engineer in defense, IT
              and medical device industries. For the last 15 years, Peter has worked for ResMed as a
              software engineer, system engineer and researcher, innovating new products for sleep
              apnea and respiratory failure.
            </p>
            <p>
              He has developed a keen interest in UAVs, working with Lloyd in a team that
              successfully completed the 2014 UAV Challenge Outback Rescue competition run by the
              CSIRO and Queensland University of Technology.
            </p>
          </Column>
          <Column sm={12} md={3} lg={3} fluid>
            <img src={TraceySharah} alt="Tracey Sharah" />
            <Heading level={3} size="medium">
              Tracey Sharah B.Com CPA DipFP
              <br />
              Group Accountant & Company Secretary
            </Heading>
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
          </Column>
        </Row>
      </Segmented>
      <h2>Partners</h2>
      <h2>Awards</h2>
    </Container>
  </Layout>
);
