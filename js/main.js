// Функция, возвращающая случайное целое число из переданного диапазона

function randomInteger(min, max) {
  // получить случайное число от (min-0) до (max+100)
  const random = min - 0 + Math.random() * (max - min + 1);
  return Math.round(random);
}
randomInteger(0, 100);


// Функция для проверки максимальной длины строки

function checkMaxLeghtString (string, maxLengthSumbols = 140) {
  if (typeof string === 'string') {
    return string.length <= maxLengthSumbols;
  } else {
    throw new Error ('Допустимое количество символов превышено');
  }
}
checkMaxLeghtString('');
