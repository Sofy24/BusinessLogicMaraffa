import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { PlayCardValidationDto } from 'src/dto/playCardValidation';
import { ClassicGameService } from '../classic_mode/game.service';
import { CheckMaraffaDto } from '../dto/checkMaraffa.dto';
import { ComputeScoreDto } from '../dto/computeScore.dto';
import { ElevenZeroService } from '../eleven_to_zero_mode/game.service';
import { GameService } from './game.service';

@Controller('games')
export class GameController {
  constructor(
    private readonly gamesService: GameService,
    private readonly classicService: ClassicGameService,
    private readonly elevenzeroService: ElevenZeroService,
  ) {}

  @ApiResponse({ status: 201, description: 'Round started' })
  @ApiResponse({ status: 417, description: 'Round failed to start' })
  @ApiOperation({ summary: 'Start a round' })
  @Get('startRound') //returns the deck and the first player
  startRound(@Res() res: Response) {
    const json = this.gamesService.startRound();
    if (json.firstPlayer == -1) {
      //4 denari not found
      return res.status(417).send({ message: 'Round failed to start' });
    }
    return res.status(201).send(json);
  }

  @ApiResponse({ status: 201, description: 'Success' })
  @ApiOperation({ summary: 'Check if the user has Maraffa' })
  @Post('checkMaraffa') //returns true if the user has Maraffa
  checkMaraffa(@Res() res: Response, @Body() body: CheckMaraffaDto) {
    const { suit, deck } = body;
    return res.status(201).send(this.gamesService.checkMaraffa(suit, deck));
  }

  @ApiResponse({ status: 201, description: 'Validation' })
  @ApiOperation({ summary: 'Check if the card played by the user is valid' })
  @Post('playCard-validation') //returns true if the user has Maraffa
  validatePlayedCard(
    @Res() res: Response,
    @Body() body: PlayCardValidationDto,
  ) {
    const { trick, card, userCards, cardIsTrump } = body;
    return res
      .status(201)
      .send(
        this.gamesService.checkPlayCard(trick, card, userCards, cardIsTrump),
      );
  }

  @ApiResponse({ status: 201, description: 'Success' })
  @ApiResponse({ status: 417, description: 'Computation of score failed' })
  @ApiOperation({ summary: 'Compute the score of the teams' })
  @Post('computeScore') //returns the score of the teams
  computeScore(@Res() res: Response, @Body() body: ComputeScoreDto) {
    const { trick, trump, mode, isSuitFinished } = body;
    let json;
    switch (mode.toLowerCase()) {
      case 'classic':
        json = this.classicService.computeScore(trick, trump);
        if (json.winningPosition == -1) {
          return res
            .status(417)
            .send({ message: 'Computation of score failed' });
        }
        break;
      case 'eleven2zero':
        json = this.elevenzeroService.computeScore(
          trick,
          trump,
          isSuitFinished,
        );
        break;
    }
    return res.status(201).send(json);
  }
}
