import { Cell } from './models/cell';
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
    let cell = new Cell(1, 2);
    let vector = new Vector(3, 0);
    console.log(cell.toString());
    console.log(vector.sum(new Vector(0, 1)).resultPosition(cell).toString());
  }
}
