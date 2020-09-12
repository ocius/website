import React from 'react';
import { Polyline } from '@react-google-maps/api';

const Trail = ({ trailCoordinates }) => {
  /*
   * translates a water temperature value into a RGB Hex string
   * Expected temperature range is 10degC - 29degC
   */
  const ColorMap = (waterTemp) => {
    if (waterTemp >= 28) {
      return '#FF0000';
    }
    if (waterTemp > 26 && waterTemp <= 28) {
      return '#FF8000';
    }
    if (waterTemp > 24 && waterTemp <= 26) {
      return '#FFFF00';
    }
    if (waterTemp > 22 && waterTemp <= 24) {
      return '#999900';
    }
    if (waterTemp > 20 && waterTemp <= 22) {
      return '#00FF00';
    }
    if (waterTemp > 16 && waterTemp <= 18) {
      return '#0080FF';
    }
    if (waterTemp > 14 && waterTemp <= 16) {
      return '#0080FF';
    }
    if (waterTemp > 12 && waterTemp <= 14) {
      return '#0000FF';
    }
    if (waterTemp <= 12) {
      return '#0000FF';
    }
    return '#FFFFFF';
  };

  const coordinatePairs = (trail) => {
    const pairs = [];
    trail.map((coordinate, index) => {
      if (index + 1 < trail.length) {
        pairs.push({
          coordinates: [coordinate, trail[index + 1]],
          color: ColorMap((coordinate.temp + trail[index + 1].temp) / 2),
        });
      }
      return false;
    });
    return pairs;
  };

  return (
    <>
      {coordinatePairs(trailCoordinates).map((pair) => (
        <Polyline
          key={pair.id}
          path={pair.coordinates}
          options={{
            strokeColor: pair.color,
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: pair.color,
            fillOpacity: 0.5,
            clickable: false,
            draggable: false,
            editable: false,
            visible: true,
            radius: 30000,
            paths: pair.Coordinates,
            zIndex: 1,
          }}
        />
      ))}
    </>
  );
};

export default Trail;
