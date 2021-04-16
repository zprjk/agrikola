import ActionSpace from './action-space';
import Unit from './_/unit';

class GameBoard extends Unit {
  #actionSpaces: ActionSpace[];
  #round: number;

  constructor(initialActionSpaces: ActionSpace[]) {
    super();
    this.#actionSpaces = initialActionSpaces;
    this.#round = 1;
  }

  get round() {
    return this.#round;
  }

  nextRound() {
    this.#round += 1;
    return this.#round;
  }
}

export default GameBoard;
