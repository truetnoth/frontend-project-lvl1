import readlineSync from 'readline-sync';

const isEvenGame = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const ANSWERS_NUMBER = 3;
  const NUMBER_SET_LIMIT = 100;
  let questionCount = 0

  for (questionCount; questionCount < ANSWERS_NUMBER; questionCount += 1) {
	let askNumber = Math.floor(Math.random() * NUMBER_SET_LIMIT);
	let realAnswer = askNumber % 2 === 0 ? 'yes' : 'no';

	console.log(`Question: ${askNumber}`);

	let answer = readlineSync.question('Your answer: ');

	if (answer !== realAnswer) {
	  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${realAnswer}".\nLet's try again, ${userName}!`);
	  break;
	} else console.log('Correct!');
  }

  if (questionCount === ANSWERS_NUMBER) {
	console.log(`Congratulations, ${userName}!`);
  }
};

export default isEvenGame;
