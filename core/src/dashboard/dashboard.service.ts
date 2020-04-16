import { Injectable, Logger } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Dashboard } from './dashboard.interface';
import { DashboardDto } from './dashboard.dto';
import { DashItemService } from './dashitem.service';

@Injectable()
export class DashboardService {
  constructor(
    @InjectModel('Dashboards')
    private readonly dashboardModel: Model<Dashboard>,
    private readonly dashItemService: DashItemService,
  ) {}
  async create(userId: string): Promise<Dashboard> {
    const dashboard = {
      userId: userId,
      dashItems: this.dashItemService.getDashItems(),
    };
    const createdDashboard = new this.dashboardModel(dashboard);
    return createdDashboard.save();
  }
  async update(dashboard: DashboardDto): Promise<Dashboard> {
    return this.dashboardModel.findOneAndUpdate(
      { userId: dashboard.userId },
      { dashItems: dashboard.dashItems },
      { new: true }, // For return the doc updated
    );
  }
  async find(userId: string): Promise<Dashboard> {
    const userIdTypeObj = new Types.ObjectId(userId);
    return this.dashboardModel.findOne({ userId: userIdTypeObj }).exec();
  }
  async findAll(): Promise<Dashboard[]> {
    return this.dashboardModel.find().exec();
  }
}
