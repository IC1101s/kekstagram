import {getRandomNum, getRandVal} from './util.js';

const descriptions = [
  `На снимке закат над тихим озером.`,
  `Деревья отражаются в спокойной воде реки.`,
  `На фото старинный мост через реку.`,
  `Солнечные лучи пробиваются сквозь густые облака.`,
  `Горные вершины скрыты под плотным туманом.`,
  `Песчаный берег омывается тихими волнами моря.`,
  `На фотографии дети играют в лесу.`,
  `В кадре белый кот на подоконнике.`,
  `Летящие птицы на фоне закатного неба.`,
  `Снежные деревья под ярким зимним солнцем.`
];

const messages = [
	`Всё отлично!`,
	`В целом всё неплохо. Но не всё.`,
	`Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.`,
	`Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.`,
	`Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.`,
	`Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`
];

const names = [
	`Артем`,
	`Максим`,
	`Стас`,
	`Никита`,
	`Гоша`
];

const getRandIntFromInterval = (min, max) => {
	const previousValues = [];

	return () => {
		if (previousValues.length >= (max - min + 1)) {
	    throw new Error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
	  }

	  let currentValue = getRandomNum(min, max);

		while (previousValues.includes(currentValue)) {
	    currentValue = getRandomNum(min, max);
	  }
	  previousValues.push(currentValue);

	  return currentValue;
	};
};

const getRandCountComments = (min, max) => {
	const getRanIntForIdComm = getRandIntFromInterval(1, 135);

	return new Array(getRandomNum(min, max)).fill(null).map(() => { 
		return {
		  id: getRanIntForIdComm(),
		  avatar: `img/avatar-${getRandomNum(1, 6)}.svg`,
		  message: getRandVal(messages, true),
		  name: getRandVal(names)
		};
	});
};

const getRanIntForPhotos = getRandIntFromInterval(1, 25);
const getRanIntForId = getRandIntFromInterval(1, 25);

const getMoсksData = () => {
	return {
		id: getRanIntForId(),
		url: `photos/${getRanIntForPhotos()}.jpg`,
		description: getRandVal(descriptions),
		likes: getRandomNum(15, 200),
		comments: getRandCountComments(1, 7)
	};
};

export {getMoсksData};