export interface IGameRulesPort {
  startRound(): { deck: number[]; firstPlayer: number };
  checkMaraffa(
    suit: number,
    deck: number[],
    value: number,
    trump: number,
  ): { maraffa: boolean };
  validateCard(
    trick: number[],
    card: number,
    userCards: number[],
    cardIsTrump: boolean,
  ): { valid: boolean };
  computeScore(input: {
    trick: number[];
    trump: number;
    mode: string;
    teamACards: number[];
    isSuitFinished: boolean[];
  }): { score: number; firstTeam: boolean; winningPosition: number };
}
