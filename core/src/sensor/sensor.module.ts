import { Module } from '@nestjs/common';
import { HtService } from './ht.service';
import { HtMockService } from './ht.mock.service';
import { LcdService } from './lcd.service';
import { SensorEventsGateway } from './sensor.gateway';
import { SensorController } from './sensor.controller';
import { EventSchema } from './event.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { EventService } from './event.service';

const htServiceProvider = {
  provide: HtService,
  useClass: process.env.NODE_ENV === 'development' ? HtMockService : HtService,
};

// Module for sensor
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'event', schema: EventSchema }]),
  ],
  controllers: [SensorController],
  providers: [htServiceProvider, SensorEventsGateway, LcdService, EventService],
  exports: [],
})
export class SensorModule {}
