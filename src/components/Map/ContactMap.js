import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

/** Position of the OCIUS Headquarters */
const center = {
  lat: -33.9056585,
  lng: 151.2351807,
};

const mapStyle = {
  height: '500px',
  width: '100%',
};

const ContactMap = () => {
  // Load the Google maps scripts
  const { isLoaded } = useLoadScript({
    // Get Google Maps API key from props
    googleMapsApiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY,
  });

  const renderMap = () => {
    return (
      <GoogleMap mapContainerStyle={mapStyle} zoom={16} center={center}>
        <Marker position={center} />
      </GoogleMap>
    );
  };

  return isLoaded ? renderMap() : null;
};

export default React.memo(ContactMap);
