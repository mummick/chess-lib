import { CellCoord } from './models/cell-coord';
import { ChessColor } from './models/chess-color';
import { Field } from './models/field';
import { Knight } from './models/figures/knight';
import { Position } from './models/position';

export class App {
  private readonly rootElement: HTMLElement;
  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
  }

  async init(): Promise<void> {}

  async start(): Promise<void> {
    await this.init();
    this.rootElement.textContent = 'Chess lib test';
    //-------------------------------------------------
    // let cellCoord = new CellCoord(1, 2);
    // let vector = new Vector(3, 0);
    // console.log(cellCoord.toString());
    // console.log(vector.sum(new Vector(0, 1)).resultPosition(cellCoord).toString());
    //--------------------------------------------------
    let wknight = new Knight(ChessColor.white);
    let wknigth_pos = new CellCoord(6, 7);
    let position = new Position();
    position.set(wknigth_pos.toString(), wknight);
    let field = new Field(position, ChessColor.white);
    console.log(wknight.getMoves(wknigth_pos, field));
    let newField = field.makeMove(wknight.getMoves(wknigth_pos, field).values().next().value);
    console.log(newField.getPosition());
    //----------------------------------------
    console.log(newField.isFreeCell(new CellCoord(4, 6)));
  }
}
