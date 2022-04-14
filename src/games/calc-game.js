import readlineSync from 'readline-sync';
import { generateRandom, ROUND_NUMBER } from '../index.js';

const calcGame = (userName) => {
  console.log('What is the result of the expression?');
  const operations = ['*', '+', '-'];
  let questionCount = 0;

  for (questionCount; questionCount < ROUND_NUMBER; questionCount += 1) {
    const firstNumber = generateRandom();
	const secondNumber = generateRandom();
	const sign = operations[generateRandom(operations.length)];

	const expression = `${firstNumber}${sign}${secondNumber}`;
    const realAnswer = Function('return ' + expression)();
    
	console.log(`Question: ${expression}`);

    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) !== realAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${realAnswer}".\nLet's try again, ${userName}!`);
      break;
    } else console.log('Correct!');
  }

  if (questionCount === ROUND_NUMBER) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default calcGame;
