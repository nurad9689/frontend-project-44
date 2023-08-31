import getRandomNumber from '../utils.js';
import runGameLogic from '../index.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const generateArray = (start, step, length) => {
  const resultProgression = [];
  for (let i = 0; i <= length; i += 1) {
    resultProgression.push(start + i * step);
  }
  return resultProgression;
};

const generateRound = () => {
  const startNum = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 20);
  const resultProgression = generateArray(startNum, step, progressionLength);
  
  const hiddenIndex = getRandomNumber(1, progressionLength - 1);
  const correctAnswer = String(resultProgression[hiddenIndex]);
  resultProgression[hiddenIndex] = '..';
  const question = resultProgression.join(' ');
  return [question, correctAnswer];
};

export default () => runGameLogic(generateRound, description);
