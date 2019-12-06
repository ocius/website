import React, { useState, useRef, useContext } from 'react';
import Loadable from '@loadable/component';
import EmptyLayout from '../layouts/EmptyLayout';
import SEO from '../components/SEO';
import TextSkeleton from '../components/carbon/TextSkeleton';
import DropdownSkeleton from '../components/carbon/DropdownSkeleton';
import MobileNavigation from '../components/Navbar/MobileNavigation';
import { VesselStatus } from '../components/InfoPanel';
import configuration from '../common/api/configuration';
import useHttp from '../common/api/useHttp';
import NavContext from '../common/context/NavContext';
import { useWindowSize } from '../common/hooks';
import useOnClickOutside from '../common/hooks/useOnClickOutside';
import { FormWrapper, FormItem } from '../components/carbon/shared';

// Lazy load components
const Header = Loadable(() => import(`../components/carbon/Header`));
const Dropdown = Loadable(() => import(`../components/carbon/Dropdown`));
const LeftNav = Loadable(() => import(`../components/carbon/LeftNav`));
const GMap = Loadable(() => import(`../components/Map/GMap`));
const SplashScreen = Loadable(() => import(`../components/SplashScreen`));

// Google Maps key
const apiKey = process.env.GOOGLE_MAPS_API_KEY;

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

  /*
    Custom walker for drone data, to retrieve properties from nested objects.
   */
  const objectWalker = (propertyRetriever, obj) => {
    let result = [];
    // Extract values from data
    if (typeof obj === 'object') {
      result = Object.keys(obj).map(index => {
        // Get property for this particular index
        return propertyRetriever(obj[index]);
      });
    }

    return result;
  };

  // Retrieve a name and id
  const droneNamesAndIdsRetriever = obj => {
    return { name: obj.Name, id: obj.Id };
  };

  // Retrieve drone name
  const droneNamesRetriever = obj => {
    return obj.Name;
  };

  /*
    Function to add custom unique Ids to fetched data.
    So that we can use them later.
   */
  const addIdsToFetchedData = data => {
    // Extract drone names from data
    const names = objectWalker(droneNamesRetriever, data);

    return names.sort().map((name, index) => {
      const filtered = data.filter(drone => drone.Name === name)[0];
      filtered.Id = index;

      return filtered;
    });
  };

  // Check if name property exists
  const droneName = data => {
    return data && typeof data.name !== 'undefined' ? data.name : '';
  };

  // Fetch data periodically
  const [isLoading, fetchedData] = useHttp(configuration.DRONE_COLLECTION_URL, 2000);
  const orderedDrones = addIdsToFetchedData(fetchedData);
  const droneNames = objectWalker(droneNamesAndIdsRetriever, orderedDrones);

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
        <MobileNavigation />
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
              <VesselStatus data={orderedDrones[currentVessel]} />
            )}
          </FormWrapper>
        </LeftNav>
      </main>
      <SplashScreen isLoading={isLoading} text="Connecting to drones" />
      <GMap apiKey={apiKey} currentVessel={currentVessel} droneData={orderedDrones} />
    </EmptyLayout>
  );
};

export default LivePage;
