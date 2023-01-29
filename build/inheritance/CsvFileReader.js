"use strict";
// import Fs from 'fs';
// import { dateStringToDate } from './utils';
// import { matchResult } from './matchResult';
// export abstract class CsvFileReader<T> {
//   data: T[] = [];
//   constructor(public filename: string) {}
//   abstract mapRow(row: string[]): T;
//   readCsvFile(): void {
//     this.data = Fs.readFileSync(this.filename, {
//       encoding: 'utf-8',
//     })
//       .split('\n')
//       .map((row: string): string[] => {
//         return row.split(',');
//       })
//       .map(this.mapRow);
//   }
// }
