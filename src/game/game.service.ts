import { Injectable } from '@nestjs/common';
import { CardsUtils } from '../utils/cardsFunctions';
import { numberOfCardsPerPlayer } from '../utils/constant';
import { RandomCards } from '../utils/random';

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

  checkMaraffa(suit: number, deck: number[], value: number, trump: number) {
    const utils = new CardsUtils();
    if (trump != suit || utils.computeValue(value) != 3)
      return { maraffa: false };
    const idxA = utils.findCardIdx(suit * 10 + 7, deck);
    const idx2 = utils.findCardIdx(suit * 10 + 8, deck);
    const idx3 = utils.findCardIdx(suit * 10 + 9, deck);

    if (idxA != -1 && idx2 != -1 && idx3 != -1) {
      return { maraffa: true };
    }
    return { maraffa: false };
  }
  checkPlayCard(
    trick: number[],
    card: number,
    userCards: number[],
    cardIsTrump: boolean,
  ) {
    const utils = new CardsUtils();
    if (trick.length == 0) return { valid: true };
    const firstCardSuit = utils.computeSeed(trick[0]);
    const cardSuit = utils.computeSeed(card);
    return {
      valid:
        firstCardSuit === cardSuit ||
        (firstCardSuit === cardSuit && cardIsTrump) ||
        !userCards
          .map((userCard) => utils.computeSeed(userCard))
          .includes(firstCardSuit),
    };
  }
}
