import { ApiProperty } from '@nestjs/swagger';

export class PlayCardValidationDto {
  @ApiProperty()
  trick: number[];
  @ApiProperty()
  card: number;
  @ApiProperty()
  userCards: number[];
  @ApiProperty()
  cardIsTrump: boolean;
}
