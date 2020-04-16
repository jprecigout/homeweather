import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.interface';
import { DashboardService } from 'src/dashboard/dashboard.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('Users') private readonly userModel: Model<User>,
    private readonly dashboardService: DashboardService,
  ) {}

  async create(user): Promise<User> {
    const userToCreate = new this.userModel(user);

    const userCreated = await userToCreate.save();
    await this.dashboardService.create(userCreated.id);

    return user;
  }

  find(username: string): Promise<User> {
    const user = { username: username };
    return this.userModel.findOne(user).exec();
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
