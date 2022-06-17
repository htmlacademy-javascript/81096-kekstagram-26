// Функция, возвращающая случайное целое число из переданного диапазона

function randomInteger(min, max) {
  // получить случайное число от (min-0) до (max+100)
  const random = min + Math.random() * (max - min);
  return Math.round(random);
}
// randomInteger(0, 100);


// Функция для проверки максимальной длины строки

function checkMaxLeghtString (string, maxLengthSumbols = 140) {
  if (typeof string === 'string') {
    return string.length <= maxLengthSumbols;
  } else {
    throw new Error ('Допустимое количество символов превышено');
  }
}
checkMaxLeghtString('');


const Names = [
  'Pedro',
  'Fatima',
  'Nuno',
  'Alessandra',
  'Ivan',
  'Fedor',
];

const Messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
];

const createObject = (Ids) => ({
  id: Ids,
  imageUrl: 'photos/' + Ids + '.jpg',
  photoDescription: 'Мне понравилась фотография, потому что она  (четко передает чувства, эмоции, атмосферу.',
  numberLike: (randomInteger(15, 200))
});

const createObjects = (count) => {
  const objects = [];
  for (let i = 1; i <= count; i++) {
    objects.push(createObject(i));
  }
  return objects;
}

const maxObjectCount = 25;
const objects = createObjects(maxObjectCount);

// Cписок комментариев, оставленных другими пользователями к этой фотографии
const createComments = () => {
  return {
    id: randomInteger(0, 10000),
    avatar: 'img/avatar-' + randomInteger(0, 6) + '.svg',
    massage: Messages[randomInteger(0, Messages.length - 1)],
    name: Names[randomInteger(0, Names.length - 1)],
   };
};
const similarComments = Array.from({length: 6}, createComments);
