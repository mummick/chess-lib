import { CellCoord } from './models/cell-coord';
import { Vector } from './models/vector';

export class App {
  private readonly rootElement: HTMLElement;
  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
  }

  async init(): Promise<void> {}

  async start(): Promise<void> {
    await this.init();
    this.rootElement.textContent = 'Chess lib test';
    let cellCoord = new CellCoord(1, 2);
    let vector = new Vector(3, 0);
    console.log(cellCoord.toString());
    console.log(vector.sum(new Vector(0, 1)).resultPosition(cellCoord).toString());
  }
}
