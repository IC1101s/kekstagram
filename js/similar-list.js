import {createPictures} from './main.js';
import {renderBigPicture, clearBigPicture} from './picture-modal.js'

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureList = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const body = document.querySelector('body'); 

const onPopupEscKeydown = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    closeBigPicture();
  }
};

const onPopupPictureCancel = () => {
	closeBigPicture();
};

const openBigPicture = (picture) => {
	renderBigPicture(picture);

	bigPicture.classList.remove('hidden');
	body.classList.add('modal-open');

	document.addEventListener('keydown', onPopupEscKeydown);
	bigPictureCancel.addEventListener('click', onPopupPictureCancel);
};

const closeBigPicture = () => {
	bigPicture.classList.add('hidden');
	body.classList.remove('modal-open');
	
	clearBigPicture();

	document.removeEventListener('keydown', onPopupEscKeydown);
	bigPictureCancel.removeEventListener('click', onPopupPictureCancel);
};

const renderPictureList = () => {
  const pictureListFragment = document.createDocumentFragment();
  
	createPictures.forEach((picture) => {
		const pictureElement = pictureTemplate.cloneNode(true);

		pictureElement.querySelector('.picture__img').src = picture.url;
		pictureElement.querySelector('.picture__likes').textContent = picture.likes;
		pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;

		pictureElement.addEventListener('click', (evt) => {
			evt.preventDefault();
			openBigPicture(picture);
		});

		pictureListFragment.appendChild(pictureElement);
	});

	pictureList.appendChild(pictureListFragment);
};

export {renderPictureList};