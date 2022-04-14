import readlineSync from 'readline-sync';
import { generateRandom } from '../index.js';

const isEvenGame = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const ROUND_NUMBER = 3;
  let questionCount = 0;

  for (questionCount; questionCount < ROUND_NUMBER; questionCount += 1) {
    const askNumber = generateRandom();
    const realAnswer = askNumber % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${askNumber}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== realAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${realAnswer}".\nLet's try again, ${userName}!`);
      break;
    } else console.log('Correct!');
  }

  if (questionCount === ROUND_NUMBER) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default isEvenGame;
