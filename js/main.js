import {getMoсksData} from './data.js';
import {renderPictureList} from './similar-list.js';

const COUNT_MOCKS = 25;

const createPictures = new Array(COUNT_MOCKS).fill(null).map(() => {
	return getMoсksData();
});

renderPictureList();

export {createPictures};