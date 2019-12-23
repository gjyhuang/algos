function bubbleSort(array) {
	for (let i = array.length; i > 0; i--) {
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j+1]) {
				[array[j], array[j+1]] = [array[j+1], array[j]];
			}
		}
	}
	return array;
}
