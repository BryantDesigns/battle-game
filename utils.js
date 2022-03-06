const getDiceRollArray = (diceCount) => {
  return new Array(diceCount)
    .fill(0)
    .map((die) => Math.ceil(Math.random() * 6));
};

export {getDiceRollArray}