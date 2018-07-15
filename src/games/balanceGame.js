import { cons } from 'hexlet-pairs';
import start from '..';
import { getRandomNumber } from '../utilFunc';

const gameDescription = 'Balance the given number.';

const getBalanceNumber = (arr) => {
  const bigNum = Math.max(...arr);
  const lowNum = Math.min(...arr);
  const sortedArr = arr.sort().slice(1, arr.length - 1);
  if ((bigNum - lowNum) <= 1) {
    return arr.sort();
  }
  return getBalanceNumber([bigNum - 1, lowNum + 1, ...sortedArr]);
};

const gameInit = () => {
  const question = String(getRandomNumber(100, 10000));
  const answer = getBalanceNumber(question.split('')).join('');
  return cons(question, answer);
};

export default () => start(gameDescription, gameInit);
