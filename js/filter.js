const effects = document.querySelector('.img-upload__effects');
const uploadPreview = document.querySelector('.img-upload__preview img');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectUploadSlider = document.querySelector('.img-upload__effect-level');

const filtersEffects = {
	chrome: 'grayscale',
	sepia: 'sepia',
	marvin: 'invert',
	phobos: 'blur',
	heat: 'brightness'
};

noUiSlider.create(effectLevelSlider, {
    range: {
        min: 0,
        max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower'
});

const effectsGet = (evt) => {
	uploadPreview.className = '';
	uploadPreview.style.filter = '';

	let value = evt.target.value;
	let symbol = '';

	if (value != 'none') {
		effectUploadSlider.classList.remove('visually-hidden');

		effectLevelSlider.noUiSlider.off('update');
		effectLevelSlider.noUiSlider.on('update', (_, handle, unencoded) => {
			if (value === 'marvin') {
				symbol = '%';
			} else if (value === 'phobos') {
				symbol = 'px';
			}

			uploadPreview.style.filter = `${filtersEffects[value]}(${unencoded[handle]}${symbol})`;
			effectLevelValue.value = unencoded[handle];
		});
	}

	switch(value) {
		case 'chrome':
		case 'sepia':
			uploadPreview.classList.add(`effects__preview--${value}`);
			effectLevelSlider.noUiSlider.updateOptions({
	            range: {
	                min: 0,
	                max: 1
	            },
	            start: 1,
	            step: 0.1
	        });
		break;
		case 'marvin':
			uploadPreview.classList.add(`effects__preview--${value}`);
			effectLevelSlider.noUiSlider.updateOptions({
	            range: {
	                min: 0,
	                max: 100
	            },
	            start: 100,
	            step: 1
	        });
		break;
		case 'phobos':
			uploadPreview.classList.add('effects__preview--phobos');
			effectLevelSlider.noUiSlider.updateOptions({
	            range: {
	                min: 0,
	                max: 3
	            },
	            start: 3,
	            step: 0.1
	        });
		break;
		case 'heat':
			uploadPreview.classList.add('effects__preview--heat');
			effectLevelSlider.noUiSlider.updateOptions({
	            range: {
	                min: 1,
	                max: 3
	            },
	            start: 3,
	            step: 0.1
	        });
		break;
		default:
			uploadPreview.classList.add('effects__preview--none');
			effectUploadSlider.classList.add('visually-hidden');
			uploadPreview.style.filter = '';
		break;
	}
};

const effectsOpen = () => {
	effects.addEventListener('change', effectsGet);
	effectUploadSlider.classList.add('visually-hidden');
};

const effectsClose = () => {
	uploadPreview.className = '';
	uploadPreview.style.filter = '';
	effectUploadSlider.classList.add('visually-hidden');
	effects.removeEventListener('change', effectsGet);
};

export {effectsOpen, effectsClose};