import getRandomNumber from '../utils.js';
import runGameLogic, { roundsNumber } from '../index.js';

const description = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*', '/'];
  const reandomOperatorIndex = getRandomNumber(0, operators.length - 1);
  return operators[reandomOperatorIndex];
};

const calculate = (operator, operand1, operand2) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return operand1 / operand2;
    default:
      return '';
  }
};

const generateRound = () => {
  const firstOperand = getRandomNumber(1, 10);
  const secondOperand = getRandomNumber(1, 10);
  const operator = getRandomOperator();
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = String(calculate(operator, firstOperand, secondOperand));
  return [question, correctAnswer];
};

const runCalcGame = () => {
  const rounds = [];
  for (let i = 0; i < roundsNumber; i += 1) {
    rounds[i] = generateRound();
  }
  return runGameLogic(rounds, description);
};

export default runCalcGame;
