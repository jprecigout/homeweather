import { Logger, Injectable } from '@nestjs/common';
import { GrovePi } from 'node-grovepi';
import { LcdService } from './lcd.service';
import { ConfigService } from '@nestjs/config';
import { EventService } from './event.service';
import { EventDto } from './event.dto';
const DHTDigitalSensor = GrovePi.sensors.DHTDigital;

@Injectable()
export class HtService {
  private board: GrovePi.Board;
  private temperature = 0;
  private humidity = 0;
  private PERCENTAGE_ACCEPT = 40;
  private nbSensor = 2;

  //public DHT_PORT = this.configService.get<string>('SENSOR_DHT_PORT');
  public DHT_PORT = 7;

  public constructor(
    public readonly lcdService: LcdService,
    private readonly configService: ConfigService,
    private readonly eventService: EventService,
  ) {
    this.board = new GrovePi.board({
      debug: true,
      onError: err => {
        Logger.log(`Error : ${err}`);
      },
      onInit: res => {
        const dhtSensor = new DHTDigitalSensor(
          this.DHT_PORT,
          DHTDigitalSensor.VERSION.DHT11,
          DHTDigitalSensor.CELSIUS,
        );
        dhtSensor.on('change', res => {
          this.saveEvent('temperature', res[2]);

          this.temperature = this.controlValue(
            res[2],
            this.temperature,
            this.PERCENTAGE_ACCEPT,
          )
            ? res[2]
            : this.temperature;

          this.saveEvent('humidity', res[1]);

          this.humidity = this.controlValue(
            res[1],
            this.humidity,
            this.PERCENTAGE_ACCEPT,
          )
            ? res[1]
            : this.humidity;

          const text = `Temp:${this.temperature.toFixed(
            1,
          )} C\nHum:${this.humidity.toFixed(1)} %`;

          this.lcdService.write(text, 93, 93, 93);
        });
        dhtSensor.watch(6000);
      },
    });
    this.board.init();
  }

  private controlValue = (
    valueToCheck: number,
    valueReference: number,
    percentage: number,
  ) => {
    if (this.nbSensor > 0) {
      this.nbSensor--;
      return valueToCheck;
    }
    const percentageResult = (percentage / 100) * valueReference;
    const min = valueReference - percentageResult;
    const max = valueReference + percentageResult;
    return valueToCheck > min && valueToCheck < max;
  };

  private saveEvent = async (name: string, value: number) => {
    const event: EventDto = new EventDto(name, value, new Date());
    await this.eventService.save(event);
  };
  getHumidity() {
    return this.humidity;
  }

  getTemperature() {
    return this.temperature;
  }
}
