import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { ClassicGameService } from '../classic_mode/game.service';
import { ElevenZeroService } from '../eleven_to_zero_mode/game.service';


@Module({
  controllers: [GameController],
  providers: [GameService, ClassicGameService, ElevenZeroService],
  imports: [GameModule],
})
export class GameModule {}
