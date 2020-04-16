import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SensorModule } from './sensor/sensor.module';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // Local
    //MongooseModule.forRoot('mongodb://localhost/homeweather'),
    MongooseModule.forRoot(process.env.MONGO_DB_URL),
    // Rasp
    //MongooseModule.forRoot('mongodb://mongodb/homeweather'),
    SensorModule,
    AuthModule,
    DashboardModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
