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
    // Fetch data and set the state
    return axios
      .get(this.config.DRONE_COLLECTION_URL)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(`😱 retrive data request failed: ${error}`);
      });
  }
}

export default DroneService;
