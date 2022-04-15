import { 
	generateRandom, 
	ROUND_NUMBER, 
	showFailMessage,
	checkAnswer,
	takeAnswer,
} from '../index.js';

const isEvenGame = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let questionCount = 0;

  for (questionCount; questionCount < ROUND_NUMBER; questionCount += 1) {
    const askNumber = generateRandom();
    const correctAnswer = askNumber % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${askNumber}`);

    const answer = takeAnswer();

    if (answer !== correctAnswer) {
	  showFailMessage(answer, correctAnswer, userName);
      break;
    } else console.log('Correct!');
  }

  checkAnswer(questionCount, userName);
};

export default isEvenGame;
