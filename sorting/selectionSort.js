function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let minIdx = i;
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[minIdx]) minIdx = j;
		}
		if (i !== minIdx) {
			[array[i], array[minIdx]] = [array[minIdx], array[i]];
		}
	}
	return array;
}
