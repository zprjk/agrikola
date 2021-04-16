import ActionSpace, {ActionSpaceAccumulation} from './models/action-space';

export default function App() {
  return null;
}

// -----------------------
// #### BRAINSTORMING ####
// -----------------------

function actionLog(actionSpace: ActionSpace) {
  if (actionSpace instanceof ActionSpaceAccumulation) {
    console.log('Action Space:', actionSpace.good, actionSpace.totalGoods);
  }
}

//  --- CORE ACTIONS SPACES ---
class ClayPit extends ActionSpaceAccumulation {
  constructor() {
    super('CLAY');
  }

  increment() {
    return super.increment(1);
  }
}

class Forest extends ActionSpaceAccumulation {
  constructor() {
    super('WOOD');
  }

  increment() {
    return super.increment(3);
  }
}

class ReedBank extends ActionSpaceAccumulation {
  constructor() {
    super('REED');
  }

  increment() {
    return super.increment(1);
  }
}

function turn() {
  clayPit.increment();
  forest.increment();
  reedBank.increment();
  actionLog(clayPit);
  actionLog(forest);
  actionLog(reedBank);
}

console.clear();
const clayPit = new ClayPit();
const forest = new Forest();
const reedBank = new ReedBank();

console.log('-- First Turn --');
turn();

console.log('-- Second Turn --');
turn();
console.log('A player taking wood ->', forest.take());

console.log('-- Third Turn --');
turn();
