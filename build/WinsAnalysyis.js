"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalyzer = void 0;
const matchResult_1 = require("./matchResult");
class WinsAnalyzer {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === this.team && match[5] === matchResult_1.matchResult.homeWin) {
                wins++;
            }
            else if (match[2] === this.team && match[5] === matchResult_1.matchResult.awayWin) {
                wins++;
            }
        }
        return `${this.team} wins ${wins} games!`;
    }
}
exports.WinsAnalyzer = WinsAnalyzer;
