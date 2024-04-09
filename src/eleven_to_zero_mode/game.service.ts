import { Injectable, Logger } from '@nestjs/common';
import { RandomCards } from '../utils/random';
import { elevenZeroPoints, numberOfCardsPerPlayer } from '../utils/constant';
import { CardsUtils } from '../utils/cardsFunctions';
import { GameService } from '../game/game.service';

@Injectable()
export class ElevenZeroService extends GameService {
  /**check if a player played a wrong suit */
  checkElevenZero(trick: number[], isSuitFinished: boolean[]) {
    const utils = new CardsUtils();
    let firstCardSuit = utils.computeSeed(trick[0]);  
    let differentSuit = isSuitFinished.map((suit, index) => suit == false && utils.computeSeed(trick[index]) != firstCardSuit);
    let index = differentSuit.findIndex((val) => val == true);
    const firstTeam = index % 2 == 0;
    const elevenZero = index != -1;
    return { elevenZero, firstTeam };
  }

  //is trump present? yes => find the highest trump
  //no => find the suit of the first card highest card
  //Moreover, check if the player played a wrong suit
  computeScore(trick: number[], trump: number, isSuitFinished: boolean[]) {
    const result = this.checkElevenZero(trick, isSuitFinished);
    const firstTeam = result.firstTeam
    if (result.elevenZero) {
      return { score: elevenZeroPoints, firstTeam, winningPosition: -1};
    } else {
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
  
}

