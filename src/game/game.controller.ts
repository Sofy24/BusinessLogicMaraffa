import { Controller, Post, Body, Res, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GameService } from './game.service';
import { Response } from 'express';
import { CheckMaraffaDto } from '../dto/checkMaraffa.dto';
import { ComputeScoreDto } from '../dto/computeScore.dto';


@Controller('games')
export class GameController {
  constructor(private readonly gamesService: GameService) {}

  @ApiResponse({ status: 201, description: 'Round started' })
  @ApiResponse({ status: 417, description: 'Round failed to start' })
  @ApiOperation({ summary: 'Start a round' })
  @Get('startRound')  //returns the deck and the first player
  startRound(@Res() res: Response) {
    const json = this.gamesService.startRound();
    if (json.firstPlayer == -1){ //4 denari not found
      return res.status(417).send({ message: 'Round failed to start' });
    }
    return res.status(201).send(json);
    
  }

  @ApiResponse({ status: 201, description: 'Success' })
  @ApiOperation({ summary: 'Check if the user has Maraffa' })
  @Post('checkMaraffa') //returns true if the user has Maraffa
  checkMaraffa(@Body() body: CheckMaraffaDto) {
    const { user, suit, deck } = body;
    return this.gamesService.checkMaraffa(user, suit, deck);
  }

  @ApiResponse({ status: 201, description: 'Success' })
  @ApiResponse({ status: 417, description: 'Computation of score failed' })
  @ApiOperation({ summary: 'Compute the score of the teams' })
  @Post('computeScore') //returns the score of the teams 
  computeScore(@Res() res: Response, @Body() body: ComputeScoreDto) {
    const { trick, trump } = body;
    const json =  this.gamesService.computeScore(trick, trump);
    if (json.winningPosition == -1){ 
      return res.status(417).send({ message: 'Computation of score failed' });
    }
    return res.status(201).send(json);
  }
}
