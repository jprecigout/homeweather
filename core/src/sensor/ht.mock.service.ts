import { Injectable } from '@nestjs/common';
import { EventService } from './event.service';
import { EventDto } from './event.dto';

@Injectable()
export class HtMockService {
  private temp = 0;
  private humidity = 0;

  public constructor(private readonly eventService: EventService) {}

  private generateNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  getHumidity() {
    this.humidity = this.generateNumber();
    const event: EventDto = {
      name: 'humidity',
      value: this.humidity,
      date: new Date(),
    };
    // this.eventService.save(event);
    return this.humidity;
  }

  getTemperature() {
    this.temp = this.generateNumber();
    const event: EventDto = {
      name: 'temperature',
      value: this.humidity,
      date: new Date(),
    };
    //this.eventService.save(event);
    return this.temp;
  }
}
