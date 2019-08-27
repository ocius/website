/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useContext } from 'react';
import { uid } from 'react-uid';
import PropTypes from 'prop-types';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  MarkerClusterer
} from '@react-google-maps/api';
import useHttp from '../../common/api/useHttp';
import BoatIcon from './BoatIcon';
import configuration from '../../common/api/configuration';
import NavContext from '../../common/context/NavContext';

// Reference for options:
// https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions

const options = {
  disableDefaultUI: false,
  mapTypeId: 'satellite',
  streetViewControl: false
};

const center = {
  lat: -33.90594,
  lng: 151.23461
};

const GMap = ({ apiKey, currentVessel }) => {
  // Load the Google maps scripts
  const { isLoaded } = useLoadScript({
    // Get Google Maps API key from props
    googleMapsApiKey: apiKey
  });

  // The things we need to track in state
  const [mapRef, setMapRef] = useState(null);
  const [selectedBoat, setSelectedBoat] = useState(currentVessel);
  const [markerMap, setMarkerMap] = useState({});
  const [zoom, setZoom] = useState(12);
  const [infoOpen, setInfoOpen] = useState(false);
  // Navigation state to open/close right panel
  const { toggleNavState } = useContext(NavContext);

  // Fetch data periodically
  const [isLoading, fetchedData] = useHttp(`${configuration.DRONE_COLLECTION_URL}/locations`, 2000);

  // Iterate myPlaces to size, center, and zoom map to contain all markers
  const fitBounds = map => {
    const bounds = new window.google.maps.LatLngBounds();
    if (!isLoading) {
      fetchedData.map(boat => {
        bounds.extend({ lat: parseFloat(boat.Lat), lng: parseFloat(boat.Lon) });
        return uid(boat);
      });
      map.fitBounds(bounds);
    }
  };

  const loadHandler = map => {
    // Store a reference to the google map instance in state
    setMapRef(map);
    // Fit map bounds to contain all markers
    fitBounds(map);
  };

  const onZoomChange = () => {
    if (mapRef) {
      // Set zoom accordingly
      setZoom(mapRef.getZoom());
    }
  };

  // We have to create a mapping of our boats to actual Marker objects
  const markerLoadHandler = (marker, index) => {
    return setMarkerMap(prevState => {
      return { ...prevState, [index]: marker };
    });
  };

  const markerClickHandler = (event, index) => {
    // Remember which boat was clicked
    setSelectedBoat(index);
    // Open right panel
    toggleNavState('switcherIsOpen', 'open');

    // Only if map is loaded
    if (isLoaded) {
      // Required so clicking a 2nd marker works as expected
      if (infoOpen) {
        setInfoOpen(false);
      }

      setInfoOpen(true);

      // Zoom in a little on marker click
      if (zoom < 15) {
        setZoom(15);
      }
    }
  };

  // When user selects vessel in dropdown, update selectedBoat state accordingly
  useEffect(() => {
    markerClickHandler(null, currentVessel);
  }, [currentVessel]);

  const renderMap = () => {
    return (
      <GoogleMap
        id="google-map"
        mapContainerStyle={{
          height: `100vh`,
          width: `100%`
        }}
        zoom={zoom}
        onZoomChanged={onZoomChange}
        center={center}
        options={options}
        // Do stuff on map initial load
        onLoad={loadHandler}
      >
        <MarkerClusterer averageCenter enableRetinaIcons gridSize={5}>
          {clusterer =>
            fetchedData.map((boat, index) => (
              <Marker
                key={index}
                position={{ lat: parseFloat(boat.Lat), lng: parseFloat(boat.Lon) }}
                icon={BoatIcon(index)}
                onLoad={marker => markerLoadHandler(marker, index)}
                onClick={event => markerClickHandler(event, index)}
                clusterer={clusterer}
              >
                {infoOpen && index === selectedBoat && (
                  <InfoWindow
                    anchor={markerMap[selectedBoat]}
                    onCloseClick={() => {
                      setInfoOpen(false);
                      toggleNavState('switcherIsOpen', 'close');
                    }}
                  >
                    <>
                      <h2>{boat.Name}</h2>
                      <p>
                        <strong>Latitude</strong>: {boat.Lat}
                      </p>
                      <p>
                        <strong>Longitude</strong>: {boat.Lon}
                      </p>
                    </>
                  </InfoWindow>
                )}
              </Marker>
            ))
          }
        </MarkerClusterer>
      </GoogleMap>
    );
  };

  return isLoaded ? renderMap() : null;
};

GMap.propTypes = {
  apiKey: PropTypes.string.isRequired,
  currentVessel: PropTypes.number
};

GMap.defaultProps = {
  currentVessel: 0
};

export default GMap;
