import {effectsOpen, effectsClose} from './filter.js'

const uploadFile = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body'); 
const uploadCancel = uploadOverlay.querySelector('#upload-cancel');

const scaleControlValue = document.querySelector('.scale__control--value');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const uploadPreview = document.querySelector('.img-upload__preview img');

const onPopupUploadEscKeydown = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    closeUploadOverlay();
  }
};

const onPopupUploadCancel = () => {
	closeUploadOverlay();
};

const scaleDoMin = () => {
	const minValue = 25;
	const percentValue = parseInt(scaleControlValue.value, 10);
	const scaleValue = parseFloat(uploadPreview.style.transform.slice(6, -1));

	if (percentValue > minValue) {
		scaleControlValue.value = `${percentValue - 25}%`;
		uploadPreview.style.transform = `scale(${scaleValue - 0.25})`;
	}
};

const scaleDoMax = () => {
	const maxValue = 100;
	const percentValue = parseInt(scaleControlValue.value, 10);
	const scaleValue = parseFloat(uploadPreview.style.transform.slice(6, -1));

	if (percentValue < maxValue) {
		scaleControlValue.value = `${percentValue + 25}%`;
		uploadPreview.style.transform = `scale(${scaleValue + 0.25})`;
	}
};

const openUploadOverlay = () => {
	scaleControlValue.value = '100%';
	uploadPreview.style.transform = 'scale(1)';

	effectsOpen();

	uploadOverlay.classList.remove('hidden');
	body.classList.add('modal-open');

	uploadCancel.addEventListener('click', onPopupUploadCancel);
	document.addEventListener('keydown', onPopupUploadEscKeydown);
	scaleControlSmaller.addEventListener('click', scaleDoMin);
	scaleControlBigger.addEventListener('click', scaleDoMax);
};

const closeUploadOverlay = () => {
	uploadOverlay.classList.add('hidden');
	body.classList.remove('modal-open');

	uploadFile.value = '';

	effectsClose();

	uploadCancel.removeEventListener('click', onPopupUploadCancel);
	document.removeEventListener('keydown', onPopupUploadEscKeydown);
	scaleControlSmaller.removeEventListener('click', scaleDoMin);
	scaleControlBigger.removeEventListener('click', scaleDoMax);
};

uploadFile.addEventListener('change', () => {
	openUploadOverlay();
});
