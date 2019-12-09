import React from 'react';
import { Col, Row } from 'react-flexbox-grid';
import Img from 'gatsby-image';
import Segmented from '../../components/Segmented';
import Heading from '../../components/Heading';
import SEO from '../../components/SEO';

const Partners = ({ data }) => {
  return (
    <>
      <SEO title="Our Partners" />
      <header id="partners" className="centered">
        <Heading level={1} size="huge" underline>
          Our Partners
        </Heading>
      </header>
      <Segmented borderBottom="">
        <Row className="primary-content">
          <Col xs={6} md={6} lg={6} lgOffset={3}>
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
            <p>
              The Defence Innovation Hub is an initiative of the 2016 Defence Industry Policy
              Statement and will invest around $640 million over the decade to 2025-26 in maturing
              and further developing technologies that have moved from the early science stages into
              the engineering and development stages of the innovation process. It is an exciting
              initiative that will pull together research institutions, academia, industry and
              innovative technologies. The Defence Innovation Hub facilitates innovation activities
              from initial concept, through prototyping and integrated testing.
            </p>
          </Col>
        </Row>
      </Segmented>
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
              research and teaching universities. OCIUS have a contract for research into
              intelligent networks and machine learning with the University of New South Wales. UNSW
              provide OCIUS with a Research & Development facility in UNSW’s Randwick Campus.
              Additionally, OCIUS hires multiple computer science and mechatronics engineers from
              UNSW, and students from UNSW under intern programs.
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
              Thales develops, manufactures and exports world leading underwater sonar sensors and
              towed arrays in Australia. Since 2013 Thales has had an ongoing contribution to the
              OCIUS project combining its advanced underwater sensors with OCIUS autonomous
              Bluebottle USV to demonstrate the capability of autonomous maritime surveillance.
              Thales is the maritime lead for the Trusted Autonomous Systems Defence Co-operative
              Research Centre.
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
    </>
  );
};

export default Partners;
