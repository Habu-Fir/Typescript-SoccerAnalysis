import { OutputTarget } from './summery';

export class ConsoleReport implements OutputTarget {
  print(output: string): void {
    console.log(output);
  }
}
