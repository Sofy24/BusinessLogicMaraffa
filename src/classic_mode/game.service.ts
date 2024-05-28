import { Injectable } from '@nestjs/common';
import { CardsUtils } from '../utils/cardsFunctions';
import { GameService } from '../game/game.service';

@Injectable()
export class ClassicGameService extends GameService {
  //is trump present? yes => find the highest trump
  //no => find the suit of the first card highest card
  computeScore(trick: number[], trump: number) {
    const utils = new CardsUtils();
    const winningPosition = utils.isThereTrumpInTrick(trick, trump)
      ? utils.findHighestCardBySeed(trick, trump)
      : utils.findHighestCardBySeed(trick, utils.computeSeed(trick[0]));
    const firstTeam = winningPosition % 2 == 0;
    const score = trick
      .map(utils.computeValue)
      .reduce((acc, val) => acc + val, 0);
    return { score, firstTeam, winningPosition };
  }
}
