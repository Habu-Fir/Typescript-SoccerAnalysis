"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const summery_1 = require("./summery");
const WinsAnalysyis_1 = require("./WinsAnalysyis");
const ConsoleReport_1 = require("./ConsoleReport");
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summery = new summery_1.Summery(new WinsAnalysyis_1.WinsAnalyzer('Man United'), new ConsoleReport_1.ConsoleReport());
summery.buildAndPrintReport(matchReader.matches);
// class NearestToTemp {
//   posNum: number[] = [];
//   negNum: number[] = [];
//   num: number = 0;
//   constructor(public datas: number[]) {}
//   TempNearestToZero = (): number => {
//     for (let i = 0; i < this.datas.length; i++) {
//       if (this.datas[i] > 0) {
//         this.posNum.push(this.datas[i]);
//       } else if (this.datas[i] < 0) {
//         this.negNum.push(this.datas[i]);
//       }
//     }
//     let dataNeg: number = this.sort(this.negNum); //-2
//     let dataPpos: number = this.sort(this.posNum); //+2
//     if (-dataNeg === dataPpos) {
//       return dataPpos;
//     } else if (-dataNeg > dataPpos) {
//       return dataPpos;
//     } else {
//       return dataNeg;
//     }
//   };
//   sort = (tempData: number[]): number => {
//     for (let i = 0; i < tempData.length; i++) {
//       for (let j = 0; j < tempData.length - i - 1; j++) {
//         if (tempData[j] > tempData[j + 1]) {
//           let temp = tempData[j + 1];
//           tempData[j + 1] = tempData[j];
//           tempData[j] = temp;
//         }
//       }
//     }
//     if (tempData[0] < 0) {
//       return tempData[tempData.length - 1];
//     } else  {
//       return tempData[0];
//     }
//   };
// }
// const tempNearestToZero = new NearestToTemp([7, 5, 9, 5, 4, 1]);
// //tempNearestToZero.TempNearestToZero();
// console.log(tempNearestToZero.TempNearestToZero());
