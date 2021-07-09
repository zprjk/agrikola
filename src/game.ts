import {Game, Ctx} from 'boardgame.io';
import {INVALID_MOVE} from 'boardgame.io/core';

export type G = {
  actionSpaces: Array<string>;
};

export const Agrikola: Game<G, Ctx> = {
  setup: (): G => {
    return {
      actionSpaces: Array(14).fill(null),
    };
  },

  turn: {
    stages: {
      preparation: {
        moves: {},
        next: 'work',
      },

      work: {
        moves: {},
        next: 'returnHome',
      },

      returnHome: {
        moves: {},
      },

      harvest: {
        moves: {},
      },
    },
  },

  events: {},

  moves: {
    drawActionSpace: (G, ctx) => {
      G.actionSpaces[ctx.turn - 1] = 'action-space';
      ctx.events!.setStage!('preparation');
    },
    chooseActionSpace: (G, ctx, id: number) => {
      if (G.actionSpaces[id] === null) {
        return INVALID_MOVE;
      }

      ctx.events!.endStage!();
    },
  },
};
