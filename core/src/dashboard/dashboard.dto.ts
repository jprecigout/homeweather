import { DashItemDto } from './dashitem.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class DashboardDto {
  @ApiProperty()
  @ApiPropertyOptional()
  id?: string;

  @ApiProperty()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({ type: [DashItemDto] })
  dashItems: [DashItemDto];
}
