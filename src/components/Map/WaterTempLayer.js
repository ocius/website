import React from 'react';
import { HeatmapLayer } from '@react-google-maps/api';

const WaterTempLayer = ({ temperatureData }) => {
  const data = temperatureData.map((coordinate) => {
    console.log(coordinate);
    return {
      location: new window.google.maps.LatLng(coordinate.lat, coordinate.lng),
      weight: coordinate.temp,
    };
  });

  const onLoad = heatmapLayer => {
    console.log('HeatmapLayer onLoad heatmapLayer: ', heatmapLayer)
  }

  const onUnmount = heatmapLayer => {
    console.log('HeatmapLayer onUnmount heatmapLayer: ', heatmapLayer)
  }

  return (
    <HeatmapLayer
      // optional
      onLoad={onLoad}
      // optional
      onUnmount={onUnmount}
      // required
      data={data} />
  );
};

export default WaterTempLayer;
