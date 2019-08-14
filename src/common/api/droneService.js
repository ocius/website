import axios from 'axios';
import Configuration from './configuration';

/*
  Domain object class for sensors data validation
 */
class DroneService {
  constructor() {
    this.config = new Configuration();
  }

  /**
   * Retrive all the data from lambda backend.
   *
   * @returns {Promise<[] | Promise<[]>>}
   */
  async retrieveData() {
    // Fetch and return the data
    return axios
      .get(this.config.DRONE_COLLECTION_URL)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(`😱 retriveData() request failed: ${error}`);
      });
  }

  /**
   * Retrieve current location of drones
   *
   * @returns {Promise<AxiosResponse<T> | Promise<AxiosResponse<T>>>}
   */
  async getLocation() {
    // Fetch and return location
    return axios
      .get(`${this.config.DRONE_COLLECTION_URL}/locations`)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(`😱 getLocation() request failed: ${error}`);
      });
  }
}

export default DroneService;
