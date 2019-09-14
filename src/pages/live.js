import React, { useState } from 'react';
import EmptyLayout from '../layouts/EmptyLayout';
import SEO from '../components/SEO';
import TextSkeleton from '../components/carbon/TextSkeleton';
import DropdownSkeleton from '../components/carbon/DropdownSkeleton';
import Dropdown from '../components/carbon/Dropdown';
import Header from '../components/carbon/Header';
import LeftNav from '../components/carbon/LeftNav';
import GMap from '../components/Map/GMap';
import { VesselStatus, PowerMonitor, AISInfo } from '../components/InfoPanel';
import configuration from '../common/api/configuration';
import useHttp from '../common/api/useHttp';
import { FormWrapper, FormItem } from '../components/carbon/shared';

// Google Maps key
const apiKey = `AIzaSyC18SYECJZXKTOG6Ljm8W68mENW1uEmTAg`;

const LivePage = () => {
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

  // Make an array of names out of fetched data
  const extractDroneNames = data => {
    let names = [];
    // Extract drone names from data
    if (typeof data === 'object') {
      names = Object.keys(data).map(index => {
        // Get drone object for this particular index
        const drone = data[index];
        // Check if name property exists
        if (drone && drone.Name) {
          return { name: drone.Name, id: Number(index) };
        }
        return false;
      });
    }

    return names;
  };

  // Check if name property exists
  const droneName = data => {
    return data && typeof data.name !== 'undefined' ? data.name : '';
  };

  // Fetch data periodically
  const [isLoading, fetchedData] = useHttp(configuration.DRONE_COLLECTION_URL, 2000);
  const droneNames = extractDroneNames(fetchedData);

  let panelInformation;
  if (chartMode === 'Vessel Status') {
    panelInformation = <VesselStatus data={fetchedData[currentVessel]} />;
  } else if (chartMode === 'Power Monitor') {
    panelInformation = <PowerMonitor data={fetchedData[currentVessel]} />;
  } else if (chartMode === 'AIS Info') {
    panelInformation = <AISInfo />;
  }

  return (
    <EmptyLayout>
      <SEO title="Live" description="See where Bluebottles are at any time – LIVE." />
      <Header />
      <LeftNav>
        <FormWrapper>
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
                itemToString={droneName}
                selectedItem={droneNames[currentVessel]}
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
                initialSelectedItem={chartMode}
              />
            )}
          </FormItem>
          <hr />
          {isLoading ? <TextSkeleton count={8} /> : panelInformation}
        </FormWrapper>
      </LeftNav>
      <GMap apiKey={apiKey} currentVessel={currentVessel} droneData={fetchedData} />
    </EmptyLayout>
  );
};

export default LivePage;
