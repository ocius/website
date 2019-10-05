import React, { useState, useRef, useContext } from 'react';
import EmptyLayout from '../layouts/EmptyLayout';
import SEO from '../components/SEO';
import TextSkeleton from '../components/carbon/TextSkeleton';
import DropdownSkeleton from '../components/carbon/DropdownSkeleton';
import Dropdown from '../components/carbon/Dropdown';
import Header from '../components/carbon/Header';
import LeftNav from '../components/carbon/LeftNav';
import GMap from '../components/Map/GMap';
import { VesselStatus } from '../components/InfoPanel';
import configuration from '../common/api/configuration';
import useHttp from '../common/api/useHttp';
import NavContext from '../common/context/NavContext';
import { useWindowSize } from '../common/hooks';
import useOnClickOutside from '../common/hooks/useOnClickOutside';
import { FormWrapper, FormItem } from '../components/carbon/shared';

// Google Maps key
const apiKey = process.env.GOOGLE_MAPS_API_KEY;
const apiKeyOld = process.env.GOOGLE_MAPS_API_KEY_OLD;

console.log("API KEY: " + apiKey.substring(0,10));
console.log("API KEY OLD: " + apiKeyOld.substring(0,10));

const LivePage = () => {
  // Save ref of navbar + leftnav for future reference
  const node = useRef();
  // Add state handlers
  const [currentVessel, setCurrentVessel] = useState(0);
  const { leftNavIsOpen, toggleNavState } = useContext(NavContext);
  const windowSize = useWindowSize();

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

  // Hide left nav when user clicks outside of container
  useOnClickOutside(node, () => {
    // Only if left nav is open
    if (windowSize.innerWidth <= 1056 && leftNavIsOpen) {
      toggleNavState('leftNavIsOpen', 'close');
    }
  });

  return (
    <EmptyLayout>
      <SEO title="Live" description="See where Bluebottles are at any time – LIVE." />
      <main ref={node}>
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
            {isLoading ? (
              <TextSkeleton count={8} />
            ) : (
              <VesselStatus data={fetchedData[currentVessel]} />
            )}
          </FormWrapper>
        </LeftNav>
      </main>
      <GMap apiKey={apiKey} currentVessel={currentVessel} droneData={fetchedData} />
    </EmptyLayout>
  );
};

export default LivePage;
