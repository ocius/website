import React from 'react';
import { Circle, Polyline } from '@react-google-maps/api';
import RainbowColor from './RainbowColor';

const Trail = ({ trailCoordinates }) => {
  const coordinatePairs = (trail) => {
    const pairs = [];
    trail.map((coordinate, index) => {
      if (index + 1 < trail.length) {
        pairs.push({
          coordinates: [coordinate, trail[index + 1]],
          color: RainbowColor((coordinate.temp + trail[index + 1].temp) / 2),
        });
      }
      return false;
    });
    return pairs;
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
            fillColor: RainbowColor(location.temp),
            fillOpacity: 0.5,
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
