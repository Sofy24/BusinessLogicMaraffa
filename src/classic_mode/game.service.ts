import { Injectable } from '@nestjs/common';
import { GameService } from '../game/game.service';
import { CardsUtils } from '../utils/cardsFunctions';

@Injectable()
export class ClassicGameService extends GameService {
  //is trump present? yes => find the highest trump
  //no => find the suit of the first card highest card
  computeScore(trick: number[], teamACards: number[], trump: number) {
    const utils = new CardsUtils();
    const winningPosition = utils.isThereTrumpInTrick(trick, trump)
      ? utils.findHighestCardBySeed(trick, trump)
      : utils.findHighestCardBySeed(trick, utils.computeSeed(trick[0]));
    const firstTeam = teamACards.includes(trick[winningPosition]);
    const score = trick
      .map(utils.computeValue)
      .reduce((acc, val) => acc + val, 0);
    return { score, firstTeam, winningPosition };
  }
}
