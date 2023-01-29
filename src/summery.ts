import { MatchData } from './MachData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(output: string): void;
}

export class Summery {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
  buildAndPrintReport(matchData: MatchData[]): void {
    let analysisReport = this.analyzer.run(matchData);
    this.outputTarget.print(analysisReport);
  }
}
