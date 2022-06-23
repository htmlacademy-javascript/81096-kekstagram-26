// Функция, возвращающая случайное целое число из переданного диапазона

function randomInteger(min, max) {
  // получить случайное число от (min-0) до (max+100)
  const random = min + Math.random() * (max - min);
  return Math.round(random);
}

export {randomInteger};
