import { ApiProperty } from '@nestjs/swagger';

export class CheckMaraffaDto {
  @ApiProperty()
  deck: number[];
  @ApiProperty()
  suit: number;
  @ApiProperty()
  user: number;
}