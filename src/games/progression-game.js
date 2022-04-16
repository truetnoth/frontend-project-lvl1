import {
  generateRandom,
  ROUND_NUMBER,
  showFailMessage,
  generateRandomSequence,
  checkAnswer,
  userAnswer,
} from '../index.js';

const progression = (userName) => {
  console.log('What number is missing in the progression?');
  let questionCount = 0;

  for (questionCount; questionCount < ROUND_NUMBER; questionCount += 1) {
    const sequence = generateRandomSequence();
    const sequenceHole = generateRandom(sequence.length);
    const correctAnswer = sequence[sequenceHole];

    sequence[sequenceHole] = '..';
    const expression = sequence.join(' ');

    console.log(`Question: ${expression}`);

    const answer = userAnswer();

    if (Number(answer) !== correctAnswer) {
      showFailMessage(answer, correctAnswer, userName);
      break;
    } else console.log('Correct!');
  }

  checkAnswer(questionCount, userName);
};

export default progression;
