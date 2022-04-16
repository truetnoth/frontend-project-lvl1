import {
  generateRandom,
  ROUND_NUMBER,
  showFailMessage,
  countGcd,
  checkAnswer,
  userAnswer,
} from '../index.js';

const gcd = (userName) => {
  console.log('Find the greatest common divisor of given numbers.');
  let questionCount = 0;

  for (questionCount; questionCount < ROUND_NUMBER; questionCount += 1) {
    const firstNumber = generateRandom();
    const secondNumber = generateRandom();

    const expression = `${firstNumber} ${secondNumber}`;
    const correctAnswer = countGcd(firstNumber, secondNumber);

    console.log(`Question: ${expression}`);

    const answer = userAnswer();

    if (Number(answer) !== correctAnswer) {
      showFailMessage(answer, correctAnswer, userName);
      break;
    } else console.log('Correct!');
  }

  checkAnswer(questionCount, userName);
};

export default gcd;
