import readlineSync from 'readline-sync';

export const ROUND_NUMBER = 3;

export const welcome = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// export const gameLoop = () => {

// };

export const userAnswer = () => readlineSync.question('Your answer: ');

export const generateRandom = (limit = 100) => Math.floor(Math.random() * limit);

export const countGcd = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }

  return countGcd(secondNumber, firstNumber % secondNumber);
};

export const checkAnswer = (questionCount, userName) => {
  if (questionCount === ROUND_NUMBER) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export const showFailMessage = (answer, correctAnswer, userName) => {
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
};

export const generateRandomSequence = () => {
  const result = [];
  const sequenceStep = generateRandom(10);
  result.push(generateRandom());
  for (let i = 1; i < 10; i += 1) {
    result.push(result[i - 1] + sequenceStep);
  }

  return result;
};

export const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};