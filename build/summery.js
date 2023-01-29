"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summery = void 0;
class Summery {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matchData) {
        let analysisReport = this.analyzer.run(matchData);
        this.outputTarget.print(analysisReport);
    }
}
exports.Summery = Summery;
