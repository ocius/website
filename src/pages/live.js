/* eslint-disable no-script-url */
import React, { Component } from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import StyledDropdown from '../components/carbon/Dropdown';
import Switcher from '../components/carbon/Switcher';
import Header from '../components/carbon/Header';
import LeftNav from '../components/carbon/LeftNav';
import GMap from '../components/GMap';
import VesselStatus from '../components/VesselStatus';
import PowerMonitor from '../components/PowerMonitor';
import '../scss/index.scss';

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

const items = [
  {
    id: 'option-1',
    text: 'Option 1'
  },
  {
    id: 'option-2',
    text: 'Option 2'
  },
  {
    id: 'option-3',
    text: 'Option 3'
  },
  {
    id: 'option-4',
    text: 'Option 4'
  }
];

class LivePage extends Component {
  constructor() {
    super();

    // Set default chart mode
    this.state = {
      chartMode: 'Vessel Status'
    };

    // Set this (with bind)
    this.handleChartModeChange = this.handleChartModeChange.bind(this);
  }

  /*
    Attach an event handler to chart mode dropdown
   */
  handleChartModeChange(e) {
    this.setState({ chartMode: e.selectedItem });
  }

  render() {
    const { shouldHideHeader } = this.props;
    const { chartMode } = this.state;
    let panelInformation;

    if (chartMode === 'Vessel Status') {
      panelInformation = <VesselStatus />;
    } else if (chartMode === 'Power Monitor') {
      panelInformation = <PowerMonitor />;
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
                id="carbon-dropdown-example1"
                type="default"
                label="Bob"
                ariaLabel="Dropdown"
                titleText="Vessel:"
                items={items}
                itemToString={item => (item ? item.text : '')}
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
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${apiKey}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </>
    );
  }
}

export default LivePage;
