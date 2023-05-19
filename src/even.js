import readlineSync from 'readline-sync';

const roundsNumber = 3;

const isEven = (number) => number % 2 === 0;
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const runEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < roundsNumber; i += 1) {
    const question = getRandomNumber(0, 100);
    console.log(`Question ${question}`);
    const answer = isEven(question) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again ${name}`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runEvenGame;
