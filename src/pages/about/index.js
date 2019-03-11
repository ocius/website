import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../../components/SEO';
import Layout from '../../layouts/Layout';
import Container from '../../components/Container';
import Segmented from '../../components/Segmented';
import Row from '../../components/GridRow';
import Column from '../../components/GridColumn';
import Heading from '../../components/Heading';

const styles = {
  wrapper: {
    fontSize: '17px',
    paddingRight: '30px'
  }
};

const TextWrapper = ({ props, children }) => (
  <div style={styles.wrapper} {...props}>
    {children}
  </div>
);

TextWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default ({ data }) => (
  <Layout>
    <SEO
      title="About"
      description="Our Mission. To supply the world's best unmanned surface vessels with more power, payload and
      performance supporting Defence, Industry and Science personnel to monitor large areas of ocean continuously
      at low cost and with no one in harm's way."
    />
    <Container>
      <Segmented>
        <Row className="centered">
          <Column sm={12} md={8} lg={8} lgShift={2} fluid>
            <Heading level={1} size="huge" underline>
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
      <header className="centered">
        <Heading level={3} size="large">
          People
        </Heading>
      </header>
      <Segmented borderBottom="">
        <Row>
          <Column sm={12} md={4} lg={4} fluid>
            <TextWrapper>
              {data.MarkBethwaite && (
                <Img fixed={data.MarkBethwaite.childImageSharp.fixed} alt="Mark Bethwaite AM" />
              )}
              <Heading level={3} size="medium">
                Mark Bethwaite AM
                <br />
                Chairman
              </Heading>
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
            </TextWrapper>
          </Column>
          <Column sm={12} md={4} lg={4} fluid>
            <TextWrapper>
              {data.RobertDane && (
                <Img fixed={data.RobertDane.childImageSharp.fixed} alt="Robert Dane" />
              )}
              <Heading level={3} size="medium">
                Robert Dane
                <br />
                Chief Executive Officer
              </Heading>
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
            </TextWrapper>
          </Column>
          <Column sm={12} md={4} lg={4} fluid>
            <TextWrapper>
              {data.BobHawke && <Img fixed={data.BobHawke.childImageSharp.fixed} alt="Bob Hawke" />}
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
            </TextWrapper>
          </Column>
        </Row>
      </Segmented>
      <Segmented borderBottom="">
        <Row>
          <Column sm={12} md={3} lg={3} fluid>
            <TextWrapper>
              {data.DavidSaxelby && (
                <Img fixed={data.DavidSaxelby.childImageSharp.fixed} alt="David Saxelby" />
              )}
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
                Listed in the Top 100 Engineers in Australia for the past four years, David
                currently holds a number of board positions and consults extensively within the
                Industry. Most recently with Lend Lease as CEO of Construction and Infrastructure
                Australia, a $7Bn per annum business including Engineering, Building, Services and
                Capella Capital.
              </p>
            </TextWrapper>
          </Column>
          <Column sm={12} md={3} lg={3} fluid>
            <TextWrapper>
              {data.LloydBreckenridge && (
                <Img
                  fixed={data.LloydBreckenridge.childImageSharp.fixed}
                  alt="Lloyd Breckenridge"
                />
              )}
              <Heading level={3} size="medium">
                Lloyd Breckenridge
                <br />
                Chief Engineer
              </Heading>
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
            </TextWrapper>
          </Column>
          <Column sm={12} md={3} lg={3} fluid>
            <TextWrapper>
              {data.PeterWlodarczyk && (
                <Img fixed={data.PeterWlodarczyk.childImageSharp.fixed} alt="Peter Wlodarczyk" />
              )}
              <Heading level={3} size="medium">
                Peter Wlodarczyk
                <br />
                Lead Engineer
              </Heading>
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
            </TextWrapper>
          </Column>
          <Column sm={12} md={3} lg={3} fluid>
            <TextWrapper>
              {data.TraceySharah && (
                <Img fixed={data.TraceySharah.childImageSharp.fixed} alt="Tracey Sharah" />
              )}
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
            </TextWrapper>
          </Column>
        </Row>
      </Segmented>
      <header className="centered">
        <Heading level={3} size="large">
          Our Partners
        </Heading>
      </header>
      <Segmented borderBottom="">
        <Row>
          <Column sm={12} md={6} lg={6} fluid>
            <TextWrapper>
              {data.AustralianGovernment && (
                <div className="centered">
                  <Img
                    fixed={data.AustralianGovernment.childImageSharp.fixed}
                    alt="Australian Government Logotype"
                  />
                </div>
              )}
              <p>
                DST Group is a national leader in safeguarding Australia by delivering valued
                scientific advice and innovative solutions for Defence and national security. OCIUS
                Technology Limited was selected for the Capability and Technology Demonstrator
                Program (CTD) in 2015 to develop an Anti-Submarine Warfare Unmanned Surface Vessel
                (ASW-USV). The A$3M contract provided extensive validation of our strategy to draw
                on proprietary technology for the development of long-range, autonomous surveillance
                and sensing platforms. Specifically, it allowed us to develop a high-performance
                OCIUS Bluebottle Unmanned Surface Vessel (USV) coupled with an integrated Thales
                Australia thin-line towed array sonar system. This was demonstrated to NAVY on Aug
                10, 2017, and exceeded all contract performance measures. OCIUS has been invited to
                apply for further Technology Demonstrator funding under the Defence Innovation Hub
                program.
              </p>
            </TextWrapper>
          </Column>
          <Column sm={12} md={6} lg={6} fluid>
            <TextWrapper>
              {data.SteberInternational && (
                <div className="centered">
                  <Img
                    fixed={data.SteberInternational.childImageSharp.fixed}
                    alt="Steber International"
                  />
                </div>
              )}
              <p>
                Stebercraft International is a leader in Australian boat manufacturing and
                industrial composite technology since 1947. Steber manufactures high-quality boats
                for fishing, charter, patrol, sea rescue, medical support, surveillance and general
                boating use. All Steber boats are individually designed and built to suit their
                purpose, with a quality of manufacture that ensures a long service life and the
                capability to put to sea when many other vessels need to return to port.
                Steber&apos;s core business of composite component manufacture is all undertaken in
                their climate controlled factory ensuring all laminating is carried out within
                humidity and temperature parameters allowing 24-hour production when required.
                Stebercraft is an Australian owned and operated family company with a firm
                commitment to provide a high-quality product with excellent customer service.
              </p>
            </TextWrapper>
          </Column>
        </Row>
      </Segmented>
      <Segmented borderBottom="">
        <Row>
          <Column sm={12} md={6} lg={6} fluid>
            <TextWrapper>
              {data.Thales && (
                <div className="centered">
                  <Img fixed={data.Thales.childImageSharp.fixed} alt="Thales" />
                </div>
              )}
              <p>
                Thales is part of a leading international electronics and systems group serving the
                defence, aerospace and space, security, and transport markets in Australia and
                throughout the world.Thales’ expertise ranges across protected mobility vehicles,
                naval support services and integrated communications solutions for defence through
                to air traffic management systems, cybersecurity solutions and transport systems for
                the commercial sector. OCIUS and Thales have paired to demonstrate a low-cost,
                long-range, persistent detection capability that enhances the ability of Navy
                surface forces to detect and track modern submarines and torpedoes at realistic
                standoff distances.
              </p>
            </TextWrapper>
          </Column>
          <Column sm={12} md={6} lg={6} fluid>
            <TextWrapper>
              {data.OneTwoThree && (
                <div className="centered">
                  <Img
                    fixed={data.OneTwoThree.childImageSharp.fixed}
                    alt="One2three Naval Architects"
                  />
                </div>
              )}
              <p>
                One2three naval architects designed our second prototype Bruce’s hull, keel, deck
                and hatches. They are well known in the sailing world as the naval architects who
                have multiple times re-designed “Wild Oats“ the record-breaking maxi and 8 times
                winner of line honours in the Sydney to Hobart yacht race. They will review Bruce’s
                seakeeping ability in a range of conditions to provide several improvements in
                design, tracking, helm, payload bay & performance for the next prototypes.
              </p>
            </TextWrapper>
          </Column>
        </Row>
      </Segmented>
      <Segmented borderBottom="">
        <Row>
          <Column sm={12} md={6} lg={6} fluid>
            <TextWrapper>
              {data.UNSW && (
                <div className="centered">
                  <Img
                    fixed={data.UNSW.childImageSharp.fixed}
                    alt="The University of New South Wales"
                  />
                </div>
              )}
              <p>
                UNSW Australia (The University of New South Wales) is one of Australia’s leading
                research and teaching universities. OCIUS have a contract for research into
                autonomous sailing and collision avoidance with the University of New South Wales.
                UNSW provide OCIUS with a design facility in UNSW’s Mechanical Engineering and
                Robotics Buildings. Additionally, OCIUS has hired a software engineer from UNSW, and
                four students from UNSW’s Sunswift solar car team under a scholarship program.
              </p>
            </TextWrapper>
          </Column>
          <Column sm={12} md={6} lg={6} fluid>
            <TextWrapper>
              <div className="centered">
                <Heading level={3} size="medium">
                  Ulladulla Engineering and Fibreglass.
                </Heading>
              </div>
              <p>
                Bruce Heggie and Graham ‘Butch’ Johnson are well known on the NSW South Coast as
                suppliers of innovative machine and fibreglass products. They have supplied
                fibreglass and mechanical engineering since the successful winning of the
                International boat race in 1997. They have provided equipment for all solar sailor
                ferries, scale models and prototypes including our Bluebottles&apos; steering
                mechanisms, patented rudder flipper appendages and patented solarsails & mechanisms.
              </p>
            </TextWrapper>
          </Column>
        </Row>
      </Segmented>
      <Segmented borderBottom="">
        <Row>
          <Column sm={12} md={6} lg={6} fluid>
            <TextWrapper>
              {data.ClarkIP && (
                <div className="centered">
                  <Img fixed={data.ClarkIP.childImageSharp.fixed} alt="Clark IP" />
                </div>
              )}
              <p>
                David Clark is a registered Australian and NZ Patent Attorney with 25 years’
                experience in mechanical engineering, mining, medical, software, digital signal
                processing, electronic gaming, plastics, environmental, agricultural machinery and
                more. He has been Solar Sailor’s and OCIUS&apos; patent attourney for over 15 years.
                Prior to founding Clark IP, David successfully managed the patent practices at a
                major first tier law firm and has a strong business acumen so he provides OCIUS with
                not only technically accurate work but also commercially meaningful and relevant
                advice.
              </p>
              <p>
                Being a keen sailor he brings a unique mix of practical experience and technical
                expertise to OCIUS. We enjoy working collaboratively with David to translate our R&D
                into meaningful and quality patents, registered designs and trademarks.
              </p>
            </TextWrapper>
          </Column>
          <Column sm={12} md={6} lg={6} fluid>
            <TextWrapper>
              {data.Spitfire && (
                <div className="centered">
                  <Img fixed={data.Spitfire.childImageSharp.fixed} alt="The Spitfire Association" />
                </div>
              )}
              <p>
                During the Second World War Australian service men and women played a vital role in
                every theatre of the conflict, leading to the successful Allied outcome in 1945. The
                Spitfire Association, founded by many of these men and women, remains strong to this
                day. The spirit of camaraderie, service and enjoyment of life is a hallmark of the
                Association, bound together by a love of this iconic aeroplane the Spitfire.
              </p>
              <p>
                The Spitfire Association has a &apos;living memorial&apos; being the Spitfire
                Memorial Defence Fund which is invested and the interest of which each year goes
                towards a competitive Scholarship and/or Fellowship for Australians doing
                &apos;research to benefit the Defence of Australia&apos;. In 2016, OCIUS was
                honoured to be awarded scholarships for several UNSW students to go towards the
                design and build of hardware for Bluebottle prototype Bruce. In 2017, Robert Dane
                was honoured to be awarded the Spitfire Fellowship for the development of the unique
                &apos;reel in the keel&apos; winch for Bluebottles, enabling a small USV to carry
                any number of sensors in a seaworthy way and deploy and retrieve that sensor to
                depths of 1 - 140m as desired.
              </p>
            </TextWrapper>
          </Column>
        </Row>
      </Segmented>
      <h2>Awards</h2>
    </Container>
  </Layout>
);

export const query = graphql`
  query getImages {
    MarkBethwaite: file(relativePath: { eq: "pages/about/Mark-Bethwaite.jpg" }) {
      ...imageSharpAvatar
    }

    RobertDane: file(relativePath: { eq: "pages/about/Robert-Dane.png" }) {
      ...imageSharpAvatar
    }

    BobHawke: file(relativePath: { eq: "pages/about/Bob-Hawke.jpg" }) {
      ...imageSharpAvatar
    }

    DavidSaxelby: file(relativePath: { eq: "pages/about/David-Saxelby.jpg" }) {
      ...imageSharpAvatar
    }

    LloydBreckenridge: file(relativePath: { eq: "pages/about/Lloyd-Breckenridge.jpg" }) {
      ...imageSharpAvatar
    }

    PeterWlodarczyk: file(relativePath: { eq: "pages/about/Peter-Wlodarczyk.jpg" }) {
      ...imageSharpAvatar
    }

    TraceySharah: file(relativePath: { eq: "pages/about/Tracey-Sharah.jpg" }) {
      ...imageSharpAvatar
    }

    AustralianGovernment: file(relativePath: { eq: "pages/about/australiangovernment.png" }) {
      ...imageSharpLogotype
    }

    SteberInternational: file(relativePath: { eq: "pages/about/Steber-International.jpg" }) {
      ...imageSharpLogotype
    }

    Thales: file(relativePath: { eq: "pages/about/thales-logo.jpg" }) {
      ...imageSharpLogotype
    }

    OneTwoThree: file(relativePath: { eq: "pages/about/One-Two-Three-Naval-Architects.jpg" }) {
      ...imageSharpLogotype
    }

    UNSW: file(relativePath: { eq: "pages/about/UNSW.jpg" }) {
      ...imageSharpLogotype
    }

    ClarkIP: file(relativePath: { eq: "pages/about/Clark-IP-Logo.png" }) {
      ...imageSharpLogotype
    }

    Spitfire: file(relativePath: { eq: "pages/about/Spitfire-Assoc-Logo.jpg" }) {
      ...imageSharpLogotype
    }
  }

  fragment imageSharpAvatar on File {
    childImageSharp {
      fixed(width: 200) {
        ...GatsbyImageSharpFixed
      }
    }
  }

  fragment imageSharpLogotype on File {
    childImageSharp {
      fixed(width: 550) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;
