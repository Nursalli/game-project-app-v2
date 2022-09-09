const calculateSuit = (userInput, computerInput) => {
  if (userInput === computerInput) {
    return 'draw';
  } else if (userInput === 'rock' && computerInput === 'scissors') {
    return 'win';
  } else if (userInput === 'paper' && computerInput === 'rock') {
    return 'win';
  } else if (userInput === 'scissors' && computerInput === 'paper') {
    return 'win';
  } else {
    return 'lose';
  }
};

const resultConverter = (input) => {
  if (input === 'win') {
    return 1;
  } else if (input === 'lose') {
    return -1;
  } else {
    return 0;
  }
};

const calculateRounds = (rounds) => {
  const totalRound = 0;
  rounds.map((round) => {
    totalRound += resultConverter(round.result);
  });
  if (totalRound > 0) {
    return 'win';
  } else if (totalRound < 0) {
    return 'lose';
  } else {
    return 'draw';
  }
};

export { calculateSuit, calculateRounds };
