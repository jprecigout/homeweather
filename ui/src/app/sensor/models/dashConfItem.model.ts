export enum Event {
  HUMIDITY = "humidityEvents",
  TEMPERATURE = "temperatureEvents",
}

export class DashConfItem {
  constructor(
    public image: String,
    public name: String,
    public event: Event,
    public activate: boolean
  ) {}
}
