import { Module } from '@nestjs/common';
import { GameRulesService } from './application/use-cases/game-rules.service';
import { CardsUtils } from './domain/services/card-utils.service';
import { RandomCards } from './domain/services/deck-shuffle.service';
import { ClassicGameService } from './domain/services/rules/classic.rules.service';
import { ElevenZeroService } from './domain/services/rules/eleven-to-zero.rules.service';
import { GameController } from './infrastructure/http/controllers/game.controller';

@Module({
  controllers: [GameController],
  providers: [
    CardsUtils,
    RandomCards,
    ClassicGameService,
    ElevenZeroService,
    GameRulesService,
  ],
})
export class GameModule {}
