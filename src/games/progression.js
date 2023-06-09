import getRandomNumber from '../utils.js';
import runGameLogic from '../index.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const generateArray = () => {
  const step = getRandomNumber(1, 20);
  const resultProgression = [];
  const startNum = getRandomNumber(1, 50);
  for (let i = 0; i <= progressionLength; i += 1) {
    resultProgression.push(startNum + i * step);
  }
  return resultProgression;
};

const generateRound = () => {
  const resultProgression = generateArray();
  const hiddenIndex = getRandomNumber(1, progressionLength - 1);
  const correctAnswer = String(resultProgression[hiddenIndex]);
  resultProgression[hiddenIndex] = '..';
  const question = resultProgression.join(' ');
  return [question, correctAnswer];
};

export default () => runGameLogic(generateRound, description);
