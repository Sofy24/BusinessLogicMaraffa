import { Test, TestingModule } from '@nestjs/testing';
import { ClassicGameService } from './game.service';
import { RandomCards } from '../utils/random';
import { CardsUtils } from 'src/utils/cardsFunctions';

describe('GameService', () => {
  let service: ClassicGameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassicGameService],
    }).compile();

    service = module.get<ClassicGameService>(ClassicGameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('computeScore', () => {
    it("should compute a score with trump present and first team's victory", () => {
      const trump = 0;
      const trick = [6, 5, 17, 34];
      const expectedTrickScore = 6;
      const expectedWinningPosition = 0;
      const result = service.computeScore(trick, trump);
      expect(result.score).toBe(expectedTrickScore);
      expect(result.firstTeam).toBe(true);
      expect(result.winningPosition).toBe(expectedWinningPosition);
    });

    it("should compute a score with trump present and second team's victory", () => {
      const trump = 0;
      const trick = [5, 6, 17, 34];
      const expectedTrickScore = 6;
      const expectedWinningPosition = 1;
      const result = service.computeScore(trick, trump);
      expect(result.score).toBe(expectedTrickScore);
      expect(result.firstTeam).toBe(false);
      expect(result.winningPosition).toBe(expectedWinningPosition);
    });

    it("should compute a score without trump and first team's victory", () => {
      const trump = 0;
      const trick = [16, 15, 17, 34];
      const expectedTrickScore = 6;
      const expectedWinningPosition = 2;
      const result = service.computeScore(trick, trump);
      expect(result.score).toBe(expectedTrickScore);
      expect(result.firstTeam).toBe(true);
      expect(result.winningPosition).toBe(expectedWinningPosition);
    });

    it("should compute a score without trump and second team's victory", () => {
      const trump = 0;
      const trick = [15, 19, 16, 34];
      const expectedTrickScore = 4;
      const expectedWinningPosition = 1;
      const result = service.computeScore(trick, trump);
      expect(result.score).toBe(expectedTrickScore);
      expect(result.firstTeam).toBe(false);
      expect(result.winningPosition).toBe(expectedWinningPosition);
    });
  });
});
