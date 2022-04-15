import { 
	generateRandom, 
	ROUND_NUMBER, 
	showFailMessage,
	checkAnswer,
	takeAnswer,
} from '../index.js';

const calcGame = (userName) => {
  console.log('What is the result of the expression?');
  const operations = ['*', '+', '-'];
  let questionCount = 0;

  for (questionCount; questionCount < ROUND_NUMBER; questionCount += 1) {
    const firstNumber = generateRandom();
	const secondNumber = generateRandom();
	const sign = operations[generateRandom(operations.length)];

	const expression = `${firstNumber}${sign}${secondNumber}`;
    const correctAnswer = Function('return ' + expression)();
    
	console.log(`Question: ${expression}`);

    const answer = takeAnswer();

    if (Number(answer) !== correctAnswer) {
	  showFailMessage(answer, correctAnswer, userName);
      break;
    } else console.log('Correct!');
  }

  checkAnswer(questionCount, userName);
};

export default calcGame;
