import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import BoatMarker from '../../public/boat00.png';

// Make an icon object
const icon = { url: BoatMarker, scaledSize: { width: 34, height: 34 } };

const GMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: -33.90594, lng: 151.23461 }}
      defaultOptions={{
        disableDefaultUI: false,
        mapTypeId: 'satellite'
      }}
    >
      {props.isMarkerShown && <Marker position={{ lat: -33.90594, lng: 151.23461 }} icon={icon} />}
    </GoogleMap>
  ))
);

export default GMap;
