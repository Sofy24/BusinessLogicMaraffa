import { Test, TestingModule } from '@nestjs/testing';
import { GameService } from './game.service';
import { RandomCards } from '../utils/random';
import { CardsUtils } from 'src/utils/cardsFunctions';

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
      const user = 0;
      const suit = 0;
      const numberOfCards = 40;
      let deck = [];
      //create an array of numbers between 0 and numberOfCards
      for (let i = 0; i < numberOfCards; i++) {
        deck.push(i);
      }
      const result = service.checkMaraffa(user, suit, deck);
  
      expect(result).toBe(true);
    });
  
    it('should return false if any of the three cards is missing from the deck', () => {
      const user = 0;
      const suit = 1;
      const deck = [19, 39, 33, 27, 14, 28, 37, 21, 9, 11, 6, 23, 13, 26, 16, 29, 2, 25, 15, 12, 36, 7, 31, 35, 4, 32, 18, 10, 17,
        8, 1, 34, 0, 24, 20, 38, 30, 5, 3, 22]
      const result = service.checkMaraffa(user, suit, deck);
  
      expect(result).toBe(false);
    });
  });

  describe('computeScore', () => {
    it("should compute a score with trump present and first team's victory", () => {
      const trump = 0;
      const trick = [6, 5, 17, 34];
      const expectedTrickScore = 6;
      const result = service.computeScore(trick, trump);
      expect(result.score).toBe(expectedTrickScore);
      expect(result.firstTeam).toBe(true);
    });

    it("should compute a score with trump present and second team's victory", () => {
      const trump = 0;
      const trick = [5, 6, 17, 34];
      const expectedTrickScore = 6;
      const result = service.computeScore(trick, trump);
      expect(result.score).toBe(expectedTrickScore);
      expect(result.firstTeam).toBe(false);
    });

    it("should compute a score without trump and first team's victory", () => {
      const trump = 0;
      const trick = [16, 15, 17, 34];
      const expectedTrickScore = 6;
      const result = service.computeScore(trick, trump);
      expect(result.score).toBe(expectedTrickScore);
      expect(result.firstTeam).toBe(true);
    });

    it("should compute a score without trump and second team's victory", () => {
      const trump = 0;
      const trick = [15, 19, 16, 34];
      const expectedTrickScore = 4;
      const result = service.computeScore(trick, trump);
      expect(result.score).toBe(expectedTrickScore);
      expect(result.firstTeam).toBe(false);
    });
  });
});
