import getRandomNumber from '../utils.js';
import runGameLogic from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return getGCD(num2 % num1, num1);
};

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const correctAnswer = String(getGCD(firstNumber, secondNumber));
  const question = `${firstNumber} ${secondNumber}`;
  return [question, correctAnswer];
};

export default () => runGameLogic(generateRound, description);
