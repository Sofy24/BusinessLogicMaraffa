const numberOfCardsPerPlayer = 10;
export class CardsUtils {
  //returns the index of the card if the user has the specific card. Otherwise returns -1
  findCardIdx(card: number, deck: number[]) {
    return deck.indexOf(card);
  }

  //find the owner of the card
  findCardOwner(card: number, deck: number[]) {
    const cardIdx = deck.indexOf(card);
    return Math.floor(cardIdx / numberOfCardsPerPlayer);
  }

  //compute the seed
  computeSeed(a: number) {
    return Math.floor(a / numberOfCardsPerPlayer);
  }

  //compute the value of the cards
  computeValue(a: number) {
    return a % numberOfCardsPerPlayer < 4
      ? 0
      : a % numberOfCardsPerPlayer == 7
      ? 3
      : 1;
  }

  //returns true if there's at least one trump card
  isThereTrumpInTrick(trick: number[], trump: number) {
    return trick.some((c) => this.computeSeed(c) == trump) ? true : false;
  }

  //find the highest card by given suit. Returns the index of that card in the trick
  findHighestCardBySeed(trick: number[], suit: number) {
    const maxNumber: number = Math.max(
      ...trick.filter((c) => this.computeSeed(c) == suit),
    );
    return trick.indexOf(maxNumber);
  }

  //check if a user has a seed
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

  //find the card it takes (between 2 of which the first command)
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

  //sort cards in each player’s hand
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
