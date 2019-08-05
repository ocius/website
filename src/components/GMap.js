import React, { Component } from 'react';
import axios from 'axios';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
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
        mapTypeId: 'satellite'
      }}
    >
      {props.markers.map((marker, index) => (
        <Marker
          key={marker.Name}
          position={{ lat: parseFloat(marker.Lat), lng: parseFloat(marker.Lon) }}
          icon={index % 2 ? icon : icon1}
        />
      ))}
    </GoogleMap>
  ))
);

class GMap extends Component {
  componentWillMount() {
    this.setState({ markers: [] });
  }

  componentDidMount() {
    // Watch this, here goes the real magic
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    // API to get drones locations
    const url = `${proxy}https://api.ocius.com.au/drones/locations`;

    // Fetch data and set the state
    axios
      .get(url, { crossdomain: true })
      .then(response => {
        this.setState({ markers: response.data });
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  render() {
    const { ...rest } = this.props;

    return <MapWithMarkers markers={this.state.markers} {...rest} />;
  }
}

export default GMap;
