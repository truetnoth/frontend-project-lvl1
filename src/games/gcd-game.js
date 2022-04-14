import readlineSync from 'readline-sync';
import { generateRandom, ROUND_NUMBER, countGcd } from '../index.js';

const gcd = (userName) => {
  console.log('Find the greatest common divisor of given numbers.');
  let questionCount = 0;

  for (questionCount; questionCount < ROUND_NUMBER; questionCount += 1) {
    const firstNumber = generateRandom();
	const secondNumber = generateRandom();

	const expression = `${firstNumber} ${secondNumber}`;
    const realAnswer = countGcd(firstNumber, secondNumber);
    
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

export default gcd;
