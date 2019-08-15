/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import { uid } from 'react-uid';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer';
import DroneService from '../common/api/droneService';

import BoatMarker from '../../public/boat00.png';
import BoatMarker1 from '../../public/boat02.png';

// Make an icon object
const icon = { url: BoatMarker, scaledSize: { width: 34, height: 34 } };
const icon1 = { url: BoatMarker1, scaledSize: { width: 34, height: 34 } };

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
              icon={index % 2 ? icon : icon1}
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

class GMap extends Component {
  constructor() {
    super();

    // Set default chart mode
    this.state = {
      markers: [],
      selectedMarker: false
    };

    // Set this (with bind)
    this.droneService = new DroneService();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  /*
    Handle on Marker click event
   */
  static onMarkerClustererClick(markerClusterer) {
    const clickedMarkers = markerClusterer.getMarkers();
    console.log(`Current clicked markers length: ${clickedMarkers.length}`);
    console.log(clickedMarkers);
  }

  /*
    Fetch current location of drones from lambda backend.
 */
  getData() {
    const pointer = this;
    setInterval(() => {
      this.droneService.getLocation().then(drones => {
        pointer.setState({ markers: drones });
      });
    }, 2000);
  }

  handleClick = marker => {
    // console.log({ marker })
    this.setState({ selectedMarker: marker });
  };

  render() {
    const { ...rest } = this.props;

    return (
      <MapWithMarkers
        selectedMarker={this.state.selectedMarker}
        onClick={this.handleClick}
        markers={this.state.markers}
        onMarkerClustererClick={this.onMarkerClustererClick}
        {...rest}
      />
    );
  }
}

export default GMap;
