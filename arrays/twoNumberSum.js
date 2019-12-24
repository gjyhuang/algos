function twoNumberSum(array, targetSum) {
  const nums = {};
	for (let i = 0; i < array.length; i++) {
		let curr = array[i];
		if (nums[curr]) {
			return [nums[curr], curr]
		}
		else {
			nums[targetSum-curr] = curr;
		}
	}
	return [];
}
