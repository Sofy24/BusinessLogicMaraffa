import { ApiProperty } from '@nestjs/swagger';

export class CheckMaraffaDto {
  @ApiProperty()
  deck: number[];
  @ApiProperty()
  suit: number;
  @ApiProperty()
  value: number;
  @ApiProperty()
  trump: number;
}
