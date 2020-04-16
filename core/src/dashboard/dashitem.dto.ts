import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class DashItemDto {
  @ApiProperty()
  @ApiPropertyOptional()
  image: string;

  @ApiProperty()
  @ApiPropertyOptional()
  name: string;

  @ApiProperty()
  @ApiPropertyOptional()
  event: string;

  @ApiProperty()
  @ApiPropertyOptional()
  activate: boolean;
}
