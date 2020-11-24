import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  Polyline,
  MarkerClusterer,
} from '@react-google-maps/api';
import useHttp from '../../common/api/useHttp';
import { inlineSvgBoatIcon, getColorVariation } from './BoatIcon';
import CameraSlider from '../CameraImageSlider';
import configuration from '../../common/api/configuration';
import { useWindowSize } from '../../common/hooks';

// Reference for options:
// https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions

const options = {
  disableDefaultUI: false,
  mapTypeId: 'satellite',
  mapTypeControl: false,
  streetViewControl: false,
  gestureHandling: 'greedy',
};

const GMap = ({ apiKey, currentVessel, droneData }) => {
  // Load the Google maps scripts
  const { isLoaded } = useLoadScript({
    // Get Google Maps API key from props
    googleMapsApiKey: apiKey,
  });

  // The things we need to track in state
  const [mapRef, setMapRef] = useState(null);
  const [center, setCenter] = useState({ lat: -33.90594, lng: 151.23461 });
  const [selectedBoat, setSelectedBoat] = useState(currentVessel);
  const [markerMap, setMarkerMap] = useState({});
  const [zoom, setZoom] = useState(12);
  const [areBoundsSet, setBounds] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  // Get window size
  const windowSize = useWindowSize();

  // Fetch data periodically
  const [, trailData] = useHttp(
    `${configuration.DRONE_COLLECTION_URL}/locations?timespan=day`,
    null,
    []
  );

  // Iterate through the JSON data and extract distinct coordinates for each drone
  const makeTrailCoordinates = (data) => {
    const lookup = {};

    if (data.length > 0) {
      data.map((item) => {
        const name = item.Name;
        if (!(name in lookup)) {
          lookup[name] = [];
          lookup[name].push({
            lat: Number(item.Lat),
            lng: Number(item.Lon),
            time: item.Timestamp,
          });
        } else {
          lookup[name].push({
            lat: Number(item.Lat),
            lng: Number(item.Lon),
            time: item.Timestamp,
          });
        }
        return false;
      });
    }
    Object.keys(lookup).forEach((name) => {
      lookup[name].sort((a, b) => {
        return a.time - b.time;
      });
    });
    return lookup;
  };

  const trailCoordinates = makeTrailCoordinates(trailData);
  // keeps the map centered on the selected vessel
  if (mapRef && droneData.length > 0 && currentVessel >= 0) {
    mapRef.panTo({
      lat: parseFloat(droneData[currentVessel].Props.Location.Coordinates.Lat),
      lng: parseFloat(droneData[currentVessel].Props.Location.Coordinates.Lon),
    });
    // Fit map bounds to contain all markers if no vessel is selected
  } else if (droneData.length > 0 && !areBoundsSet) {
    const newBounds = new window.google.maps.LatLngBounds();
    droneData.map((boat) => {
      const latLng = new window.google.maps.LatLng(
        parseFloat(boat.Props.Location.Coordinates.Lat),
        parseFloat(boat.Props.Location.Coordinates.Lon)
      );
      newBounds.extend(latLng);
      return latLng;
    });
    mapRef.fitBounds(newBounds);
    setBounds(true);
  }

  const loadHandler = (map) => {
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
    return setMarkerMap((prevState) => {
      return { ...prevState, [index]: marker };
    });
  };

  const markerClickHandler = (event, boat) => {
    // Only if map is loaded
    if (isLoaded) {
      // Remember which boat was clicked
      setSelectedBoat(boat.Id);

      // Don't open the info window on mobile if vessel was chosen in dropdown
      if (!(!event && windowSize.innerWidth <= 1056)) {
        // Required so clicking a 2nd marker works as expected
        if (infoOpen) {
          setInfoOpen(false);
        }

        setInfoOpen(true);
      }

      // Zoom in a little on marker click
      if (zoom < 15) {
        setZoom(15);
      }

      // Center the selected marker
      setCenter({
        lat: parseFloat(boat.Props.Location.Coordinates.Lat),
        lng: parseFloat(boat.Props.Location.Coordinates.Lon),
      });
    }
  };

  // When user selects vessel in dropdown, update selectedBoat state accordingly
  useEffect(() => {
    if (currentVessel < 0) return;
    setBounds(false);
    markerClickHandler(null, droneData[currentVessel]);
  }, [currentVessel]);

  let mapContainerStyle;
  if (windowSize.innerWidth <= 767) {
    mapContainerStyle = {
      height: `calc(100vh - 6rem)`,
      width: `100%`,
      paddingTop: '5rem',
    };
  } else {
    mapContainerStyle = {
      height: `100vh`,
      width: `100%`,
      paddingTop: '5rem',
    };
  }

  const renderMap = () => {
    return (
      <GoogleMap
        id="google-map"
        mapContainerStyle={mapContainerStyle}
        zoom={zoom}
        onZoomChanged={onZoomChange}
        center={center}
        options={options}
        // Do stuff on map initial load
        onLoad={loadHandler}
        onClick={() => {
          setInfoOpen(false);
        }}
      >
        {droneData.length > 0 && (
          <>
            <MarkerClusterer averageCenter enableRetinaIcons gridSize={5}>
              {(clusterer) =>
                droneData.map((boat) => (
                  <Marker
                    key={boat.Id}
                    position={{
                      lat: parseFloat(boat.Props.Location.Coordinates.Lat),
                      lng: parseFloat(boat.Props.Location.Coordinates.Lon),
                    }}
                    icon={inlineSvgBoatIcon(boat.Id, boat.Props.Heading)}
                    label={{
                      text: boat.Name,
                      color: '#ffff00',
                      fontSize: '16px',
                      fontWeight: 'bold',
                    }}
                    onLoad={(marker) => markerLoadHandler(marker, boat.Id)}
                    onClick={(event) => markerClickHandler(event, boat)}
                    clusterer={clusterer}
                  >
                    {infoOpen && boat.Id === selectedBoat && (
                      <InfoWindow
                        anchor={markerMap[selectedBoat]}
                        onCloseClick={() => {
                          setInfoOpen(false);
                        }}
                      >
                        <CameraSlider
                          images={boat.Props.Cameras}
                          title={`Live View from ${boat.Name}`}
                        />
                      </InfoWindow>
                    )}
                  </Marker>
                ))
              }
            </MarkerClusterer>
            {droneData.map((boat) => {
              // Generate unique color for this vessel
              const lineColor = getColorVariation(boat.Id)[0];

              return (
                <Polyline
                  key={boat.Id}
                  path={trailCoordinates[boat.Name]}
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
                    paths: trailCoordinates[boat.Name],
                    zIndex: 1,
                  }}
                />
              );
            })}
          </>
        )}
      </GoogleMap>
    );
  };

  return isLoaded ? renderMap() : null;
};

GMap.propTypes = {
  apiKey: PropTypes.string.isRequired,
  currentVessel: PropTypes.number,
};

GMap.defaultProps = {
  currentVessel: 0,
};

export default GMap;
