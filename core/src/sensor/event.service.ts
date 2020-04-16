import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { SensorEvent } from './event.interface';
import { EventDto } from './event.dto';

@Injectable()
export class EventService {
  constructor(
    @InjectModel('event')
    private readonly eventModel: Model<SensorEvent>,
  ) {}

  async save(event: EventDto): Promise<SensorEvent> {
    const createdEvent = new this.eventModel(event);
    return createdEvent.save();
  }
}
