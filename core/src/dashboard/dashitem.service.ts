import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DashItem } from './dashitem.interface';
import { DashItemDto } from './dashitem.dto';

@Injectable()
export class DashItemService {
  constructor(
    @InjectModel('Dashitems')
    private readonly dashItemModel: Model<DashItem>,
  ) {}

  async findAll(): Promise<DashItem[]> {
    return this.dashItemModel.find().exec();
  }

  // Normaly this method doesn't exist but the dashitems collection in mongo must be intialize
  getDashItems(): DashItemDto[] {
    const items = [
      {
        image: 'rain.svg',
        name: 'Humidity',
        event: 'humidityEvents',
        activate: true,
      },
      {
        image: 'thermometer.svg',
        name: 'Temperature',
        event: 'temperatureEvents',
        activate: true,
      },
    ];
    return items;
  }
}
