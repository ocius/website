/*
  Domain object class for sensors data validation
 */
class Drone {
  constructor(drone) {
    this.name = String(drone.Name);
    this.timestamp = new Date(drone.Timestamp);
    this.status = String(drone.Status);
    this.mode = String(drone.Mode);
    this.sail_mode = Number(drone.Sail_mode);

    if (!this.name || !this.timestamp || !this.status || !this.mode) {
      throw new TypeError('Drone Object missing required fields');
    }
  }

  static toJSON() {
    return {
      name: this.name,
      timestamp: this.timestamp,
      status: this.status,
      mode: this.mode,
      sail_mode: this.sail_mode
    };
  }
}

export default Drone;
