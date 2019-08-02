import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

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
      {props.isMarkerShown && <Marker position={{ lat: -33.90594, lng: 151.23461 }} />}
    </GoogleMap>
  ))
);

export default GMap;
