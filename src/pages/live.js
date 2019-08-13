/* eslint-disable no-script-url */
import React, { Component } from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import StyledDropdown from '../components/carbon/Dropdown';
import Switcher from '../components/carbon/Switcher';
import Header from '../components/carbon/Header';
import LeftNav from '../components/carbon/LeftNav';
import GMap from '../components/GMap';
import { VesselStatus, PowerMonitor, AISInfo } from '../components/InfoPanel';
import '../scss/index.scss';
import DroneService from '../common/api/droneService';

// Google Maps key
const apiKey = `AIzaSyC18SYECJZXKTOG6Ljm8W68mENW1uEmTAg`;

const FormWrapper = styled.div`
  padding: 1.5rem;
  flex: 1 1;

  hr {
    border: 0;
    height: 1px;
    background: #8c8c8c;
    margin: 32px 0rem 8px;
  }

  .bx--label {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.6rem;
    letter-spacing: 0.32px;
    color: #565656;
    font-weight: 400;
    display: inline-block;
    vertical-align: baseline;
    margin-bottom: 0.8rem;
    pointer-events: none;
  }
`;

const FormItem = styled.div`
  font-size: 1.5rem;
  margin: 0 0 1rem;
`;

class LivePage extends Component {
  constructor() {
    super();

    // Set default chart mode
    this.state = {
      chartMode: 'Vessel Status',
      drones: {},
      currentVessel: 0
    };

    // Set this (with bind)
    this.droneService = new DroneService();
    this.handleChartModeChange = this.handleChartModeChange.bind(this);
    this.handleVesselChange = this.handleVesselChange.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  /*
    Fetch the data from lambda backend.
   */
  getData() {
    this.droneService.retrieveData().then(drones => {
      this.setState({ drones });
    });
  }

  /*
    Attach an event handler to chart mode dropdown
   */
  handleChartModeChange(e) {
    this.setState({ chartMode: e.selectedItem });
  }

  /*
    Attach an event handler to vessel dropdown
   */
  handleVesselChange(e) {
    this.setState({ currentVessel: e.selectedItem.id });
  }

  render() {
    const { shouldHideHeader } = this.props;
    const { chartMode, drones, currentVessel } = this.state;

    let droneNames = [];

    // Map all the drones to array
    if (typeof drones === 'object') {
      droneNames = Object.keys(drones).map(index => {
        // Get drone object for this particular index
        const drone = drones[index];
        // Check if name property exists
        if (drone && drone.Name) {
          return { name: drone.Name, id: index };
        }
        return false;
      });
    }

    let panelInformation;

    if (chartMode === 'Vessel Status') {
      panelInformation = <VesselStatus data={this.state.drones[currentVessel]} />;
    } else if (chartMode === 'Power Monitor') {
      panelInformation = <PowerMonitor />;
    } else if (chartMode === 'AIS Info') {
      panelInformation = <AISInfo />;
    }

    return (
      <>
        <SEO title="Live" description="See where Bluebottles are at any time – LIVE." />
        <Header shouldHideHeader={shouldHideHeader} />
        <Switcher />
        <LeftNav shouldHideHeader={shouldHideHeader}>
          <FormWrapper>
            <FormItem>
              <StyledDropdown
                id="link-type"
                type="default"
                label="Choose link type"
                ariaLabel="Dropdown"
                titleText="Link Type:"
                items={['MAVLink', 'Satellite']}
              />
            </FormItem>
            <FormItem>
              <StyledDropdown
                id="vessel"
                type="default"
                label="Choose vessel"
                ariaLabel="Dropdown"
                titleText="Vessel:"
                onChange={this.handleVesselChange}
                items={droneNames}
                itemToString={drone => (drone ? drone.name : '')}
              />
            </FormItem>
            <FormItem>
              <StyledDropdown
                id="frequency"
                type="default"
                label="Choose frequency"
                ariaLabel="Dropdown"
                titleText="Frequency:"
                items={[
                  '5Hz',
                  '2Hz',
                  '1 Hz',
                  '2 Seconds',
                  '5 Seconds',
                  '10 Seconds',
                  '30 Seconds',
                  '1 Minute'
                ]}
              />
            </FormItem>
            <FormItem>
              <StyledDropdown
                id="chart-mode"
                type="default"
                label="Choose chart mode"
                ariaLabel="Dropdown"
                titleText="Chart Mode:"
                onChange={this.handleChartModeChange}
                items={[
                  'Vessel Status',
                  'Power Monitor',
                  'AIS Info',
                  'Replay Sat Data',
                  'Solar Calculator',
                  'History Display'
                ]}
              />
            </FormItem>
            <hr />
            {panelInformation}
          </FormWrapper>
        </LeftNav>
        <GMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          onMarkerClustererClick={this.onMarkerClustererClick}
        />
      </>
    );
  }
}

export default LivePage;
