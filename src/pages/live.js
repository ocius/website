import React, { useState, useRef, useContext } from 'react';
import EmptyLayout from '../layouts/EmptyLayout';
import SEO from '../components/SEO';
import TextSkeleton from '../components/carbon/TextSkeleton';
import DropdownSkeleton from '../components/carbon/DropdownSkeleton';
import Dropdown from '../components/carbon/Dropdown';
import SideNav from '../components/carbon/SideNav';
import GMap from '../components/Map/GMap';
import Header from '../components/Navbar/Header';
import MobileNavigation from '../components/Navbar/MobileNavigation';
import { VesselStatus } from '../components/InfoPanel';
import configuration from '../common/api/configuration';
import useHttp from '../common/api/useHttp';
import NavContext from '../common/context/NavContext';
import { useWindowSize } from '../common/hooks';
import useOnClickOutside from '../common/hooks/useOnClickOutside';
import { FormWrapper, FormItem } from '../components/carbon/shared';
import SplashScreen from '../components/SplashScreen';

/** Google Maps key */
const apiKey = process.env.GATSBY_GOOGLE_MAPS_API_KEY;

const LivePage = () => {
  // Save ref of navbar + sidenav for future reference
  const node = useRef();
  // Add state handlers
  const [currentVessel, setCurrentVessel] = useState(0);
  const { sideNavIsOpen, toggleNavState } = useContext(NavContext);
  const windowSize = useWindowSize();

  /**
   * Attach an event handler to vessel dropdown
   */
  const handleVesselChange = (e) => {
    setCurrentVessel(e.selectedItem.id);
  };

  /**
   * Custom walker for drone data, to retrieve properties from nested objects.
   */
  const objectWalker = (propertyRetriever, obj) => {
    let result = [];
    // Extract values from data
    if (typeof obj === 'object') {
      result = Object.keys(obj).map((index) =>
        // Get property for this particular index
        propertyRetriever(obj[index])
      );
    }

    return result;
  };

  /** Retrieve a name and id */
  const droneNamesAndIdsRetriever = (obj) => ({ name: obj.Name, id: obj.Id });

  /** Retrieve drone name */
  const droneNamesRetriever = (obj) => obj.Name;

  /**
   * Function to add custom unique Ids to fetched data.
   * So that we can use them later.
   *
   * @param {object} data API data object
   */
  const addIdsToFetchedData = (data) => {
    // Extract drone names from data
    const names = objectWalker(droneNamesRetriever, data);

    return names.sort().map((name, index) => {
      const filtered = data.filter((drone) => drone.Name === name)[0];
      filtered.Id = index;

      return filtered;
    });
  };

  /**
   * Check if property name exists, then display it.
   *
   * @param {object} data API data object
   */
  const droneName = (data) => (data && typeof data.name !== 'undefined' ? data.name : '');

  // Fetch data periodically
  const [isLoading, fetchedData] = useHttp(configuration.DRONE_COLLECTION_URL, 2000);
  const orderedDrones = addIdsToFetchedData(fetchedData);
  const droneNames = objectWalker(droneNamesAndIdsRetriever, orderedDrones);

  // Hide left nav when user clicks outside of container
  useOnClickOutside(node, () => {
    // Only if left nav is open
    if (windowSize.innerWidth <= 1056 && sideNavIsOpen) {
      toggleNavState('sideNavIsOpen', 'close');
    }
  });

  return (
    <EmptyLayout>
      <SEO title="Live" description="See where Bluebottles are at any time – LIVE." />
      <main ref={node}>
        <Header />
        <MobileNavigation />
        <SideNav>
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
        </SideNav>
      </main>
      <SplashScreen
        isLoading={isLoading}
        text={['Connecting to satellite', 'Connecting to drones', 'Drones sending data']}
      />
      <GMap apiKey={apiKey} currentVessel={currentVessel} droneData={orderedDrones} />
    </EmptyLayout>
  );
};

export default LivePage;
