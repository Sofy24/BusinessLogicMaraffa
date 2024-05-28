import { Injectable, Logger } from '@nestjs/common';
import { RandomCards } from '../utils/random';
import { numberOfCardsPerPlayer } from '../utils/constant';
import { CardsUtils } from '../utils/cardsFunctions';

@Injectable()
export class GameService {
  startRound() {
    const deck = new RandomCards().fisherYatesRandomCards();
    const d4Index = deck.indexOf(0); //return the index of 4 denari
    if (d4Index == -1) {
      return { deck: deck, firstPlayer: d4Index };
    }
    const firstPlayer = Math.floor(d4Index / numberOfCardsPerPlayer);
    return { deck: deck, firstPlayer: firstPlayer };
  }

  checkMaraffa(userId: number, suit: number, deck: number[]) {
    const utils = new CardsUtils();
    const idxA = utils.findCardIdx(userId, suit * 10 + 7, deck);
    const idx2 = utils.findCardIdx(userId, suit * 10 + 8, deck);
    const idx3 = utils.findCardIdx(userId, suit * 10 + 9, deck);

    if (idxA != -1 && idx2 != -1 && idx3 != -1) {
      return { maraffa: true};
    }
    return { maraffa: false};
  
  }

  computeScore(trick: number[], trump: number, isSuitFinished=[]) {
    throw new Error("Method 'computeScore' must be implemented by subclass");
  }
}
