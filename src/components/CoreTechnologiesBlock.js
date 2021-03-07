import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import ReadMoreReact from 'read-more-react';
import Container from './Container';
import Segmented from './Segmented';
import Heading from './Heading';
import SolarSun from './Icons/SolarSun';
import SolarFlare from './Icons/SolarFlare';
import SolarPower from './Icons/SolarPower';
import RudderCurrent from './Icons/RudderCurrent';
import RudderNav from './Icons/RudderNav';
import SensorCommunication from './Icons/SensorCommunication';
import SensorLocation from './Icons/SensorLocation';
import SensorTravel from './Icons/SensorTravel';
import KeelWinch from './Icons/KeelWinch';
import KeelLength from './Icons/KeelLength';
import { Spacing, FirstColumnMobile, SecondColumnMobile } from './common';

// Import bluebottle illustration
import Bluebottle from '../images/bluebottle.svg';

export default () => (
  <Container id="overview">
    <Segmented>
      <Row className="centered">
        <Col xs={12} md={8} lg={8} mdOffset={2}>
          <Spacing $value="80px" />
          <Heading level={2} size="large" weight="thick" underline="center">
            The core technology behind Ocius
          </Heading>
        </Col>
      </Row>
      <Spacing $value="80px" $xsValue="0px" />
      <Row>
        <SecondColumnMobile xs={12} md={6} lg={3}>
          <SolarSun
            fill="#0fb0e1"
            style={{
              width: '62px',
              height: '62px',
            }}
          />
          <SolarFlare
            fill="#0fb0e1"
            style={{
              width: '62px',
              height: '62px',
              marginLeft: '5px',
            }}
          />
          <SolarPower
            fill="#0fb0e1"
            style={{
              width: '62px',
              height: '62px',
              marginLeft: '5px',
            }}
          />
          <Heading level={3} size="medium" weight="thick">
            Solar Sail
          </Heading>
          <ReadMoreReact
            text="When deployed, the patented hard solar sail harnesses both solar and wind energy.
              When not desired it automatically folds snuggly into the deck of the Bluebottle
              like the wing of a bird, so 100% retracted but also not taking up precious payload
              space within the vessel. Intelligent programming means the solar sail reacts
              autonomously to the sea, sun &amp; wind conditions to ensure efficient and safe
              operation for all mission requirements."
            min={140}
            ideal={160}
            max={180}
            readMoreText="Read more"
          />

          <Spacing $value="40px" $xsValue="0px" />
          <RudderCurrent
            fill="#0fb0e1"
            style={{
              width: '62px',
              height: '62px',
            }}
          />
          <RudderNav
            fill="#0fb0e1"
            style={{
              width: '62px',
              height: '62px',
              marginLeft: '5px',
            }}
          />
          <Heading level={3} size="medium" weight="thick">
            Rudder Flipper
          </Heading>
          <ReadMoreReact
            text="The patented rudder-flipper steers, guides and powers the unmanned vessel
              generating forward thrust from the pitching of the vessel in the waves of the
              ocean. The bigger the sea state the stronger the forces. In seastates over
              Seastate 6 the solarsail automatically lowers and the rudder passively propels the
              vessel in the desired direction. If left in the mid position it passively turns
              the bow of the Bluebottle into the oncoming seas giving Bluebottles unprecedented
              seakeeping and survival capabilities."
            min={140}
            ideal={160}
            max={180}
            readMoreText="Read more"
          />
        </SecondColumnMobile>
        <FirstColumnMobile xs={12} md={8} lg={6} mdOffset={2} lgOffset={0}>
          <img src={Bluebottle} alt="Bluebottle Ocius" />
          <Spacing $value="0px" $xsValue="30px" />
        </FirstColumnMobile>
        <SecondColumnMobile xs={12} md={6} lg={3}>
          <SensorCommunication
            fill="#0fb0e1"
            style={{
              width: '62px',
              height: '62px',
            }}
          />
          <SensorLocation
            fill="#0fb0e1"
            style={{
              width: '62px',
              height: '62px',
            }}
          />
          <SensorTravel
            fill="#0fb0e1"
            style={{
              width: '62px',
              height: '62px',
            }}
          />
          <Heading level={3} size="medium" weight="thick">
            Sensors and Communication
          </Heading>
          <ReadMoreReact
            text="Multiple sensors are available as options underwater, inside the hull and on the
              aft comms mast. An Integrated and networked communication system allows live
              tracking. All vessels can be monitored while operating autonomously or controlled
              remotely, constantly sending data back to the control room."
            min={140}
            ideal={160}
            max={180}
            readMoreText="Read more"
          />

          <Spacing $value="40px" $xsValue="0px" />
          <KeelWinch
            fill="#0fb0e1"
            style={{
              width: '62px',
              height: '62px',
            }}
          />
          <KeelLength
            fill="#0fb0e1"
            style={{
              width: '62px',
              height: '62px',
            }}
          />
          <Heading level={3} size="medium" weight="thick">
            Keel Winch Cassette
          </Heading>
          <ReadMoreReact
            text="The patented ‘keel winch’ is a cassette that displaces water ballast in the keel -
              so adding or changing a cassette does not interfere with the displacement or trim
              of the Bluebottle. The cassette can be flat packed and shipped to anywhere in the
              world for customers to install, commission and test their sensor or array on the
              winch before inserting it into the payload bay of a Bluebottle - being ready to
              go."
            min={120}
            ideal={180}
            max={200}
            readMoreText="Read more"
          />
        </SecondColumnMobile>
      </Row>
    </Segmented>
  </Container>
);
