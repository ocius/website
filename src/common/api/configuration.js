// Watch this, here goes the real magic
const proxy = 'https://cors-anywhere.herokuapp.com/';

class Configuration {
  // API to get drones locations
  DRONE_COLLECTION_URL = `${proxy}https://api.ocius.com.au/drones`;
}

export default Configuration;
