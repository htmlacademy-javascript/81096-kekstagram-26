const similarListElement = document.querySelector('.pictures');
const findPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

//  Генерирует фотографии и вставляет необходимые данные в шаблон
const createPhotos = (photosItem) => {
  const similarListFragment = document.createDocumentFragment();

  photosItem.forEach(({url, likes, comments}) => {
    const photoElement = findPhotoTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.lenght;
    similarListFragment.append(photoElement);
  });
  similarListElement.append(similarListFragment);
};

export {createPhotos};
