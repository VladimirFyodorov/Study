type Turtle = 'turtle' | null;

type Game = {
  makeTurn: (direction: 'left' | 'right') => void;
  state: Array<Turtle>;
};

const startGame = (): Game => {
  const state: Array<Turtle> = ['turtle', null, null, null, null];

  // BEGIN (write your solution here)
  function makeTurn(turn: 'left' | 'right'): void {
    const index = state.indexOf('turtle');
    const newIndex = (turn === 'left') ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex > state.length - 1) throw new Error();

    state[index] = null;
    state[newIndex] = 'turtle';
  }
  // END

  return { makeTurn, state };
};

export default startGame;
