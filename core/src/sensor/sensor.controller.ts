import { Controller, Get, UseGuards } from '@nestjs/common';
import { HtService } from './ht.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('sensor')
@Controller('sensor')
export class SensorController {
  constructor(private readonly htService: HtService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/humidity')
  getHumidity() {
    return this.htService.getHumidity();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/temperature')
  getTemperature() {
    return this.htService.getTemperature();
  }
}
