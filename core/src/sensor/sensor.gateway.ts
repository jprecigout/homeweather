import {
  WebSocketGateway,
  MessageBody,
  SubscribeMessage,
  WsResponse,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { interval, Observable } from 'rxjs';
import { HtService } from './ht.service';

@WebSocketGateway(3001, { namespace: 'events' })
export class SensorEventsGateway {
  constructor(private htService: HtService) {}

  @SubscribeMessage('humidityEvents')
  onHumidityEvent(@MessageBody() data): Observable<WsResponse<number>> {
    const event = 'humidityEvents';
    return interval(6000).pipe(
      map(() => this.htService.getHumidity()),
      map(res => ({ event, data: Math.round(res) })),
    );
  }

  @SubscribeMessage('temperatureEvents')
  onTemperatureEvent(@MessageBody() data): Observable<WsResponse<number>> {
    const event = 'temperatureEvents';
    return interval(6000).pipe(
      map(() => this.htService.getTemperature()),
      map(res => ({ event, data: Math.round(res) })),
    );
  }
}
