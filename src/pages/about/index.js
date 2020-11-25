import React from 'react';
import { graphql, Link as GatsbyLink } from 'gatsby';
import { Router } from '@reach/router';
import { Col, Row } from 'react-flexbox-grid';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-gtag';
import SEO from '../../components/SEO';
import Layout from '../../layouts/Layout';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import NavTabs from '../../components/Tabs/NavTabs';
import NavTab from '../../components/Tabs/NavTab';
import Segmented from '../../components/Segmented';
import HeroBlock from '../../components/HeroBlock';
import NewsletterForm from '../../components/NewsletterForm';
import SocialIconButton from '../../components/SocialIconButton';
import Spacing from '../../components/Spacing';
import mq from '../../common/mq';

// Import logo background
import LogoBackground from './images/ocius-logo-transparent.png';

const Awards = ({ data }) => {
  return (
    <>
      <SEO title="Awards and Milestones" />
      <Segmented borderBottom="">
        <Container className="page-content">
          <Row>
            <Col xs={12} md={12} lg={12}>
              <header id="awards">
                <Heading level={1} size="large" underline="center" className="centered">
                  Awards and Milestones
                </Heading>
              </header>
              <Row>
                <Col xs={12} md={6} lg={6}>
                  <p>
                    Ocius has 20 years’ experience developing and commercialising patented
                    technology.
                  </p>
                  <br />
                  <p>
                    <strong>2020</strong> – AMSA approval to operate Bluebottles autonomously in the
                    EEZ
                  </p>
                  <p>
                    <strong>2020</strong> – $5.5M Australian Defence Innovation Hub contract to
                    build 5 Bluebottles for operations off WA and NT in 2021
                  </p>
                  <p>
                    <strong>2019</strong> – Successful Seatrials of next-gen 18-foot Bluebottle USV
                    off NSW coast, including participation in Summerfest on Jervis Bay
                  </p>
                  <p>
                    <strong>2018</strong> – Success at{' '}
                    <GatsbyLink to="/blog/ocius-demonstrates-man-portable-usv-prototype-at-aw18/">
                      Autonomous Warrior Wargames
                    </GatsbyLink>{' '}
                    with control of two USVs, two UUVs, networking to UK MAPLE C2 system and
                    operations in all conditions during three week wargames.
                  </p>
                  <p>
                    <strong>2018</strong> – Awarded{' '}
                    <GatsbyLink to="blog/defence-connect-ocius-technology-awarded-defence-innovation-hub-contract/">
                      $1.6M DST Group Defence Innovation Hub contract
                    </GatsbyLink>{' '}
                    to demonstrate a network of intelligent persistent unmanned surface vessels
                    Australian Maritime Innovation Award: Defence SME - With a $10 000 grant
                  </p>
                  <p>
                    <strong>2017</strong> –{' '}
                    <GatsbyLink to="/blog/ocius-wins-maritime-australian-defence-innovation-sme-award/">
                      Australian Maritime Innovation Award: Defence SME Innovation Grant
                    </GatsbyLink>
                  </p>
                  <p>
                    <strong>2017</strong>&nbsp;– Robert Dane Spitfire Memorial Defence Fellowship
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
                      Lifetime Achievement Award
                    </GatsbyLink>
                    , International Windship Association
                  </p>
                  <p>
                    <strong>2016</strong> – Robert Dane, finalist in the{' '}
                    <GatsbyLink to="/blog/wind-propulsion-innovation-award/">
                      Lifetime Achievement Award
                    </GatsbyLink>
                    , International Windship Association
                  </p>
                  <p>
                    <strong>2016</strong> – Awarded Spitfire Memorial Defence Scholarship
                  </p>
                  <p>
                    <strong>2015</strong> – Build and successful testing of Bluebottle 10’ prototype
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
                    <strong>2014</strong> – Sold 100 PAX <em>‘Sydney SolarSailor’</em> ferry to
                    private buyer
                  </p>
                  <p>
                    <strong>2013</strong> – Energy Globe Award for Sustainability
                  </p>
                  <p>
                    <strong>2012</strong> – Robert Dane,&nbsp;
                    <OutboundLink href="http://www.wwf.org.au/?4023/Winners-announced-for-the-WWF-Earth-Hour-Awards">
                      WWF Future Makers Award
                    </OutboundLink>
                  </p>
                  <p>
                    <strong>2011</strong> – Delivery of the final vessel for HKJC –{' '}
                    <em>‘Solar Albatross’</em>
                  </p>
                  <p>
                    <strong>2010</strong> – Winner China Seatrade Award – Dalian
                  </p>
                  <p>
                    <strong>2010</strong> – Delivery of third HK ferry – <em>‘Solar Eagle’</em>
                  </p>
                  <p>
                    <strong>2010</strong> – Delivery of second HK ferry – <em>‘Solar Birdie’</em>
                  </p>
                  <p>
                    <strong>2010</strong> – Winner Environmental Technology Award at the Sustainable
                    Shipping Awards
                  </p>
                </Col>
                <Col xs={12} md={6} lg={6}>
                  {data.Awards && (
                    <figure>
                      <Img
                        fluid={data.Awards.childImageSharp.fluid}
                        alt="Robert Dane receiving the Intel Tech Award 2007"
                      />
                      <figcaption>Robert Dane receiving the Intel Tech Award 2007.</figcaption>
                    </figure>
                  )}
                  <br />
                  <p>
                    <strong>2010</strong> – Delivery Shanghai Vessel for World Expo –{' '}
                    <em>‘Suntech Guoshung’</em>
                  </p>
                  <p>
                    <strong>2010</strong> – Delivery first Hong Kong Jockey Club ferry –{' '}
                    <em>‘Solar Golf’</em>
                  </p>
                  <p>
                    <strong>2009</strong> – Contract Schneider Electric for SS HMP190/25 supply and
                    warranty for Hong Kong boats
                  </p>
                  <p>
                    <strong>2009</strong> – Italian Well Tech Design Award
                  </p>
                  <p>
                    <strong>2007</strong> – Paper Australian Journal of Mechanical Engineers Vol 4
                    No 2. ISSN: 1448-4846
                  </p>
                  <p>
                    <strong>2007</strong> – Robert Dane{' '}
                    <OutboundLink href="http://www.ecocitizenaustralia.com.au/solar-sailor-dr-robert-dane/">
                      Intel Environment Laureate USA
                    </OutboundLink>
                  </p>
                  <p>
                    <strong>2004</strong> – United Nations Awards finalist - Green Ferries for Blue
                    Highways
                  </p>
                  <p>
                    <strong>2003</strong> – Contract Captain Cook Cruises to manage and operate the{' '}
                    <em>‘Sydney SolarSailor’</em>
                  </p>
                  <p>
                    <strong>2002</strong> – Hon Bob Hawke Chairman of the Company
                  </p>
                  <p>
                    <strong>2002</strong> – Robert Dane SEDA NSW Green Ambassador
                  </p>
                  <p>
                    <strong>2001</strong> – Winner Australian Design Award of the Year 2001
                  </p>
                  <p>
                    <strong>2000</strong> – <em>‘Sydney SolarSailor’</em> launched
                  </p>
                  <p>
                    <strong>2000</strong> – Winner International Cargo Handling Co-ordination
                    Association Award
                  </p>
                  <p>
                    <strong>2000</strong> – Winner Boating Industry Association of Australia Marine
                    Awards
                  </p>
                  <p>
                    <strong>1999</strong> – Winner Far Eastern Economic Review/Du Pont Asian
                    Innovation Award
                  </p>
                  <p>
                    <strong>1997</strong> – Winner Advanced Technology Boat Race Canberra –{' '}
                    <em>‘Marjorie K’</em> prototype.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Segmented>
    </>
  );
};

const Partners = ({ data }) => {
  return (
    <>
      <SEO title="Our Partners" />
      <header id="partners" className="centered">
        <Heading level={2} size="large" underline="center">
          Our Partners
        </Heading>
      </header>
      <Segmented borderBottom="">
        <LogoBackgroundWrapper>
          <Container className="page-content">
            <Row className="primary-content">
              <Col xs={12} md={4} lg={4}>
                {data.DefenceInnovationHub && (
                  <div className="centered">
                    <Img
                      style={{ maxWidth: '100%' }}
                      imgStyle={{ objectFit: 'contain' }}
                      fixed={data.DefenceInnovationHub.childImageSharp.fixed}
                      alt="Defence Innovation Hub"
                    />
                  </div>
                )}
                <Heading level={3} size="medium">
                  Defence Innovation Hub
                </Heading>
                <p>
                  The Defence Innovation Hub is an initiative of the 2016 Defence Industry Policy
                  Statement and will invest around $640 million over the decade to 2025-26 in
                  maturing and further developing technologies that have moved from the early
                  science stages into the engineering and development stages of the innovation
                  process. It is an exciting initiative that will pull together research
                  institutions, academia, industry and innovative technologies. The Defence
                  Innovation Hub facilitates innovation activities from initial concept, through
                  prototyping and integrated testing.
                </p>
                <SubHeading>www.innovationhub.defence.gov.au</SubHeading>
                <Button
                  type="outbound"
                  href="https://www.innovationhub.defence.gov.au"
                  size="small"
                  color="blue"
                  customStyles={{ maxWidth: '100%' }}
                >
                  Visit website
                </Button>
              </Col>
              <Col xs={12} md={4} lg={4}>
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
                <Heading level={3} size="medium">
                  Department of Defence
                </Heading>
                <p>
                  DST Group is a national leader in safeguarding Australia by delivering valued
                  scientific advice and innovative solutions for Defence and national security.
                  OCIUS Technology Limited was selected for the Capability and Technology
                  Demonstrator Program (CTD) in 2015 to develop an Anti-Submarine Warfare Unmanned
                  Surface Vessel (ASW-USV). The A$3M contract provided extensive validation of our
                  strategy to draw on proprietary technology for the development of long-range,
                  autonomous surveillance and sensing platforms. Specifically, it allowed us to
                  develop a high-performance OCIUS Bluebottle Unmanned Surface Vessel (USV) coupled
                  with an integrated Thales Australia thin-line towed array sonar system. This was
                  demonstrated to NAVY on Aug 10, 2017, and exceeded all contract performance
                  measures. OCIUS has been invited to apply for further Technology Demonstrator
                  funding under the Defence Innovation Hub program.
                </p>
                <SubHeading>www.defence.gov.au</SubHeading>
                <Button
                  type="outbound"
                  href="https://www.defence.gov.au"
                  size="small"
                  color="blue"
                  customStyles={{ maxWidth: '100%' }}
                >
                  Visit website
                </Button>
              </Col>
              <Col xs={12} md={4} lg={4}>
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
                <Heading level={3} size="medium">
                  The University of New South Wales
                </Heading>
                <p>
                  UNSW Australia (The University of New South Wales) is one of Australia’s leading
                  research and teaching universities. OCIUS have a contract for research into
                  intelligent networks and machine learning with the University of New South Wales.
                  UNSW provide OCIUS with a Research &amp; Development facility in UNSW’s Randwick
                  Campus. Additionally, OCIUS hires multiple computer science and mechatronics
                  engineers from UNSW, and students from UNSW under intern programs.
                </p>
                <SubHeading>www.unsw.edu.au</SubHeading>
                <Button
                  type="outbound"
                  href="https://www.unsw.edu.au"
                  size="small"
                  color="blue"
                  customStyles={{ maxWidth: '100%' }}
                >
                  Visit website
                </Button>
              </Col>
            </Row>
            <Row className="primary-content">
              <Col xs={12} md={4} lg={4}>
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
                <Heading level={3} size="medium">
                  Thales
                </Heading>
                <p>
                  Thales develops, manufactures and exports world leading underwater sonar sensors
                  and towed arrays in Australia. Since 2013 Thales has had an ongoing contribution
                  to the OCIUS project combining its advanced underwater sensors with OCIUS
                  autonomous Bluebottle USV to demonstrate the capability of autonomous maritime
                  surveillance. Thales is the maritime lead for the Trusted Autonomous Systems
                  Defence Co-operative Research Centre.
                </p>
                <SubHeading>www.thalesgroup.com</SubHeading>
                <Button
                  type="outbound"
                  href="https://www.thalesgroup.com"
                  size="small"
                  color="blue"
                  customStyles={{ maxWidth: '100%' }}
                >
                  Visit website
                </Button>
              </Col>
              <Col xs={12} md={4} lg={4}>
                {data.VanMunsterBoats && (
                  <div className="centered">
                    <Img
                      style={{ maxWidth: '100%' }}
                      imgStyle={{ objectFit: 'contain' }}
                      fixed={data.VanMunsterBoats.childImageSharp.fixed}
                      alt="Thales"
                    />
                  </div>
                )}
                <Heading level={3} size="medium">
                  Van Munster Boats
                </Heading>
                <p>
                  Van Munster Boats is a second-generation family-run business at the forefront of
                  building carbon fibre hulls and structures for race yachts
                </p>
                <p>
                  VMB work with the best composite engineers and industry&apos;s leading naval
                  architect’s to turn original conception into reality.
                </p>
                <p>
                  They deliver products that meet the highest standards and their processes and
                  applied technologies are continually refined and developed to deliver “state of
                  the art” solutions.
                </p>
                <p>
                  Van Munster Boats composite production facility is based in Morisset NSW Australia
                  and features an oven for high-temperature cure of pre-preg composites and
                  post-curing laminates, a climate-controlled laminating area that ensures that
                  components are of of the highest quality and consistency and a CNC machine so
                  composite components can be custom manufactured quickly and to the highest
                  standard.
                </p>
                <p>The team at Van Munster Boats turn Ocius&apos; vision into a reality.</p>
                <SubHeading>www.vanmunsterboats.com</SubHeading>
                <Button
                  type="outbound"
                  href="https://www.vanmunsterboats.com"
                  size="small"
                  color="blue"
                  customStyles={{ maxWidth: '100%' }}
                >
                  Visit website
                </Button>
              </Col>
              <Col xs={12} md={4} lg={4}>
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
                <Heading level={3} size="medium">
                  Stebercraft International
                </Heading>
                <p>
                  Stebercraft International is a leader in Australian boat manufacturing and
                  industrial composite technology since 1947. Steber manufactures high-quality boats
                  for fishing, charter, patrol, sea rescue, medical support, surveillance and
                  general boating use. All Steber boats are individually designed and built to suit
                  their purpose, with a quality of manufacture that ensures a long service life and
                  the capability to put to sea when many other vessels need to return to port.
                  Steber&apos;s core business of composite component manufacture is all undertaken
                  in their climate controlled factory ensuring all laminating is carried out within
                  humidity and temperature parameters allowing 24-hour production when required.
                  Stebercraft is an Australian owned and operated family company with a firm
                  commitment to provide a high-quality product with excellent customer service.
                </p>
                <SubHeading>www.steber.com.au</SubHeading>
                <Button
                  type="outbound"
                  href="https://www.steber.com.au"
                  size="small"
                  color="blue"
                  customStyles={{ maxWidth: '100%' }}
                >
                  Visit website
                </Button>
              </Col>
            </Row>
          </Container>
        </LogoBackgroundWrapper>
        <Container className="page-content">
          <Row className="primary-content">
            <Col xs={12} md={4} lg={4}>
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
              <Heading level={3} size="medium">
                One2three Naval Architects
              </Heading>
              <p>
                One2three naval architects designed our second prototype Bruce’s hull, keel, deck
                and hatches. They are well known in the sailing world as the naval architects who
                have multiple times re-designed “Wild Oats“ the record-breaking maxi and 8 times
                winner of line honours in the Sydney to Hobart yacht race. They will review Bruce’s
                seakeeping ability in a range of conditions to provide several improvements in
                design, tracking, helm, payload bay &amp; performance for the next prototypes.
              </p>
              <SubHeading>www.one2three.com.au</SubHeading>
              <Button
                type="outbound"
                href="https://www.one2three.com.au"
                size="small"
                color="blue"
                customStyles={{ maxWidth: '100%' }}
              >
                Visit website
              </Button>
            </Col>
            <Col xs={12} md={4} lg={4}>
              {data.Ullandulla && (
                <div className="centered">
                  <Img
                    style={{ maxWidth: '100%' }}
                    imgStyle={{ objectFit: 'contain' }}
                    fixed={data.Ullandulla.childImageSharp.fixed}
                    alt="Ulladulla Engineering and Fibreglass"
                  />
                </div>
              )}
              <Heading level={3} size="medium">
                Ulladulla Engineering and Fibreglass
              </Heading>
              <p>
                Bruce Heggie and Graham ‘Butch’ Johnson are well known on the NSW South Coast as
                suppliers of innovative machine and fibreglass products. They have supplied
                fibreglass and mechanical engineering since the successful winning of the
                International boat race in 1997. They have provided equipment for all solar sailor
                ferries, scale models and prototypes including our Bluebottles&apos; steering
                mechanisms, patented rudder flipper appendages and patented solarsails &amp;
                mechanisms.
              </p>
              <SubHeading>
                Unit 2/Lot 339 Aroo Road,
                <br />
                Ulladulla NSW 2539
                <br />
                (02) 4455 2574
              </SubHeading>
            </Col>
            <Col xs={12} md={4} lg={4}>
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
              <Heading level={3} size="medium">
                Clark IP
              </Heading>
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
                expertise to OCIUS. We enjoy working collaboratively with David to translate our
                R&amp;D into meaningful and quality patents, registered designs and trademarks.
              </p>
              <SubHeading>www.clarkip.com.au</SubHeading>
              <Button
                type="outbound"
                href="https://www.clarkip.com.au"
                size="small"
                color="blue"
                customStyles={{ maxWidth: '100%' }}
              >
                Visit website
              </Button>
            </Col>
          </Row>
          <Row className="primary-content">
            <Col xs={12} md={4} lg={4}>
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
              <Heading level={3} size="medium">
                The Spitfire Association
              </Heading>
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
              <SubHeading>www.spitfireassociation.com</SubHeading>
              <Button
                type="outbound"
                href="https://www.spitfireassociation.com"
                size="small"
                color="blue"
                customStyles={{ maxWidth: '100%' }}
              >
                Visit website
              </Button>
            </Col>
          </Row>
        </Container>
      </Segmented>
    </>
  );
};

const OurStory = ({ data }) => {
  return (
    <>
      <SEO title="The Ocius Story" />
      <header id="story">
        <Heading level={1} size="large" underline="center" className="centered">
          The Ocius Story
        </Heading>
      </header>
      <Container className="page-content">
        <Row className="primary-content">
          <Col xs={12} md={6} lg={6}>
            <Heading level={3} size="medium">
              The beginning
            </Heading>
            <p>
              Ocius Technology Ltd (formerly Solar Sailor Holdings Ltd) is an Australian public
              unlisted company with Research and Development facilities at the University of NSW.
            </p>

            <p>
              In 1997, Solar Sailor won the Advanced Technology Boat Race in Canberra, beating the
              next solar boat by 5 laps of 6km (30km) using a new patented &apos;solar sail&apos; -
              a simple device which harnesses both solar and wind energy in a seaworthy manner.
            </p>

            <p>
              Since then, the company has proven a solid track record of conceiving, funding, and
              delivering difficult, innovative, high-tech, award-winning projects on time and on
              budget.
            </p>

            <p>
              The company has built multiple &apos;solarsailor&apos; prototypes and six high-tech,
              award winning, hybrid electric, commercial passenger ferries to international
              classification requirements, which together have carried tens of thousands of
              passengers. Today, four &apos;solarsailor&apos; hybrid electric ferries operated by
              the Hong Kong Jockey Club operate 364 days of year, 14 hours a day, from Sai Kung to
              Kau Sai Chau using half the fuel of the ferries they replaced.
            </p>
          </Col>
          <Col xs={12} md={6} lg={6}>
            {data.Robert && (
              <figure>
                <Img fluid={data.Robert.childImageSharp.fluid} alt="Robert Dane" />
                <figcaption>
                  Above: Robert Dane CEO and founder of Ocius Technology pty ltd
                </figcaption>
              </figure>
            )}
          </Col>
        </Row>
        <Row className="primary-content">
          <Col xs={12} md={12} lg={12}>
            <blockquote>
              In 2014, Solar Sailor changed its name to OCIUS (Latin for ‘fleet’) to reflect an
              expansion of its patented technologies and a pivot in direction for the company.
            </blockquote>
          </Col>
        </Row>
        <Row className="primary-content">
          <Col xs={12} md={6} lg={6}>
            {data.Nemo && (
              <figure>
                <Img
                  fluid={data.Nemo.childImageSharp.fluid}
                  alt="Ocean research prototype vessel Nemo"
                />
                <figcaption>
                  Ocean research prototype vessel ‘Nemo’ patrols Sydney Harbour Circa 2007.
                </figcaption>
              </figure>
            )}
            {data.OciusTeam && (
              <figure>
                <Img
                  fluid={data.OciusTeam.childImageSharp.fluid}
                  alt="Ocius Team wins Innovation award for BlueBottle Bruce 2017"
                />
                <figcaption>
                  Ocius Team wins Innovation award for BlueBottle ‘Bruce’ 2017.
                </figcaption>
              </figure>
            )}
            {data.Award && (
              <figure>
                <Img
                  fluid={data.Award.childImageSharp.fluid}
                  alt="CEO Robert Dane accepts design award from the Honerable Christopher Pyne at APAC2017"
                />
                <figcaption>
                  CEO Robert Dane accepts design award from the Honerable Christopher Pyne at
                  APAC2017.
                </figcaption>
              </figure>
            )}
          </Col>
          <Col xs={12} md={6} lg={6}>
            <Heading level={3} size="medium">
              Unmanned Surface Vessels
            </Heading>

            <p>
              Following an enquiry from the USA in 2007 for a ‘platform that could go to sea
              forever’, the company began research into the development of unmanned solar/wind/wave
              powered ocean vessels or autonomous unmanned surface vessels. Initially, a 20-foot
              manned engineering development model (EDM) proved ‘speed of advance’ in all
              conditions, adequate power, payload and persistence for a sustainable platform to go
              to sea for months.
            </p>

            <p>
              OCIUS built multiple scale models for tank and lake testing, culminating in the
              building of the first 10’ prototype called ‘Nemo’ (Latin for ‘no one’ i.e. unmanned)
              which provided significant proof of concept of a solar, wind and wave powered USV
              carrying a significant payload.
            </p>

            <p>
              Based on Nemo’s development, in 2015, OCIUS was awarded a Capability Technology
              Demonstrator (CTD) from Defence Science and Technology Group. This proved a
              significant contract and OCIUS partnered with Thales to develop an 18’ prototype
              ‘Bruce’ for Antisubmarine Warfare (ASW), which was successfully demonstrated to the
              NAVY in August 2017.
            </p>

            <p>
              In Sept 2018, Ocius was awarded its second defence contract under the Defence
              Innovation Hub to build an intelligent “Command and Control (C2) network” of
              intelligent persistent unmanned surface vessels.
            </p>

            <p>
              In November 2019 ‘Bruce’ participated Autonomous Warrior War games in Jervis Bay. Due
              to extreme weather, ‘Bruce’ was often the only USV operating. Ocius’ intelligent C2
              system was used to control another Navy WAMV catamaran and 2 DSTG UUVs.
            </p>

            <p>
              From May - June 2019, Ocius completed 6 week endurance and intelligent networking
              trials in a designated AMSA approved ‘box’ off the NSW Coast, successfully completing
              the DIH contract 3 months ahead of schedule.
            </p>

            <p>
              In 2020 Ocius was awarded a $5.5M contract to build 5 next generation Bluebottles
              doing 3 different applications in 3 different areas of operations off WA and NT over
              the next 2 years. Ocius is continuing its work with Thales, testing new Thales thin
              line arrays deployed from the Bluebottle keel winch to significant and varying depths.
              Ocius is also working with UNSW and the NSW Government Defence Innovation Network and
              Charles Darwin University on various areas of Research and Development.
            </p>
          </Col>
        </Row>
        <Row className="primary-content">
          <Col xs={12} md={12} lg={12}>
            <blockquote>
              SolarSailor vessel was completed in one year and won the Australian Design Award of
              the Year in 2001.
            </blockquote>
          </Col>
        </Row>
        <Row className="primary-content">
          <Col xs={12} md={6} lg={6}>
            <Heading level={3} size="medium">
              History of Commercial Ferries
            </Heading>

            <p>
              From 2000 -2012, Solar Sailor built 6 commercial solar sailor vessels providing
              valuable experience to OCIUS on the commercial maritime and technical applications of
              its technology as well as developing an extensive network of first-class suppliers and
              partners.
            </p>

            <p>
              <strong>“SolarSailor” (Australia).</strong> This vessel was completed in one year to
              be ready for the Sydney Olympics and won the Australian Design Award of the Year in
              2001.
            </p>
            <p>
              <strong>Hong Kong Jockey Club Charities Trust Project (Hong Kong).</strong> In July
              2008, with oil at $140/ barrel, the Hong Kong Jockey Club ordered the construction of
              four commuter ferries to operate a service to transport players, staff and supplies
              from the mainland at Sai Kung to the island of Kau Sai Chau where the HKJC has three
              18 hole golf courses. The ferries alternate two routes of five and seven mile round
              trips with slow sectors at each end in a 20-minute cycle. Solar Sailor modelling
              predicted substantial savings in fuel consumption compared to the previous ‘standard’
              diesel ferry service, as well as reductions in emissions. The boats in operation have
              exceeded this since in independent tests since delivery and are still running 14 hours
              a day, seven days a week using half the fuel of the previous ferries.
            </p>
            <p>
              <strong>Shanghai World Expo (China).</strong> After demonstration of the Sydney ferry
              to Suntech, a Wuxi-based solar panel company, in 2009 OCIUS was awarded a contract to
              design, build and install a 12 -metre high SolarSail with software integration, on a
              250 pax VIP river cruise boat vessel,&nbsp;‘
              <GatsbyLink to="/blog/expo-ferry-rides-on-sun-and-wind-using-technology-based-on-the-evolution-of-insects-wings/">
                Suntech Guoshung
              </GatsbyLink>
              ’ for the World Expo in Shanghai.
            </p>
            <p>
              In 2014, Solar Sailor sold it’s commercial ferry the Sydney Solar Sailor and changed
              its name to OCIUS (Latin for ‘fleet’) to reflect an expansion of its patented
              technologies and a pivot in direction for the company from commercial hybrid ferries
              to uncrewed vessels.
            </p>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <figure>
              {data.SolarSailor && (
                <Img
                  fluid={data.SolarSailor.childImageSharp.fluid}
                  alt="Solar Sailor Vessel that was awarded Australian Design Award of the Year in 2001"
                />
              )}
              <br />
              {data.SolarSails && (
                <Img
                  fluid={data.SolarSails.childImageSharp.fluid}
                  alt="SolarSailor vessel that operates as a commercial ferry in Hong Kong"
                />
              )}
              <figcaption>
                <strong>Top:</strong> Solar Sailor Vessel that was awarded Australian Design Award
                of the Year in 2001.
                <br />
                <strong>Above:</strong> SolarSailor vessel that operates as a commercial ferry in
                Hong Kong.
              </figcaption>
            </figure>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const SubHeading = styled.p`
  color: #4ab4e6;
  margin-top: 0;
`;

const LogoBackgroundWrapper = styled.div`
  background-image: url(${LogoBackground});
  background-repeat: no-repeat;
  background-position: center right;
`;

const AccentRowWrapper = styled.div`
  background-color: #edf7fc;
  overflow: hidden;

  &:before {
    content: '';
    position: relative;
    left: 0;
    top: 0;
    float: left;
    display: block;
    height: 4rem;
    width: 100vw;
    background: hsla(0, 0%, 100%, 0.5);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 70 500 60' preserveAspectRatio='none'%3E%3Crect x='0' y='0' width='500' height='500' style='stroke: none; fill: %23edf7fc;' /%3E%3Cpath d='M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z' style='stroke: none; fill: %23ffffff;'%3E%3C/path%3E%3C/svg%3E");
    background-size: 100% 100%;
  }
`;

const People = ({ data }) => {
  return (
    <>
      <SEO title="Our Mission, Our Culture, People" />
      <header id="people" className="centered">
        <Heading level={2} size="large" underline="center">
          The team behind Ocius
        </Heading>
      </header>

      <LogoBackgroundWrapper>
        <Container className="page-content">
          <Row className="primary-content">
            <Col xs={12} md={6} lg={6}>
              {data.MarkBethwaite && (
                <Img fixed={data.MarkBethwaite.childImageSharp.fixed} alt="Mark Bethwaite AM" />
              )}
              <Heading level={3} size="medium">
                Mark Bethwaite AM
              </Heading>
              <SubHeading>Chairman</SubHeading>
              <div className="left-align">
                <p>
                  Mark has a degree in Engineering and an MBA and has been CEO of two large mining
                  companies and one of Australia’s leading industry associations. Mark represented
                  Australia in sailing in the 1972 and 1976 Olympic Games and has won World
                  Championships in three international classes. Mark was made a Member of the Order
                  of Australia (AM) in early 2011 for services to industry and to sailing.
                </p>
                <p>
                  Mark has been a shareholder in OCIUS since 2000. He In 2013 he ably took over as
                  Chairman from the Hon Bob Hawke, adding his invaluable skills to the board and our
                  team.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              {data.RobertDane && (
                <Img fixed={data.RobertDane.childImageSharp.fixed} alt="Robert Dane" />
              )}
              <Heading level={3} size="medium">
                Robert Dane
              </Heading>
              <SubHeading>Chief Executive Officer</SubHeading>
              <div className="left-align">
                <p>
                  Robert Dane is founder and CEO. In 1996, Robert, a passionate sailor and
                  environmentalist, invented and patented the &apos;solarsail&apos; and designed the
                  first &apos;solarsailor&apos; prototype which won the Advanced Technology Boat
                  Race in Canberra in 1997.
                </p>
                <p>
                  In 2001, the first commercial &apos;solarsailor&apos; ferry using the technology
                  won the Australian Design Award of the Year. Robert is Intel Environment Laureate
                  2007, the WWF Future Maker 2012 and in 2017 Robert was awarded the Spitfire
                  Memorial Defence Association Fellowship. He leads a great team of engineers.
                </p>
              </div>
              <SocialIconButton
                network="linkedIn"
                href="https://www.linkedin.com/in/robert-dane-3796a1/"
              />
            </Col>
            <Col xs={12} md={6} lg={6}>
              {data.AndrewAitken && (
                <Img fixed={data.AndrewAitken.childImageSharp.fixed} alt="Andrew Aitken" />
              )}
              <Heading level={3} size="medium">
                Andrew Aitken
              </Heading>
              <SubHeading>Director and Ocius Corporate Lawyer</SubHeading>
              <div className="left-align">
                <p>
                  Andrew practices principally in the areas of commercial law, succession and estate
                  planning. Andrew provides advice on the sale and purchase of businesses and
                  companies, corporate governance, risk management and a wide range of issues facing
                  SME owners, including intellectual property, shareholder agreements and commercial
                  contracts.
                </p>
              </div>
              <SocialIconButton
                network="linkedIn"
                href="https://www.linkedin.com/in/andrew-aitken-b199934b/"
              />
            </Col>
            <Col xs={12} md={6} lg={6}>
              {data.RickTurner && (
                <Img fixed={data.RickTurner.childImageSharp.fixed} alt="Rick Turner" />
              )}
              <Heading level={3} size="medium">
                Rick Turner
              </Heading>
              <SubHeading>Director</SubHeading>
              <div className="left-align">
                <p>
                  Rick has a strong background at operational and senior management level in the
                  Australian manufacturing sector. He has identified, evaluated and successfully
                  implemented new equipment and technology from Europe and the USA. He has also
                  worked in Asia in GPS related industries.
                </p>
                <p>
                  A shareholder in Solar Sailor then Ocius since 2011, Rick has been a consistent
                  supporter of Ocius and brings to the Board his considerable manufacturing and
                  innovation skill set.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </LogoBackgroundWrapper>

      <AccentRowWrapper>
        <Container className="page-content">
          <Row className="primary-content">
            <Col xs={12} md={6} lg={4}>
              {data.LloydBreckenridge && (
                <Img
                  fixed={data.LloydBreckenridge.childImageSharp.fixed}
                  alt="Lloyd Breckenridge"
                />
              )}
              <Heading level={3} size="medium">
                Lloyd Breckenridge
              </Heading>
              <SubHeading>Chief Engineer</SubHeading>
              <div className="left-align">
                <p>
                  Lloyd has over 30 years of experience as a software engineer working in varied
                  roles for both large organisations and small innovative companies in Australia and
                  overseas. Lloyd was a key member of Team Thunder, who successfully competed in the
                  2014 UAV Challenge Outback Rescue competition run by the CSIRO and Queensland
                  University of Technology.
                </p>
                <p>
                  He has had considerable sailing experience having started sailing at an early age
                  on Lake Macquarie. In his current role as Chief Engineer for OCIUS Technology Ltd
                  he feels he has found his dream job.
                </p>
              </div>
              <SocialIconButton
                network="linkedIn"
                href="https://www.linkedin.com/in/lloydbreckenridge/"
              />
            </Col>
            <Col xs={12} md={6} lg={4}>
              {data.PeterWlodarczyk && (
                <Img fixed={data.PeterWlodarczyk.childImageSharp.fixed} alt="Peter Wlodarczyk" />
              )}
              <Heading level={3} size="medium">
                Peter Wlodarczyk
              </Heading>
              <SubHeading>Lead Engineer</SubHeading>
              <div className="left-align">
                <p>
                  Graduating from the University of Newcastle with a BE (Computer Engineering),
                  Peter has over 20 years experience as a computer systems/software engineer in
                  defense, IT and medical device industries. For the last 15 years, Peter has worked
                  for ResMed as a software engineer, system engineer and researcher, innovating new
                  products for sleep apnea and respiratory failure.
                </p>
                <p>
                  He has developed a keen interest in UAVs, working with Lloyd in a team that
                  successfully completed the 2014 UAV Challenge Outback Rescue competition run by
                  the CSIRO and Queensland University of Technology. Peter’s current role is Ocius
                  Lead Software Engineer Peter running a team of software engineers and research
                  projects.
                </p>
              </div>
              <SocialIconButton
                network="linkedIn"
                href="https://www.linkedin.com/in/peter-wlodarczyk/"
              />
            </Col>
            <Col xs={12} md={6} lg={4}>
              {data.ScottElliceFlint && (
                <Img fixed={data.ScottElliceFlint.childImageSharp.fixed} alt="Scott Ellice-Flint" />
              )}
              <Heading level={3} size="medium">
                Scott Ellice-Flint
              </Heading>
              <SubHeading>Group Accountant &amp; Company Secretary</SubHeading>
              <div className="left-align">
                <p>
                  Scott has over 40 years experience as a Chartered Accountant. As principal of his
                  own practice, Scott has focused on accounting, taxation and business development
                  advice for small to medium enterprises ensuring compliance and commercial
                  outcomes. Scott has been Ocius Gp Accountant and Company Secretary since
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </AccentRowWrapper>
    </>
  );
};

const HeroSubheading = styled.p`
  color: #2d4355;
  font-size: 1.5em;
  line-height: 1.2;
`;

const FloatingImage = styled(Img)`
  position: absolute !important;
  top: 150px;
  right: 0;
  z-index: 10;
  @media (max-width: ${mq.max[768]}) {
    opacity: 0;
    z-index: -999;
  }
`;

export default ({ data }) => {
  return (
    <Layout>
      <SEO
        title="About"
        description="Our Mission. To supply the world's best unmanned surface vessels with more power, payload and
      performance."
      />
      {data.HeroBackground && (
        <HeroBlock image={data.HeroBackground.childImageSharp.fluid} masked scrim="blue">
          <Row id="hero">
            <Col xs={12} md={6} lg={5}>
              <Spacing xs="50px" />
              <Heading level={1} size="huge" weight="thick" header underline="left">
                About Ocius
              </Heading>
              <HeroSubheading>
                Find out about the history behind Ocius and the support network that has helped
                along the journey.
              </HeroSubheading>
              <Spacing xs="100px" md="280px" />
            </Col>
          </Row>
          <Row className="centered">
            <Col xs={12} md={4} lg={4} mdOffset={1}>
              <Heading
                level={3}
                color="white"
                size="large"
                weight="thick"
                underline="center"
                shadow
              >
                Our Culture
              </Heading>
              <Heading color="white" shadow>
                We are an agile Australian company that respects our stakeholders, our team and the
                ocean environment in which our products operate.
              </Heading>
            </Col>
            <Col xs={12} md={4} lg={4} mdOffset={2}>
              <Heading
                level={3}
                color="white"
                size="large"
                weight="thick"
                underline="center"
                shadow
              >
                Our Mission
              </Heading>
              <Heading color="white" shadow>
                To develop innovative, autonomous solutions for persistent maritime surveillance.
              </Heading>
            </Col>
          </Row>
        </HeroBlock>
      )}
      {data.SolarSail && (
        <FloatingImage fixed={data.SolarSail.childImageSharp.fixed} alt="Solar Sail" />
      )}
      <NavTabs>
        <NavTab label="People" to="about#people" />
        <NavTab label="Our Partners" to="about/partners#partners" />
        <NavTab label="Our Story" to="about/our-story#story" />
        <NavTab label="Awards" to="about/awards#awards" />
      </NavTabs>
      <Router>
        <People path="about" data={data} />
        <Partners path="about/partners" data={data} />
        <Awards path="about/awards" data={data} />
        <OurStory path="about/our-story" data={data} />
      </Router>
      <Segmented borderBottom="">
        <NewsletterForm />
      </Segmented>
      <Segmented borderBottom="">
        <Container className="page-content">
          <Heading level={3} color="#36BBE7" size="large" weight="thick" underline="left">
            Contact Us
          </Heading>
          <Row>
            <Col xs={12} md={3} lg={3}>
              <p>
                <strong>Ocius Headquarters</strong>
                <br />
                Building R13
                <br />
                UNSW Randwick Campus
                <br />
                22 King St, Randwick NSW 2031
              </p>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <p>
                <strong>Postal Address</strong>
                <br />
                Mail PO Box 4304 Castlecrag
                <br />
                NSW 2068
              </p>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <p>
                <strong>General Enquiries:</strong>
                <br />
                +61 2 9924 6400
                <br />
                contact@ocius.com.au
              </p>
            </Col>
            <Col xs={12} md={3} lg={3}>
              <p>
                <strong>Open Hours:</strong>
                <br />
                Mon - Fri: 9am - 5pm
                <br />
                Sat - Sun: Closed
              </p>
            </Col>
          </Row>
        </Container>
      </Segmented>
    </Layout>
  );
};

export const query = graphql`
  query getAboutPageData {
    HeroBackground: file(relativePath: { eq: "pages/about/images/ocius-about-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    SolarSail: file(relativePath: { eq: "pages/about/images/solar-sail.png" }) {
      childImageSharp {
        fixed(quality: 100, width: 441) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    OciusLogo: file(relativePath: { eq: "pages/about/images/ocius-logo-transparent.png" }) {
      childImageSharp {
        fixed(quality: 100, width: 762) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    MarkBethwaite: file(relativePath: { eq: "pages/about/images/mark-bethwaite.png" }) {
      ...imageSharpAvatar
    }

    RobertDane: file(relativePath: { eq: "pages/about/images/robert-dane.png" }) {
      ...imageSharpAvatar
    }

    LloydBreckenridge: file(relativePath: { eq: "pages/about/images/lloyd-breckenridge.png" }) {
      ...imageSharpAvatar
    }

    PeterWlodarczyk: file(relativePath: { eq: "pages/about/images/peter-wlodarczyk.png" }) {
      ...imageSharpAvatar
    }

    ScottElliceFlint: file(relativePath: { eq: "pages/about/images/scott-ellice-flint.png" }) {
      ...imageSharpAvatar
    }

    AndrewAitken: file(relativePath: { eq: "pages/about/images/andrew-aitken.png" }) {
      ...imageSharpAvatar
    }

    RickTurner: file(relativePath: { eq: "pages/about/images/rick-turner.png" }) {
      ...imageSharpAvatar
    }

    Robert: file(relativePath: { eq: "pages/about/images/robert.png" }) {
      ...fluidImages
    }

    Nemo: file(relativePath: { eq: "pages/about/images/nemo.jpg" }) {
      ...fluidImages
    }

    OciusTeam: file(relativePath: { eq: "pages/about/images/ocius_team.jpg" }) {
      ...fluidImages
    }

    Award: file(relativePath: { eq: "pages/about/images/award-christopher-pyne.jpg" }) {
      ...fluidImages
    }

    SolarSailor: file(relativePath: { eq: "pages/about/images/solar-sailor.jpg" }) {
      ...fluidImages
    }

    SolarSails: file(relativePath: { eq: "pages/about/images/solarsails.jpg" }) {
      ...fluidImages
    }

    Awards: file(relativePath: { eq: "pages/about/images/awards.png" }) {
      ...fluidImages
    }

    AustralianGovernment: file(
      relativePath: { eq: "pages/about/images/australiangovernment.png" }
    ) {
      ...imageSharpLogotype
    }

    SteberInternational: file(relativePath: { eq: "pages/about/images/Steber-International.jpg" }) {
      ...imageSharpLogotype
    }

    DefenceInnovationHub: file(
      relativePath: { eq: "pages/about/images/Defence-Innovation-Hub.png" }
    ) {
      ...imageSharpLogotype
    }
    VanMunsterBoats: file(relativePath: { eq: "pages/about/images/Van-Munster-Boats.png" }) {
      ...imageSharpLogotype
    }
    Thales: file(relativePath: { eq: "pages/about/images/thales-logo.png" }) {
      ...imageSharpLogotype
    }

    OneTwoThree: file(
      relativePath: { eq: "pages/about/images/One-Two-Three-Naval-Architects.jpg" }
    ) {
      ...imageSharpLogotype
    }

    UNSW: file(relativePath: { eq: "pages/about/images/UNSW.jpg" }) {
      ...imageSharpLogotype
    }

    ClarkIP: file(relativePath: { eq: "pages/about/images/Clark-IP-Logo.png" }) {
      ...imageSharpLogotype
    }

    Ullandulla: file(relativePath: { eq: "pages/about/images/ulladulla.png" }) {
      ...imageSharpLogotype
    }

    Spitfire: file(relativePath: { eq: "pages/about/images/Spitfire-Assoc-Logo.jpg" }) {
      ...imageSharpLogotype
    }
  }

  fragment imageSharpAvatar on File {
    childImageSharp {
      fixed(width: 199) {
        ...GatsbyImageSharpFixed
      }
    }
  }

  fragment imageSharpLogotype on File {
    childImageSharp {
      fixed(height: 200) {
        ...GatsbyImageSharpFixed
      }
    }
  }

  fragment fluidImages on File {
    childImageSharp {
      fluid(quality: 100, maxWidth: 800) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`;
