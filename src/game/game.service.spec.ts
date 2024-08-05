import { Test, TestingModule } from '@nestjs/testing';
import { RandomCards } from '../utils/random';
import { GameService } from './game.service';

describe('GameService', () => {
  let service: GameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameService],
    }).compile();

    service = module.get<GameService>(GameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('startRound', () => {
    it('should return an object with deck and firstPlayer properties', () => {
      const result = service.startRound();
      expect(result).toBeInstanceOf(Object);
      expect(result).toHaveProperty('deck');
      expect(result).toHaveProperty('firstPlayer');
    });

    it('should have a valid deck with shuffled cards', () => {
      const result = service.startRound();
      expect(result.deck).toBeInstanceOf(Array);
      // Ensure that the deck is an array with at least one card
      expect(result.deck.length).toBeGreaterThan(0);

      // Ensure that the two decks are different
      const shuffledDeck = new RandomCards().fisherYatesRandomCards();
      expect(result.deck).not.toEqual(shuffledDeck);
    });

    it('should determine the first player correctly', () => {
      const result = service.startRound();
      expect(result.firstPlayer).toBeDefined();
      expect(typeof result.firstPlayer).toBe('number');

      // Ensure that the firstPlayer value is in the range of 1 and the number of players
      const numberOfPlayers = 4;
      expect(result.firstPlayer).toBeGreaterThanOrEqual(0);
      expect(result.firstPlayer).toBeLessThanOrEqual(numberOfPlayers);
    });
  });

  describe('checkMaraffa', () => {
    it('should return true if all three cards are present in the deck', () => {
      const suit = 0;
      const numberOfCards = 40;
      const deck = [];
      //create an array of numbers between 0 and numberOfCards
      for (let i = 0; i < 10; i++) {
        deck.push(i);
      }
      const result = service.checkMaraffa(suit, deck);

      expect(result.maraffa).toBe(true);
    });

    it('should return false if any of the three cards is missing from the deck', () => {
      const suit = 1;
      const deck = [19, 39, 33, 27, 14, 28, 37, 21, 9, 11];
      const result = service.checkMaraffa(suit, deck);

      expect(result.maraffa).toBe(false);
    });
  });

  it('should compute play card: user replied correct suit', () => {
    const trump = 2;
    const trick = [5];
    /*const deck = [19, 39, 33, 27, 14, 28, 37, 21, 5, 35,
        11, 23, 13, 26, 16, 29, 9, 25, 15, 12,
        36, 7, 31, 6, 34, 32, 18, 10, 17,
       8, 1, 4, 0, 24, 20, 38, 30, 2, 3, 22];*/
    const result = service.checkPlayCard(
      trick,
      6,
      [6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      false,
    );
    expect(result.valid).toBe(true);
  });

  it('should compute play card: user replied wrong suit', () => {
    const trump = 2;
    const trick = [5];
    /*const deck = [19, 39, 33, 27, 14, 28, 37, 21, 5, 35,
        11, 23, 13, 26, 16, 29, 9, 25, 15, 12,
        36, 7, 31, 6, 34, 32, 18, 10, 17,
       8, 1, 4, 0, 24, 20, 38, 30, 2, 3, 22];*/
    const result = service.checkPlayCard(
      trick,
      22,
      [6, 7, 8, 9, 10, 11, 12, 13, 14, 22],
      false,
    );
    expect(result.valid).toBe(false);
  });
  it('should compute play card: user replied wrong suit but is trump and has no card of that suit', () => {
    const trick = [30];
    /*const deck = [19, 39, 33, 27, 14, 28, 37, 21, 5, 35,
        11, 23, 13, 26, 16, 29, 9, 25, 15, 12,
        36, 7, 31, 6, 34, 32, 18, 10, 17,
       8, 1, 4, 0, 24, 20, 38, 30, 2, 3, 22];*/
    const result = service.checkPlayCard(
      trick,
      22,
      [6, 7, 8, 9, 10, 11, 12, 13, 14, 22],
      true,
    );
    expect(result.valid).toBe(true);
  });

  it('should compute play card: user replied wrong suit but is trump and has card of that suit', () => {
    const trick = [30];
    /*const deck = [19, 39, 33, 27, 14, 28, 37, 21, 5, 35,
        11, 23, 13, 26, 16, 29, 9, 25, 15, 12,
        36, 7, 31, 6, 34, 32, 18, 10, 17,
       8, 1, 4, 0, 24, 20, 38, 30, 2, 3, 22];*/
    const result = service.checkPlayCard(
      trick,
      22,
      [6, 7, 8, 9, 10, 31, 12, 13, 14, 22],
      true,
    );
    expect(result.valid).toBe(false);
  });
});
