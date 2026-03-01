import { Injectable } from '@nestjs/common';
import { numberOfCardsPerPlayer } from '../constants';

@Injectable()
export class CardsUtils {
  findCardIdx(card: number, deck: number[]) {
    return deck.indexOf(card);
  }

  findCardOwner(card: number, deck: number[]) {
    const cardIdx = deck.indexOf(card);
    return Math.floor(cardIdx / numberOfCardsPerPlayer);
  }

  computeSeed(a: number) {
    return Math.floor(a / numberOfCardsPerPlayer);
  }

  computeValue(a: number) {
    return a % numberOfCardsPerPlayer < 4
      ? 0
      : a % numberOfCardsPerPlayer == 7
      ? 3
      : 1;
  }

  isThereTrumpInTrick(trick: number[], trump: number) {
    return trick.some((c) => this.computeSeed(c) == trump) ? true : false;
  }

  findHighestCardBySeed(trick: number[], suit: number) {
    const maxNumber: number = Math.max(
      ...trick.filter((c) => this.computeSeed(c) == suit),
    );
    return trick.indexOf(maxNumber);
  }

  isSeedOnHand(
    userId: number,
    deck: number[],
    suit: number,
    is_played: boolean[],
  ) {
    for (let i = 0; i < numberOfCardsPerPlayer; i++) {
      const actSeed = this.computeSeed(
        deck[userId * numberOfCardsPerPlayer + i],
      );
      if (actSeed == suit && !is_played[userId * numberOfCardsPerPlayer + i])
        return true;
    }
    return false;
  }

  winCard(firstCard: number, secondCard: number, trump: number) {
    if (
      this.computeSeed(firstCard) == this.computeSeed(secondCard) &&
      firstCard < secondCard
    )
      return true;
    if (
      this.computeSeed(firstCard) != trump &&
      this.computeSeed(secondCard) == trump
    )
      return true;
    return false;
  }

  partialSort4(deck: number[]) {
    const ris = [];
    for (let i = 0; i < 4; i++) {
      const sorted = deck
        .slice(i * numberOfCardsPerPlayer, (i + 1) * numberOfCardsPerPlayer)
        .sort((a, b) => a - b);
      for (let j = 0; j < numberOfCardsPerPlayer; j++) ris.push(sorted[j]);
    }
    return ris;
  }
}
