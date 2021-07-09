// import ActionSpace, {ActionSpaceAccumulation} from './models/action-space';
import {Client} from 'boardgame.io/react';
import {Agrikola} from './game';

const App = Client({game: Agrikola, numPlayers: 2});

export default App;

// -----------------------
// #### BRAINSTORMING ####
// -----------------------

// function actionLog(actionSpace: ActionSpace) {
//   if (actionSpace instanceof ActionSpaceAccumulation) {
//     console.log('Action Space:', actionSpace.good, actionSpace.totalGoods);
//   }
// }

// //  --- CORE ACTIONS SPACES ---
// class ClayPit extends ActionSpaceAccumulation {
//   constructor() {
//     super('CLAY');
//   }

//   increment() {
//     return super.increment(1);
//   }
// }

// class Forest extends ActionSpaceAccumulation {
//   constructor() {
//     super('WOOD');
//   }

//   increment() {
//     return super.increment(3);
//   }
// }

// class ReedBank extends ActionSpaceAccumulation {
//   constructor() {
//     super('REED');
//   }

//   increment() {
//     return super.increment(1);
//   }
// }

// function turn() {
//   clayPit.increment();
//   forest.increment();
//   reedBank.increment();
//   actionLog(clayPit);
//   actionLog(forest);
//   actionLog(reedBank);
// }

// console.clear();
// const clayPit = new ClayPit();
// const forest = new Forest();
// const reedBank = new ReedBank();

// console.log('-- First Turn --');
// turn();

// console.log('-- Second Turn --');
// turn();
// console.log('A player taking wood ->', forest.take());

// console.log('-- Third Turn --');
// turn();
