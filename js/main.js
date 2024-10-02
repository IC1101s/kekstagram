const getRandomNum = (min, max) => {
	if (min < 0 || max < 0) {
		return false;
	}

	if (max < min) {
		[min, max] = [max, min];
	}

	return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(getRandomNum(3, 1));


const getMaxLenStr = (str, maxLen) => {
	if (str.length < maxLen) {
		return false;
	}

	return true;
}; // Результат: true, если строка проходит по длине, и false — если не проходит


console.log(getMaxLenStr('Привет', 20));