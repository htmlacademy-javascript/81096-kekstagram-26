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


const NAMES = [
  'Pedro',
  'Fatima',
  'Nuno',
  'Alessandra',
  'Ivan',
  'Fedor',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
];

const DESCRIPTIONS = [
  'Мальчик тянет за собой игрушку - машинку на веревке.',
  'Мне понравилась фотография, потому что она  (четко передает чувства, эмоции, атмосферу.',
  'За малышом открывается вид на большой и красивый город.',
  'На фотографии мы видим … (девочек / двух юношей / много выпускников)',
  'Я считаю, что снимок получился удачным и атмосферным.',
];

let commentId = 1;

// Cписок комментариев, оставленных другими пользователями к этой фотографии
const createComment = () => ({
  id: commentId++,
  avatar: `img/avatar-${randomInteger(1, 6)}.svg`,
  massage: MESSAGES[randomInteger(0, MESSAGES.length - 1)],
  name: NAMES[randomInteger(0, NAMES.length - 1)],
});

const createPost = (Ids) => ({
  id: Ids,
  url: `photos/${Ids}.jpg`,
  description: DESCRIPTIONS[randomInteger(0, DESCRIPTIONS.length - 1)],
  likes: (randomInteger(15, 200)),
  comments: Array.from({length: randomInteger(1, 5)}, createComment),
});

const createSomePosts = (count) => {
  const objects = [];
  for (let i = 1; i <= count; i++) {
    objects.push(createPost(i));
  }
  return objects;
};
const maxObjectCount = 25;
const posts = createSomePosts(maxObjectCount);
