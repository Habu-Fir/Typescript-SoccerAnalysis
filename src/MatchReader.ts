import { matchResult } from './matchResult';
import { dateStringToDate } from './utils';
import { MatchData } from './MachData';

interface DataReader {
  data: string[][];
  readFile(): void;
}

export class MatchReader {
  constructor(public reader: DataReader) {}
  matches: MatchData[] = [];
  load = (): void => {
    this.reader.readFile();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as matchResult,
        row[6],
      ];
    });
  };
}
