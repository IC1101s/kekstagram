// Рандомное число
const getRandomNum = (min, max) => {
	if (min < 0 || max < 0) {
		return false;
	}

	if (max < min) {
		[min, max] = [max, min];
	}

	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Результат: true, если строка проходит по длине, и false — если не проходит
const getMaxLenStr = (str, maxLen) => {
	if (str.length < maxLen) {
		return false;
	}

	return true;
}; 

const getRandVal = (value, comment) => {
	const getRandValFromArr = () => {
		return value[getRandomNum(0, value.length - 1)];
	};

	if (comment === true) {
		return `${getRandValFromArr()} ${getRandValFromArr()}`;
	}

	return getRandValFromArr();
};

export {getRandomNum, getRandVal, getMaxLenStr};