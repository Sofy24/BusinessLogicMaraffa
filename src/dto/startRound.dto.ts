import { ApiProperty } from '@nestjs/swagger';

export class StartGameDto {
  @ApiProperty()
  gameId: string
}