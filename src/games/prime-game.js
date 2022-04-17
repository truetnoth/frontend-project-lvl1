import {
  generateRandom,
  ROUND_NUMBER,
  showFailMessage,
  checkAnswer,
  userAnswer,
  isPrime,
} from '../index.js';

const isPrimeGame = (userName) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let questionCount = 0;

  for (questionCount; questionCount < ROUND_NUMBER; questionCount += 1) {
    const askNumber = generateRandom();
    const correctAnswer = isPrime(askNumber) ? 'yes' : 'no';

    console.log(`Question: ${askNumber}`);

    const answer = userAnswer();

    if (answer !== correctAnswer) {
      showFailMessage(answer, correctAnswer, userName);
      break;
    } else console.log('Correct!');
  }

  checkAnswer(questionCount, userName);
};

export default isPrimeGame;
