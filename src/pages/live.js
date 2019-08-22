import React, { useState } from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import DropdownSkeleton from '../components/carbon/DropdownSkeleton';
import Dropdown from '../components/carbon/Dropdown';
import Switcher from '../components/carbon/Switcher';
import Header from '../components/carbon/Header';
import LeftNav from '../components/carbon/LeftNav';
import GMap from '../components/Map/GMap';
import { VesselStatus, PowerMonitor, AISInfo } from '../components/InfoPanel';
import '../scss/index.scss';
import configuration from '../common/api/configuration';
import useHttp from '../common/api/useHttp';

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

const LivePage = ({ shouldHideHeader }) => {
  // Add state handlers
  const [chartMode, setChartMode] = useState('Vessel Status');
  const [currentVessel, setCurrentVessel] = useState(0);

  /*
    Attach an event handler to chart mode dropdown
   */
  const handleChartModeChange = e => {
    setChartMode(e.selectedItem);
  };

  /*
    Attach an event handler to vessel dropdown
   */
  const handleVesselChange = e => {
    setCurrentVessel(e.selectedItem.id);
  };

  // Fetch data periodically
  const [isLoading, fetchedData] = useHttp(configuration.DRONE_COLLECTION_URL, 2000);

  let droneNames = [];
  // Extract drone names from fetched data
  if (typeof fetchedData === 'object') {
    droneNames = Object.keys(fetchedData).map(index => {
      // Get drone object for this particular index
      const drone = fetchedData[index];
      // Check if name property exists
      if (drone && drone.Name) {
        return { name: drone.Name, id: index };
      }
      return false;
    });
  }

  let panelInformation;
  if (chartMode === 'Vessel Status') {
    panelInformation = <VesselStatus data={fetchedData[currentVessel]} />;
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
            {isLoading ? (
              <DropdownSkeleton label="Link Type:" />
            ) : (
              <Dropdown
                id="link-type"
                type="default"
                label="Choose link type"
                ariaLabel="Dropdown"
                titleText="Link Type:"
                items={['MAVLink', 'Satellite']}
              />
            )}
          </FormItem>
          <FormItem>
            {isLoading ? (
              <DropdownSkeleton label="Vessel:" />
            ) : (
              <Dropdown
                id="vessel"
                type="default"
                label="Choose vessel"
                ariaLabel="Dropdown"
                titleText="Vessel:"
                onChange={handleVesselChange}
                items={droneNames}
                itemToString={drone => (drone ? drone.name : '')}
              />
            )}
          </FormItem>
          <FormItem>
            {isLoading ? (
              <DropdownSkeleton label="Chart Mode:" />
            ) : (
              <Dropdown
                id="chart-mode"
                type="default"
                label="Choose chart mode"
                ariaLabel="Dropdown"
                titleText="Chart Mode:"
                onChange={handleChartModeChange}
                items={['Vessel Status', 'Power Monitor', 'AIS Info']}
              />
            )}
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
      />
    </>
  );
};

export default LivePage;
