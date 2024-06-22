import { Test, TestingModule } from '@nestjs/testing';
import { ElevenZeroService } from '../eleven_to_zero_mode/game.service';

describe('GameService', () => {
  let service: ElevenZeroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ElevenZeroService],
    }).compile();

    service = module.get<ElevenZeroService>(ElevenZeroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('computeScore', () => {
    it("should compute a score with trump present and first team's victory", () => {
      const trump = 0;
      const trick = [6, 5, 37, 24];
      /*const deck = [19, 39, 33, 27, 14, 28, 37, 21, 9, 6,
         11, 23, 13, 26, 16, 29, 5, 25, 15, 12,
         36, 7, 31, 35, 34, 32, 18, 10, 17,
        8, 1, 4, 0, 24, 20, 38, 30, 2, 3, 22];*/
      const isSuitFinished = [true, true, true, true];
      const expectedTrickScore = 6;
      const expectedWinningPosition = 0;
      const result = service.computeScore(trick, trump, isSuitFinished);
      expect(result.score).toBe(expectedTrickScore);
      expect(result.firstTeam).toBe(true);
      expect(result.winningPosition).toBe(expectedWinningPosition);
    });

    it("should compute a score with trump present and second team's victory", () => {
      const trump = 0;
      const trick = [5, 6, 27, 24];
      /*const deck = [19, 39, 33, 27, 14, 28, 37, 21, 9, 6,
         11, 23, 13, 26, 16, 29, 5, 25, 15, 12,
         36, 7, 31, 35, 34, 32, 18, 10, 17,
        8, 1, 4, 0, 24, 20, 38, 30, 2, 3, 22];*/
      const isSuitFinished = [false, false, true, true];
      const expectedTrickScore = 6;
      const expectedWinningPosition = 1;
      const result = service.computeScore(trick, trump, isSuitFinished);
      expect(result.score).toBe(expectedTrickScore);
      expect(result.firstTeam).toBe(false);
      expect(result.winningPosition).toBe(expectedWinningPosition);
    });

    it("should compute a score without trump and first team's victory", () => {
      const trump = 2;
      const trick = [6, 5, 7, 4];
      /*const deck = [19, 39, 33, 27, 14, 28, 37, 21, 9, 6,
        11, 23, 13, 26, 16, 29, 5, 25, 15, 12,
        36, 7, 31, 35, 34, 32, 18, 10, 17,
       8, 1, 4, 0, 24, 20, 38, 30, 2, 3, 22];*/
      const isSuitFinished = [false, false, false, false];
      const expectedTrickScore = 6;
      const expectedWinningPosition = 2;
      const result = service.computeScore(trick, trump, isSuitFinished);
      expect(result.score).toBe(expectedTrickScore);
      expect(result.firstTeam).toBe(true);
      expect(result.winningPosition).toBe(expectedWinningPosition);
    });

    it("should compute a score without trump and second team's victory", () => {
      const trump = 2;
      const trick = [5, 9, 6, 4];
      /*const deck = [19, 39, 33, 27, 14, 28, 37, 21, 5, 35,
        11, 23, 13, 26, 16, 29, 9, 25, 15, 12,
        36, 7, 31, 6, 34, 32, 18, 10, 17,
       8, 1, 4, 0, 24, 20, 38, 30, 2, 3, 22];*/
      const isSuitFinished = [false, false, false, false];
      const expectedTrickScore = 4;
      const expectedWinningPosition = 1;
      const result = service.computeScore(trick, trump, isSuitFinished);
      expect(result.score).toBe(expectedTrickScore);
      expect(result.firstTeam).toBe(false);
      expect(result.winningPosition).toBe(expectedWinningPosition);
    });

    it("should compute a score without trump and second team's victory", () => {
      const trump = 2;
      const trick = [5, 9, 6, 4];
      /*const deck = [19, 39, 33, 27, 14, 28, 37, 21, 5, 35,
        11, 23, 13, 26, 16, 29, 9, 25, 15, 12,
        36, 7, 31, 6, 34, 32, 18, 10, 17,
       8, 1, 4, 0, 24, 20, 38, 30, 2, 3, 22];*/
      const isSuitFinished = [false, false, false, false];
      const expectedTrickScore = 4;
      const expectedWinningPosition = 1;
      const result = service.computeScore(trick, trump, isSuitFinished);
      expect(result.score).toBe(expectedTrickScore);
      expect(result.firstTeam).toBe(false);
      expect(result.winningPosition).toBe(expectedWinningPosition);
    });

    it('should compute 11 to 0 because a player of the first team played the wrong suit', () => {
      const trump = 2;
      const trick = [5, 9, 36, 4];
      /*const deck = [19, 39, 33, 27, 14, 28, 37, 21, 5, 35,
        11, 23, 13, 26, 16, 29, 9, 25, 15, 12,
        36, 7, 31, 6, 34, 32, 18, 10, 17,
       8, 1, 4, 0, 24, 20, 38, 30, 2, 3, 22];*/
      const isSuitFinished = [false, false, false, false];
      const expectedTrickScore = 11;
      const result = service.computeScore(trick, trump, isSuitFinished);
      expect(result.score).toBe(expectedTrickScore);
      expect(result.firstTeam).toBe(true);
    });

    it('should compute 11 to 0 because a player of the second team played the wrong suit', () => {
      const trump = 2;
      const trick = [5, 29, 6, 4];
      /*const deck = [19, 39, 33, 27, 14, 28, 37, 21, 5, 35,
        11, 23, 13, 26, 16, 29, 9, 25, 15, 12,
        36, 7, 31, 6, 34, 32, 18, 10, 17,
       8, 1, 4, 0, 24, 20, 38, 30, 2, 3, 22];*/
      const isSuitFinished = [false, false, false, false];
      const expectedTrickScore = 11;
      const result = service.computeScore(trick, trump, isSuitFinished);
      expect(result.score).toBe(expectedTrickScore);
      expect(result.firstTeam).toBe(false);
    });
  });
});
