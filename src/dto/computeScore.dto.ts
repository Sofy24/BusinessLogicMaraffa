import { ApiProperty } from '@nestjs/swagger';

export class ComputeScoreDto {
  @ApiProperty()
  trick: number[];
  @ApiProperty()
  trump: number;
  @ApiProperty()
  mode: string;
  @ApiProperty()
  isSuitFinished: boolean[];
}