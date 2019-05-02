import React from 'react';
import { graphql, Link as GatsbyLink } from 'gatsby';
import Img from 'gatsby-image';
import { Row, Col } from 'react-flexbox-grid';
import { OutboundLink } from 'gatsby-plugin-gtag';
import SEO from '../../components/SEO';
import Layout from '../../layouts/Layout';
import Container from '../../components/Container';
import PageHeader from '../../components/PageHeader';
import Segmented from '../../components/Segmented';
import Heading from '../../components/Heading';

export default ({ data }) => (
  <Layout>
    <SEO
      title="About"
      description="Our Mission. To supply the world's best unmanned surface vessels with more power, payload and
      performance supporting Defence, Industry and Science personnel to monitor large areas of ocean continuously
      at low cost and with no one in harm's way."
    />
    <PageHeader>About</PageHeader>
    <Container className="page-content">
      <Segmented>
        <Row className="centered">
          <Col xs={12} md={12} lg={8} lgOffset={2}>
            <Heading level={1} size="huge" underline>
              Our Mission
            </Heading>
            <p>
              Innovative Autonomous Solutions
              <br />
              for
              <br />
              Persistent Maritime Surveillance
              <br />
              so that
              <br />
              Defence, Industry and Science personnel can monitor large areas of ocean
              <br />
              continuously with no one in harm’s way at low cost
            </p>
          </Col>
        </Row>
      </Segmented>
      <Segmented>
        <Row className="centered">
          <Col xs={12} md={12} lg={10} lgOffset={1}>
            <header id="people" className="centered">
              <Heading level={1} size="huge" underline>
                Our Culture
              </Heading>
            </header>
            <p>
              Agile Australian company
              <br />
              Respect for our stakeholders, our team and the ocean environment in which our products
              operate.
              <br />
              Responsibility to our stakeholders, our team and the environment.
              <br />
            </p>
          </Col>
        </Row>
      </Segmented>
      <header id="people" className="centered">
        <Heading level={1} size="huge" underline>
          People
        </Heading>
      </header>
      <Segmented borderBottom="">
        <Row className="primary-content">
          <Col xs={12} md={4} lg={4}>
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
          </Col>
          <Col xs={12} md={4} lg={4}>
            {data.GeoffZuber && (
              <Img fixed={data.GeoffZuber.childImageSharp.fixed} alt="Geoff Zuber" />
            )}
            <Heading level={3} size="medium">
              Geoff Zuber
              <br />
              Non-Executive Director
            </Heading>
            <p>
              Well respected for his strategic thinking and passion for business transformation
              programs, Geoff has earned the admiration and respect of many C- level executives
              within leading Australian organisations in both government and private sectors.
            </p>
            <p>
              Part of the founding management team at Holocentric, a Canberra based, he draws upon
              his extensive experience working in sales and in senior management roles for global
              companies such as Honeywell, Microsoft and Cisco Systems to help steer the company to
              success
            </p>
          </Col>
          <Col xs={12} md={4} lg={4}>
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
          </Col>
        </Row>
      </Segmented>
      <Segmented borderBottom="">
        <Row className="primary-content">
          <Col xs={12} md={4} lg={4}>
            {data.LloydBreckenridge && (
              <Img fixed={data.LloydBreckenridge.childImageSharp.fixed} alt="Lloyd Breckenridge" />
            )}
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
          </Col>
          <Col xs={12} md={4} lg={4}>
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
              and medical device industries. For the last 15 years, Peter has worked for ResMed as a
              software engineer, system engineer and researcher, innovating new products for sleep
              apnea and respiratory failure.
            </p>
            <p>
              He has developed a keen interest in UAVs, working with Lloyd in a team that
              successfully completed the 2014 UAV Challenge Outback Rescue competition run by the
              CSIRO and Queensland University of Technology.
            </p>
          </Col>
          <Col xs={12} md={4} lg={4}>
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
          </Col>
          {/*
          <Col xs={12} md={3} lg={3}>
            {data.AndrewAtkin && (
              <Img fixed={data.AndrewAtkin.childImageSharp.fixed} alt="David Saxelby" />
            )}
            <Heading level={3} size="medium">
              Andrew Atkin
              <br />
              Ocius Corporate Lawyer
            </Heading>
            <p>
              Andrew practices principally in the areas of commercial law, succession and estate
              planning. Andrew provides advice on the sale and purchase of businesses and companies,
              corporate governance, risk management and a wide range of issues facing SME owners,
              including intellectual property, shareholder agreements and commercial contracts.
            </p>
          </Col>
          */}
        </Row>
      </Segmented>
      <header id="partners" className="centered">
        <Heading level={1} size="huge" underline>
          Our Partners
        </Heading>
      </header>
      <Segmented borderBottom="">
        <Row className="primary-content">
          <Col xs={12} md={6} lg={6}>
            {data.AustralianGovernment && (
              <div className="centered">
                <Img
                  style={{ maxWidth: '100%' }}
                  imgStyle={{ objectFit: 'contain' }}
                  fixed={data.AustralianGovernment.childImageSharp.fixed}
                  alt="Australian Government Logotype"
                />
              </div>
            )}
            <p>
              DST Group is a national leader in safeguarding Australia by delivering valued
              scientific advice and innovative solutions for Defence and national security. OCIUS
              Technology Limited was selected for the Capability and Technology Demonstrator Program
              (CTD) in 2015 to develop an Anti-Submarine Warfare Unmanned Surface Vessel (ASW-USV).
              The A$3M contract provided extensive validation of our strategy to draw on proprietary
              technology for the development of long-range, autonomous surveillance and sensing
              platforms. Specifically, it allowed us to develop a high-performance OCIUS Bluebottle
              Unmanned Surface Vessel (USV) coupled with an integrated Thales Australia thin-line
              towed array sonar system. This was demonstrated to NAVY on Aug 10, 2017, and exceeded
              all contract performance measures. OCIUS has been invited to apply for further
              Technology Demonstrator funding under the Defence Innovation Hub program.
            </p>
          </Col>
          <Col xs={12} md={6} lg={6}>
            {data.SteberInternational && (
              <div className="centered">
                <Img
                  style={{ maxWidth: '100%' }}
                  imgStyle={{ objectFit: 'contain' }}
                  fixed={data.SteberInternational.childImageSharp.fixed}
                  alt="Steber International"
                />
              </div>
            )}
            <p>
              Stebercraft International is a leader in Australian boat manufacturing and industrial
              composite technology since 1947. Steber manufactures high-quality boats for fishing,
              charter, patrol, sea rescue, medical support, surveillance and general boating use.
              All Steber boats are individually designed and built to suit their purpose, with a
              quality of manufacture that ensures a long service life and the capability to put to
              sea when many other vessels need to return to port. Steber&apos;s core business of
              composite component manufacture is all undertaken in their climate controlled factory
              ensuring all laminating is carried out within humidity and temperature parameters
              allowing 24-hour production when required. Stebercraft is an Australian owned and
              operated family company with a firm commitment to provide a high-quality product with
              excellent customer service.
            </p>
          </Col>
        </Row>
      </Segmented>
      <Segmented borderBottom="">
        <Row className="primary-content">
          <Col xs={12} md={6} lg={6}>
            {data.Thales && (
              <div className="centered">
                <Img
                  style={{ maxWidth: '100%' }}
                  imgStyle={{ objectFit: 'contain' }}
                  fixed={data.Thales.childImageSharp.fixed}
                  alt="Thales"
                />
              </div>
            )}
            <p>
              Thales is part of a leading international electronics and systems group serving the
              defence, aerospace and space, security, and transport markets in Australia and
              throughout the world.Thales’ expertise ranges across protected mobility vehicles,
              naval support services and integrated communications solutions for defence through to
              air traffic management systems, cybersecurity solutions and transport systems for the
              commercial sector. OCIUS and Thales have paired to demonstrate a low-cost, long-range,
              persistent detection capability that enhances the ability of Navy surface forces to
              detect and track modern submarines and torpedoes at realistic standoff distances.
            </p>
          </Col>
          <Col xs={12} md={6} lg={6}>
            {data.OneTwoThree && (
              <div className="centered">
                <Img
                  style={{ maxWidth: '100%' }}
                  imgStyle={{ objectFit: 'contain' }}
                  fixed={data.OneTwoThree.childImageSharp.fixed}
                  alt="One2three Naval Architects"
                />
              </div>
            )}
            <p>
              One2three naval architects designed our second prototype Bruce’s hull, keel, deck and
              hatches. They are well known in the sailing world as the naval architects who have
              multiple times re-designed “Wild Oats“ the record-breaking maxi and 8 times winner of
              line honours in the Sydney to Hobart yacht race. They will review Bruce’s seakeeping
              ability in a range of conditions to provide several improvements in design, tracking,
              helm, payload bay & performance for the next prototypes.
            </p>
          </Col>
        </Row>
      </Segmented>
      <Segmented borderBottom="">
        <Row className="primary-content">
          <Col xs={12} md={6} lg={6}>
            {data.UNSW && (
              <div className="centered">
                <Img
                  style={{ maxWidth: '100%' }}
                  imgStyle={{ objectFit: 'contain' }}
                  fixed={data.UNSW.childImageSharp.fixed}
                  alt="The University of New South Wales"
                />
              </div>
            )}
            <p>
              UNSW Australia (The University of New South Wales) is one of Australia’s leading
              research and teaching universities. OCIUS have a contract for research into autonomous
              sailing and collision avoidance with the University of New South Wales. UNSW provide
              OCIUS with a design facility in UNSW’s Mechanical Engineering and Robotics Buildings.
              Additionally, OCIUS has hired a software engineer from UNSW, and four students from
              UNSW’s Sunswift solar car team under a scholarship program.
            </p>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="centered">
              <Heading level={3} size="medium">
                Ulladulla Engineering and Fibreglass.
              </Heading>
            </div>
            <p>
              Bruce Heggie and Graham ‘Butch’ Johnson are well known on the NSW South Coast as
              suppliers of innovative machine and fibreglass products. They have supplied fibreglass
              and mechanical engineering since the successful winning of the International boat race
              in 1997. They have provided equipment for all solar sailor ferries, scale models and
              prototypes including our Bluebottles&apos; steering mechanisms, patented rudder
              flipper appendages and patented solarsails & mechanisms.
            </p>
          </Col>
        </Row>
      </Segmented>
      <Segmented borderBottom="">
        <Row className="primary-content">
          <Col xs={12} md={6} lg={6}>
            {data.ClarkIP && (
              <div className="centered">
                <Img
                  style={{ maxWidth: '100%' }}
                  imgStyle={{ objectFit: 'contain' }}
                  fixed={data.ClarkIP.childImageSharp.fixed}
                  alt="Clark IP"
                />
              </div>
            )}
            <p>
              David Clark is a registered Australian and NZ Patent Attorney with 25 years’
              experience in mechanical engineering, mining, medical, software, digital signal
              processing, electronic gaming, plastics, environmental, agricultural machinery and
              more. He has been Solar Sailor’s and OCIUS&apos; patent attourney for over 15 years.
              Prior to founding Clark IP, David successfully managed the patent practices at a major
              first tier law firm and has a strong business acumen so he provides OCIUS with not
              only technically accurate work but also commercially meaningful and relevant advice.
            </p>
            <p>
              Being a keen sailor he brings a unique mix of practical experience and technical
              expertise to OCIUS. We enjoy working collaboratively with David to translate our R&D
              into meaningful and quality patents, registered designs and trademarks.
            </p>
          </Col>
          <Col xs={12} md={6} lg={6}>
            {data.Spitfire && (
              <div className="centered">
                <Img
                  style={{ maxWidth: '100%' }}
                  imgStyle={{ objectFit: 'contain' }}
                  fixed={data.Spitfire.childImageSharp.fixed}
                  alt="The Spitfire Association"
                />
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
              The Spitfire Association has a &apos;living memorial&apos; being the Spitfire Memorial
              Defence Fund which is invested and the interest of which each year goes towards a
              competitive Scholarship and/or Fellowship for Australians doing &apos;research to
              benefit the Defence of Australia&apos;. In 2016, OCIUS was honoured to be awarded
              scholarships for several UNSW students to go towards the design and build of hardware
              for Bluebottle prototype Bruce. In 2017, Robert Dane was honoured to be awarded the
              Spitfire Fellowship for the development of the unique &apos;reel in the keel&apos;
              winch for Bluebottles, enabling a small USV to carry any number of sensors in a
              seaworthy way and deploy and retrieve that sensor to depths of 1 - 140m as desired.
            </p>
          </Col>
        </Row>
      </Segmented>
      <Segmented borderBottom="">
        <Row className="primary-content">
          <Col xs={12} md={12} lg={12}>
            <header id="story">
              <Heading level={1} size="huge" underline className="centered">
                Our Story
              </Heading>
            </header>
            <p>
              Ocius Technology Ltd (formerly known as Solar Sailor Holdings Ltd) is an Australian
              public unlisted company trading since June 1999. Starting with winning the Advanced
              Technology Boat Race in Canberra in 1997, beatng the next solar boat by 5 laps of 6km
              = 30km using a new patented ‘solar sail’ Ocius has a track record of conceiving,
              funding and delivering difficult innovative high-tech award-winning projects on time
              and on budget.
            </p>
            <p>
              Ocius has built multiple ‘solarsailor’ models and prototypes culminating in 6 high-
              tech award winning hybrid electric commercial passenger ferries to international
              classification requirements, which together have carried tens of thousands of
              passengers. Today, four OCIUS hybrid electric ferries run in HK today from Sai Kung to
              Kau Sai Chau 364 days of the year 14 hours a day saving half the fuel of the
              conventional ferries they replaced. Dozens of subcontractors have built, commissioned
              and tested our commercial ferries and tens of thousands of passengers have travelled
              on our ferries without incident.
            </p>
            <p>
              In the last 8 years, Ocius has focused on building multiple unmanned surface vessel
              scale models and working prototypes initially under a DST CTD contract and then a DST
              DIH contract, culminating in participating and exceeding all TPMs at the Autonomous
              Warrior War games in Jervis Bay in November 2019. Ocius is now under its second DST
              Group Innovation contract to build a network of intelligent persistent unmanned
              surface vessels.
            </p>
            <p>
              Solar Sailor built 5 other commercial solar sailor vessels providing valuable
              experience to OCIUS on the commercial maritime and technical applications of its
              technology as well as developing an extensive network of first-class suppliers and
              partners.
            </p>
            <p>
              <strong>Commercial Ferries</strong>
            </p>
            <ul>
              <li>
                <strong>
                  <em>
                    “<a href="/ck63.jpg">SolarSailor</a>
                    ”&nbsp;
                  </em>
                </strong>
                <strong>(Australia).&nbsp;</strong>This vessel was completed in one year and won the
                Australian Design Award of the Year in 2001.
              </li>
              <li>
                <strong>
                  Hong Kong Jockey Club Charities Trust Project (Hong Kong).<em>&nbsp;</em>
                </strong>
                In July 2008, with oil at $140/ barrel, the Hong Kong Jockey Club ordered the
                construction of four&nbsp;
                <a href="/120116-b4-solarsails-outbound-at-sai-kung.jpg">commuter ferries</a>
                &nbsp;to operate a service to transport players, staff and supplies from the
                mainland at Sai Kung to the island of Kau Sai Chau where the HKJC has three 18 hole
                golf courses. The ferries alternate two routes of five and seven mile round trips
                with slow sectors at each end in a 20-minute cycle. Solar Sailor modelling predicted
                substantial savings in fuel consumption compared to the previous ‘standard’ diesel
                ferry service, as well as reductions in emissions.&nbsp; The boats in operation have
                exceeded this since in independent tests since delivery and are still running 14
                hours a day, seven days a week using half the fuel of the previous ferries.
              </li>
              <li>
                <strong>
                  Shanghai World Expo (China).<em>&nbsp;</em>
                </strong>
                After demonstration of the Sydney ferry to Suntech, a Wuxi-based solar panel
                company, in 2009 OCIUS was awarded a contract to design, build and install a 12
                -metre high SolarSail with software integration, on a 250 pax VIP river cruise boat
                vessel,&nbsp;&nbsp;‘
                <em>
                  <GatsbyLink to="/blog/expo-ferry-rides-on-sun-and-wind-using-technology-based-on-the-evolution-of-insects-wings/">
                    Suntech Guoshung
                  </GatsbyLink>
                </em>
                ’ for the World Expo in Shanghai.
              </li>
            </ul>
            <p>
              <strong>Unmanned Surface Vessels</strong>
              <br />
              Following an enquiry from the USA in 2007 for a ‘self-sustaining platform at sea’,
              OCIUS began research into the development of unmanned solar/wind/wave and ballasted
              powered ocean vessels or autonomous unmanned surface vessels. Initially, a 20
              foot&nbsp;manned engineering development model (EDM) proved the &apos;speed of
              advance&apos; in all conditions, adequate power, payload and persistence for a
              sustainable platform able to go to sea for months.
            </p>
            <p>
              In 2014, Solar Sailor changed its name to OCIUS (Latin for &apos;fleet&apos;) to
              reflect an expansion of its patented technologies including the solar sail. With
              Ulladulla Fibreglass and Engineering, OCIUS built multiple scale models for tank and
              lake testing, culminating in the building of the first 10&apos; prototype called
              &apos;Nemo&apos; (Latin for &apos;no one&apos; ie unmanned) which provided significant
              proof of concept of a solar, wind and wave powered USV carrying a significant payload.
            </p>
            <p>
              Based on Nemo&apos;s development, in 2015 OCIUS was awarded a $3M Capability
              Technology Demonstrator (CTD) from Defence Science and Technology Group. This proved a
              significant contract and OCIUS with our partners developed an 18&apos; prototype
              &apos;Bruce&apos; for Antisubmarine Warfare (ASW), which demonstrated to NAVY in
              August 2017.
            </p>
          </Col>
          <Col xs={12} md={12} lg={12}>
            <header id="awards">
              <Heading level={1} size="huge" underline className="centered">
                Awards and Milestones
              </Heading>
            </header>
            <Row>
              <Col xs={12} md={6} lg={6}>
                <p>
                  Ocius has 20 years’ experience developing and commercialising patented technology.
                </p>
                <p>
                  <strong>2019 April</strong> - Successful Seatrials of next-gen 18-foot Bluebottle
                  USV off NSW coast
                </p>
                <p>
                  <strong>2018 Nov</strong> - Success at{' '}
                  <GatsbyLink to="/blog/ocius-demonstrates-man-portable-usv-prototype-at-aw18/">
                    Autonomous Warrior Wargames
                  </GatsbyLink>{' '}
                  with control of two USVs, two UUVs, networking to UK MAPLE C2 system and
                  operations in all conditions during three week wargames.
                </p>
                <p>
                  <strong>2018 Sept</strong> - Awarded{' '}
                  <GatsbyLink to="blog/defence-connect-ocius-technology-awarded-defence-innovation-hub-contract/">
                    $1.6M DST Group Defence Innovation Hub contract
                  </GatsbyLink>{' '}
                  to demonstrate a network of intelligent persistent unmanned surface vessels
                  Australian Maritime Innovation Award: Defence SME - With a $10 000 grant
                </p>
                <p>
                  <strong>2017</strong> - Awarded{' '}
                  <GatsbyLink to="/blog/ocius-wins-maritime-australian-defence-innovation-sme-award/">
                    Australian Maritime Innovation Award: Defence SME
                  </GatsbyLink>{' '}
                  - With a $10 000 grant
                </p>
                <p>
                  <strong>2017</strong>&nbsp;– Awarded Spitfire Memorial Defence Fellowship
                </p>
                <p>
                  <strong>2017</strong> – Successfully completed{' '}
                  <a href="/150914OCIUSCTDPressRelease.pdf">
                    Capability Technology Demonstrator (CTD) Contract
                  </a>{' '}
                  for development of Anti-Submarine Unmanned Surface Vessel (ASW-USV)
                </p>
                <p>
                  <strong>2016</strong> – Finalist{' '}
                  <OutboundLink href="http://wind-ship.org/en/innovation_awards_2016/">
                    Wind Propulsion Technology User Award
                  </OutboundLink>{' '}
                  &amp;{' '}
                  <GatsbyLink to="/blog/wind-propulsion-innovation-award/">
                    Lifetime Achievement Award,{' '}
                  </GatsbyLink>
                  International Windship Association
                </p>
                <p>
                  <strong>2016</strong>&nbsp;–&nbsp;Robert Dane, finalist in the&nbsp;
                  <GatsbyLink to="/blog/wind-propulsion-innovation-award/">
                    Lifetime Achievement Award,&nbsp;
                  </GatsbyLink>
                  International Windship Association
                </p>
                <p>
                  <strong>2016 </strong>- Awarded Spitfire Memorial Defence Scholarship
                </p>
                <p>
                  <strong>2015 </strong>- Build and successful testing of Bluebottle 10’ prototype
                  ‘Nemo’
                </p>
                <p>
                  <strong>2015</strong> –{' '}
                  <GatsbyLink to="/blog/ocius-wins-australian-technology-competition-prize/">
                    Winner Australian Technologies Competition
                  </GatsbyLink>
                  , Best Advanced Manufacturing
                </p>
                <p>
                  <strong>2014</strong>&nbsp;– Sold 100 PAX<em> ‘Sydney SolarSailor’</em> ferry to
                  private buyer
                </p>
                <p>
                  <strong>2013</strong>&nbsp;– Energy Globe Award for Sustainability
                </p>
                <p>
                  <strong>2012</strong>&nbsp;– Robert Dane,&nbsp;
                  <OutboundLink href="http://www.wwf.org.au/?4023/Winners-announced-for-the-WWF-Earth-Hour-Awards">
                    WWF Future Makers Award
                  </OutboundLink>
                </p>
                <p>
                  <strong>2011 </strong>–<strong>&nbsp;</strong>Delivery of the final vessel for
                  HKJC – &apos;<em>Solar Albatross</em>&apos;
                </p>
                <p>
                  <strong>2010</strong> –<strong>&nbsp;</strong>Winner China Seatrade Award – Dalian
                </p>
                <p>
                  <strong>2010 </strong>–<strong>&nbsp;</strong>Delivery of third HK ferry –{' '}
                  <em>‘Solar Eagle’</em>
                </p>
                <p>
                  <strong>2010</strong> –&nbsp;Delivery of second HK ferry – <em>‘Solar Birdie’</em>
                </p>
                <p>
                  <strong>2010 </strong>–<strong>&nbsp;</strong>Winner Environmental Technology
                  Award at the Sustainable Shipping Awards
                </p>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <p>
                  <strong>2010 </strong>–&nbsp;Delivery Shanghai Vessel for World Expo – &apos;
                  <em>Suntech Guoshung</em>&apos;
                </p>
                <p>
                  <strong>2010 </strong>–&nbsp;Delivery first Hong Kong Jockey Club ferry –{' '}
                  <em>‘Solar Golf’</em>
                </p>
                <p>
                  <strong>2009&nbsp;</strong>–<strong>&nbsp;</strong>Contract Schneider Electric for
                  SS HMP190/25 supply and warranty for Hong Kong boats
                </p>
                <p>
                  <strong>2009&nbsp;</strong>–<strong>&nbsp;</strong>Italian Well Tech Design Award
                </p>
                <p>
                  <strong>2007 </strong>–&nbsp;Paper Australian Journal of Mechanical Engineers Vol
                  4 No 2. ISSN: 1448-4846
                </p>
                <p>
                  <strong>2007</strong>&nbsp;–<strong>&nbsp;</strong>Robert Dane&nbsp;
                  <OutboundLink href="http://www.ecocitizenaustralia.com.au/solar-sailor-dr-robert-dane/">
                    Intel Environment Laureate USA
                  </OutboundLink>
                </p>
                <p>
                  <strong>2004</strong>&nbsp;–<strong>&nbsp;</strong>United Nations Awards finalist
                  - Green Ferries for Blue Highways
                </p>
                <p>
                  <strong>2003</strong>&nbsp;–<strong>&nbsp;</strong>Contract Captain Cook Cruises
                  to manage and operate the <em>‘Sydney SolarSailor’</em>
                </p>
                <p>
                  <strong>2002</strong>&nbsp;–<strong>&nbsp;</strong>Hon Bob Hawke Chairman of the
                  Company
                </p>
                <p>
                  <strong>2002</strong>&nbsp;–<strong>&nbsp;</strong>Robert Dane SEDA NSW Green
                  Ambassador
                </p>
                <p>
                  <strong>2001</strong>&nbsp;–<strong>&nbsp;</strong>Winner Australian Design Award
                  of the Year 2001
                </p>
                <p>
                  <strong>2000</strong>&nbsp;–<strong>&nbsp;</strong>
                  <em>‘Sydney SolarSailor’</em> launched
                </p>
                <p>
                  <strong>2000</strong>&nbsp;–<strong>&nbsp;</strong>Winner International Cargo
                  Handling Co-ordination Association Award
                </p>
                <p>
                  <strong>2000</strong>&nbsp;–<strong>&nbsp;</strong>Winner Boating Industry
                  Association of Australia Marine Awards
                </p>
                <p>
                  <strong>1999</strong>&nbsp;–<strong>&nbsp;</strong>Winner Far Eastern Economic
                  Review/Du Pont Asian Innovation Award
                </p>
                <p>
                  <strong>1997</strong>&nbsp;–<strong>&nbsp;</strong>Winner Advanced Technology Boat
                  Race Canberra – <em>‘Marjorie K’</em> prototype.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Segmented>
    </Container>
  </Layout>
);

export const query = graphql`
  query getImages {
    RobertDane: file(relativePath: { eq: "pages/about/Robert-Dane.png" }) {
      ...imageSharpAvatar
    }

    BobHawke: file(relativePath: { eq: "pages/about/Bob-Hawke.jpg" }) {
      ...imageSharpAvatar
    }

    GeoffZuber: file(relativePath: { eq: "pages/about/Geoff-Zuber.png" }) {
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

    AndrewAtkin: file(relativePath: { eq: "pages/about/Andrew-Atkin.png" }) {
      ...imageSharpAvatar
    }

    AustralianGovernment: file(relativePath: { eq: "pages/about/australiangovernment.png" }) {
      ...imageSharpLogotype
    }

    SteberInternational: file(relativePath: { eq: "pages/about/Steber-International.jpg" }) {
      ...imageSharpLogotype
    }

    Thales: file(relativePath: { eq: "pages/about/thales-logo.png" }) {
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
