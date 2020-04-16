import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { UserService } from './user.service';
import { DashboardModule } from 'src/dashboard/dashboard.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }]),
    DashboardModule,
  ],
  controllers: [],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
