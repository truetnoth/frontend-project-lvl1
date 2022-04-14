import readlineSync from 'readline-sync';

export const welcome = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// export const gameLoop = () => {

// };

export const generateRandom = (limit = 100) => {
	return Math.floor(Math.random() * limit);
};

