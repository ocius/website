import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { inlineSvgIcon } from './BoatIcon';
import MarkerIcon from '../Icons/Marker';

// Import custom styles to customize the style of Google Map
const styles = require('./GoogleMapStyles.json');

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

  const renderMap = () => (
    <GoogleMap
      mapContainerStyle={mapStyle}
      zoom={16}
      center={center}
      options={{
        disableDefaultUI: true, // disable default map UI
        draggable: true, // make map draggable
        keyboardShortcuts: false, // disable keyboard shortcuts
        scaleControl: true, // allow scale controle
        scrollwheel: true, // allow scroll wheel
        styles, // change default map styles
      }}
    >
      <Marker position={center} icon={inlineSvgIcon(<MarkerIcon fill="#4db4e6" />)} />
    </GoogleMap>
  );

  return isLoaded ? renderMap() : null;
};

export default React.memo(ContactMap);
