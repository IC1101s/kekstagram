import {createPictures} from './main.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureList = document.querySelector('.pictures');

const renderPictureList = () => {
  const pictureListFragment = document.createDocumentFragment();
  
	createPictures.forEach(({url, likes, comments}) => {
		const pictureElement = pictureTemplate.cloneNode(true);
		pictureElement.querySelector('.picture__img').src = url;
		pictureElement.querySelector('.picture__likes').textContent = likes;
		pictureElement.querySelector('.picture__comments').textContent = comments.length;
		pictureListFragment.appendChild(pictureElement);
	});

	pictureList.appendChild(pictureListFragment);
};

export {renderPictureList};