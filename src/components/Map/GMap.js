/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { uid } from 'react-uid';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';
import useHttp from '../../common/api/useHttp';
import BoatIcon from './BoatIcon';
import configuration from '../../common/api/configuration';

const MapWithMarkers = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: -33.90594, lng: 151.23461 }}
      defaultOptions={{
        disableDefaultUI: false,
        mapTypeId: 'satellite',
        streetViewControl: false
      }}
    >
      <MarkerClusterer
        onClick={props.onMarkerClustererClick}
        averageCenter
        enableRetinaIcons
        gridSize={5}
      >
        {props.markers.map((marker, index) => {
          const onClick = props.onClick.bind(this, marker);

          return (
            <Marker
              key={uid(marker)}
              position={{ lat: parseFloat(marker.Lat), lng: parseFloat(marker.Lon) }}
              icon={BoatIcon(index)}
              onClick={onClick}
            >
              {props.selectedMarker === marker && (
                <InfoWindow>
                  <>
                    <p>
                      <strong>Name</strong>: {marker.Name}
                    </p>
                    <p>
                      <strong>Latitude</strong>: {marker.Lat}
                    </p>
                    <p>
                      <strong>Longitude</strong>: {marker.Lon}
                    </p>
                  </>
                </InfoWindow>
              )}
            </Marker>
          );
        })}
      </MarkerClusterer>
    </GoogleMap>
  ))
);

const GMap = props => {
  // Add state handlers
  const [selectedMarker, setSelectedMarker] = useState(false);

  // Handle on Marker click event
  const onMarkerClustererClick = markerClusterer => {
    const clickedMarkers = markerClusterer.getMarkers();
    console.log(`Current clicked markers length: ${clickedMarkers.length}`);
    console.log(clickedMarkers);
  };

  const handleClick = marker => {
    setSelectedMarker(marker);
  };

  // Fetch data periodically
  const [, fetchedData] = useHttp(`${configuration.DRONE_COLLECTION_URL}/locations`, 2000);

  return (
    <MapWithMarkers
      selectedMarker={selectedMarker}
      onClick={handleClick}
      markers={fetchedData}
      onMarkerClustererClick={onMarkerClustererClick}
      {...props}
    />
  );
};

export default GMap;
