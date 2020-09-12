import React from 'react';
import { Circle } from '@react-google-maps/api';

const Trail = ({ trailCoordinates }) => {
  // Maps a water temperature Number into a RGB Hex string
  // TODO: use https://www.npmjs.com/package/colormap in future
  const ColorMap = (waterTemp) => {
    if (waterTemp >= 28) {
      return '#ff9bff';
    }
    if (waterTemp > 27) {
      return '#ff00ff';
    }
    if (waterTemp > 26) {
      return '#FF8000';
    }
    if (waterTemp > 25) {
      return '#FF0000';
    }
    if (waterTemp > 24) {
      return '#ea3d25';
    }
    if (waterTemp > 23) {
      return '#ff6600';
    }
    if (waterTemp > 22) {
      return '#ffab01';
    }
    if (waterTemp > 21) {
      return '#ffff00';
    }
    if (waterTemp > 20) {
      return '#b5ff45';
    }
    if (waterTemp > 19) {
      return '#79b831';
    }
    if (waterTemp > 18) {
      return '#00aa00';
    }
    if (waterTemp > 17) {
      return '#018c64';
    }
    if (waterTemp > 16) {
      return '#00c3ac';
    }
    if (waterTemp > 15) {
      return '#00ffff';
    }
    if (waterTemp > 14) {
      return '#348fff';
    }
    if (waterTemp > 13) {
      return '#0245ff';
    }
    if (waterTemp > 12) {
      return '#33007f';
    }
    if (waterTemp > 11) {
      return '#800080';
    }
    return '#805880';
  };

  return (
    <>
      {trailCoordinates.map((location) => (
        <Circle
          key={location.id}
          center={{
            lat: location.lat,
            lng: location.lng,
          }}
          options={{
            fillColor: ColorMap(location.temp),
            fillOpacity: 0.1,
            strokeOpacity: 0,
            clickable: false,
            draggable: false,
            editable: false,
            visible: true,
            radius: 5,
            zIndex: 1,
          }}
        />
      ))}
    </>
  );
};

export default Trail;
