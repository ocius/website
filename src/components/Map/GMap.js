/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import ImageZoom from 'react-medium-image-zoom';
import PropTypes from 'prop-types';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  Polyline,
  MarkerClusterer
} from '@react-google-maps/api';
import useHttp from '../../common/api/useHttp';
import { inlineSvgBoatIcon, getColorVariation } from './BoatIcon';
import configuration from '../../common/api/configuration';
import useInterval from '../../common/hooks/useInterval';

// Reference for options:
// https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions

const options = {
  disableDefaultUI: false,
  mapTypeId: 'satellite',
  mapTypeControl: false,
  streetViewControl: false,
  gestureHandling: 'greedy'
};

const GMap = ({ apiKey, currentVessel, droneData }) => {
  // Load the Google maps scripts
  const { isLoaded } = useLoadScript({
    // Get Google Maps API key from props
    googleMapsApiKey: apiKey
  });

  // The things we need to track in state
  const [mapRef, setMapRef] = useState(null);
  const [center, setCenter] = useState({ lat: -33.90594, lng: 151.23461 });
  const [selectedBoat, setSelectedBoat] = useState(currentVessel);
  const [markerMap, setMarkerMap] = useState({});
  const [zoom, setZoom] = useState(12);
  const [areBoundsSet, setBounds] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [timestamp, setTimestamp] = useState(Date.now());
  const [cameraUpdateRate] = useState(10000);
  const [cameraQuality] = useState(100);

  // Fetch data periodically
  const [, trailData] = useHttp(`${configuration.DRONE_COLLECTION_URL}?timespan=day`, null, []);

  /*
    Update timestamp periodically, so that webcam img will be updated as well
   */
  const updateTimestamp = () => {
    const currentTime = Date.now();
    setTimestamp(currentTime);
  };
  useInterval(updateTimestamp, cameraUpdateRate);

  // Iterate through the JSON data and extract distinct coordinates for each drone
  const makeTrailCoordinates = data => {
    const lookup = {};

    if (data.length > 0) {
      data.map(item => {
        const name = item.Name;
        if (!(name in lookup)) {
          lookup[name] = [];
          lookup[name].push({
            lat: Number(item.Props.Location.Coordinates.Lat),
            lng: Number(item.Props.Location.Coordinates.Lon)
          });
        } else {
          lookup[name].push({
            lat: Number(item.Props.Location.Coordinates.Lat),
            lng: Number(item.Props.Location.Coordinates.Lon)
          });
        }
        return false;
      });
    }
    return lookup;
  };

  const trailCoordinates = makeTrailCoordinates(trailData);

  // Iterate fetched data to size, center, and zoom map to contain all markers
  const fitBoatsOnMap = (map, data = []) => {
    const newBounds = new window.google.maps.LatLngBounds();

    data.map(boat => {
      const latLng = new window.google.maps.LatLng(
        parseFloat(boat.Props.Location.Coordinates.Lat),
        parseFloat(boat.Props.Location.Coordinates.Lon)
      );
      newBounds.extend(latLng);
      return latLng;
    });
    map.fitBounds(newBounds);
    // Fix zoom value
    const currentZoom = map.getZoom();
    setZoom(currentZoom);

    return newBounds;
  };

  // Fit map bounds to contain all markers
  if (droneData.length > 0 && !areBoundsSet) {
    fitBoatsOnMap(mapRef, droneData);
    setBounds(true);
  }

  const loadHandler = map => {
    // Store a reference to the google map instance in state
    setMapRef(map);
  };

  const onZoomChange = () => {
    // Check if bounds set to se
    if (mapRef && areBoundsSet) {
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

  const markerClickHandler = (event, boat, index) => {
    // Remember which boat was clicked
    setSelectedBoat(index);

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

      // Center the selected marker
      setCenter({
        lat: parseFloat(boat.Props.Location.Coordinates.Lat),
        lng: parseFloat(boat.Props.Location.Coordinates.Lon)
      });
    }
  };

  // When user selects vessel in dropdown, update selectedBoat state accordingly
  useEffect(() => {
    markerClickHandler(null, droneData[currentVessel], currentVessel);
  }, [currentVessel]);

  const renderMap = () => {
    return (
      <GoogleMap
        id="google-map"
        mapContainerStyle={{
          height: `100vh`,
          width: `100%`,
          paddingTop: '5rem'
        }}
        zoom={zoom}
        onZoomChanged={onZoomChange}
        center={center}
        options={options}
        // Do stuff on map initial load
        onLoad={loadHandler}
      >
        {droneData.length > 0 && (
          <MarkerClusterer averageCenter enableRetinaIcons gridSize={5}>
            {clusterer =>
              droneData.map((boat, index) => (
                <Marker
                  key={index}
                  position={{
                    lat: parseFloat(boat.Props.Location.Coordinates.Lat),
                    lng: parseFloat(boat.Props.Location.Coordinates.Lon)
                  }}
                  icon={inlineSvgBoatIcon(index, boat.Props.Heading)}
                  label={{
                    text: boat.Name,
                    color: '#ffff00',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}
                  onLoad={marker => markerLoadHandler(marker, index)}
                  onClick={event => markerClickHandler(event, boat, index)}
                  clusterer={clusterer}
                >
                  {infoOpen && index === selectedBoat && (
                    <InfoWindow
                      anchor={markerMap[selectedBoat]}
                      onCloseClick={() => {
                        setInfoOpen(false);
                      }}
                    >
                      <>
                        <h3>Live View from {boat.Name}</h3>
                        <ImageZoom
                          image={{
                            src: `https://usvna.ocius.com.au/usvna/oc_server?getliveimage&camera=${boat.Name}%20Mast&time=${timestamp}&quality=${cameraQuality}`,
                            alt: 'Live camera view',
                            className: 'webcam-img',
                            style: { width: '320px', height: 'auto', maxWidth: '100%' }
                          }}
                        />
                      </>
                    </InfoWindow>
                  )}
                </Marker>
              ))
            }
          </MarkerClusterer>
        )}
        {Object.keys(trailCoordinates).map((key, index) => {
          // Generate unique color for this vessel
          const lineColor = getColorVariation(index)[0];

          return (
            <Polyline
              key={index}
              path={trailCoordinates[key]}
              options={{
                strokeColor: lineColor,
                strokeOpacity: 0.8,
                strokeWeight: 3,
                fillColor: lineColor,
                fillOpacity: 0.5,
                clickable: false,
                draggable: false,
                editable: false,
                visible: true,
                radius: 30000,
                paths: trailCoordinates[key],
                zIndex: 1
              }}
            />
          );
        })}
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
