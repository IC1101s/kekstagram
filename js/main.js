import {getMoсksData} from './data.js';

const COUNT_MOCKS = 25;

const mocksData = new Array(COUNT_MOCKS).fill(null).map(() => {
	return getMoсksData();
});

console.log(mocksData);