import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { DashboardDto } from './dashboard.dto';
import { Dashboard } from './dashboard.interface';

@ApiBearerAuth()
@ApiTags('dashboard')
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/dash/:idUser')
  async getDashboard(@Param('idUser') idUser: string): Promise<DashboardDto> {
    return this.toDashboardDto(await this.dashboardService.find(idUser));
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async updateDashboard(@Body() updateDashboard: DashboardDto) {
    return this.toDashboardDto(
      await this.dashboardService.update(updateDashboard),
    );
  }

  private toDashboardDto = (dashboard: Dashboard) => {
    const dashDto = new DashboardDto();
    dashDto.id = dashboard.id;
    dashDto.userId = dashboard.userId.toHexString();
    dashDto.dashItems = dashboard.dashItems;
    return dashDto;
  };
}
