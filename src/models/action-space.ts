import Good from './_/good';
import Unit from './_/unit';

abstract class ActionSpace extends Unit {
  protected actions: any[];

  constructor() {
    super();
    this.actions = [];
  }
}

type ActionSpacePermanentType = 'and/or' | 'afterward';
type GoodType =
  | 'WOOD'
  | 'CLAY'
  | 'STONE'
  | 'REED'
  | 'GRAIN'
  | 'VEGETABLE'
  | 'FOOD';

export class ActionSpacePermanent extends ActionSpace {
  private type: ActionSpacePermanentType;

  constructor(type: ActionSpacePermanentType) {
    super();
    this.type = type;
  }

  get Type() {
    return this.type;
  }

  get Actions() {
    return this.actions;
  }
}

export class ActionSpaceAccumulation extends ActionSpace {
  private _good: Good;
  private _totalGoods: number;

  constructor(good: GoodType) {
    super();
    this._good = good;
    this._totalGoods = 0;
  }

  get good() {
    return this._good;
  }

  get totalGoods() {
    return this._totalGoods;
  }

  increment(value: number = 1) {
    this._totalGoods += value;
  }

  take() {
    const total = this._totalGoods;
    this._totalGoods = 0; // reset

    return total;
  }
}

export default ActionSpace;
