// Файл для хранения функции-утилиты получения рандомного числа
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default getRandomNumber;
