import { Analyzer } from './summery';
import { MatchData } from './MachData';
import { matchResult } from './matchResult';

export class WinsAnalyzer implements Analyzer {
  constructor(public team: string) {}
  run(matches: MatchData[]): string {
    let wins: number = 0;
    for (let match of matches) {
      if (match[1] === this.team && match[5] === matchResult.homeWin) {
        wins++;
      } else if (match[2] === this.team && match[5] === matchResult.awayWin) {
        wins++;
      }
    }

    return `${this.team} wins ${wins} games!`;
  }
}
