import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DashItemSchema } from './dashitem.schema';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import { DashItemService } from './dashitem.service';
import { DashboardSchema } from './dashboard.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Dashitems', schema: DashItemSchema },
      { name: 'Dashboards', schema: DashboardSchema },
    ]),
    forwardRef(() => AuthModule), // For cyclic module inclusion
  ],
  controllers: [DashboardController],
  providers: [DashboardService, DashItemService],
  exports: [DashboardService],
})
export class DashboardModule {}
