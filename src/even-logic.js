import actual from '.';

let three = 0;
export const getRandomNum = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);
export const isEvenNumber = num => (num % 2 === 0 ? 'yes' : 'no');
export const game = (userName) => {
  if (three >= 3) {
    console.log(`Congratulations , ${userName}!`);
    return;
  }
  const num = getRandomNum(1, 1000);
  const correctAnswer = isEvenNumber(num);
  const userAnswer = actual(`Question : ${num}\nYour answer:`);
  const gameOverString = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
        \nLet's try again , ${userName}!`;
  if (correctAnswer === userAnswer) {
    three += 1;
    console.log('Correct!');
    game(userName);
  } else console.log(gameOverString);
};
