/* Knapsack Problem

You are given an array of arrays. Each subarray holds two integer values representing
an item - the first is the item's value, and the second is the item's weight. You are also
given an integer representing the max capacity of a knapsack. Fit items into the knapsack
while maximizing their combined value. The sum of the item weights cannot exceed the
capacity. Return an array with the max combined value and an array of each item's index.

[[1,2],[4,3],[5,6],[6,7]],10 // [10, [1,3]]

 v,w    capacities                  (values are stored below)
items   0   1   2   3   4   5   6   7   8   9  10
[1,2]   0   0   1   1   1   1   1   1   1   1   1
[4,3]   0   0   1   4   4   5   5   5   5   5   5
[5,6]   0   0   1   4   4   5   5   5   6   9   9
[6.7]   0   0   1   4   4   5   5   6   6   9  10

// build a 2D array, values, where the columns are capacities and the rows are items
// loop through each item at i (items)
// loop through capacity at j (capacity)
	// if currWeight <= j:
		// the val at [i][j] is max of val[i-1][j] (the val for the previous capacity)
		// or val at [i-1][j-currWeight] (aka prev max val for capacity without this new weight) + currVal
// return values[items.length][capacity] + indices
*/

function knapsackProblem(items, capacity) {
  const values = [];
	for (let i = 0; i < items.length + 1; i++) {
		const row = new Array(capacity+1).fill(0);
		values.push(row);
	}
	for (let i = 1; i < items.length + 1; i++) {
		const currWeight = items[i-1][1];
		const currVal = items[i-1][0];
		for (let j = 0; j < capacity + 1; j++) {
			if (currWeight > j) {
				values[i][j] = values[i-1][j];
			} else {
				values[i][j] = Math.max(values[i-1][j], values[i-1][j-currWeight] + currVal);
			}
		}
	}
	return [values[items.length][capacity], getItems(values, items)]

	function getItems(values, items) {
		// create array to hold indices
		// if val[i][j] === val[i-1][j] (the previous capacity), then decrement i
		// otherwise, add i-1 to the indices array, and subtract this item's capacity from j

		const indices = [];
		let i = values.length - 1;
		let j = values[0].length - 1;
		while (i > 0) {
			if (values[i][j] === values[i-1][j]) {
				i--;
			} else {
				indices.unshift(i-1);
				j -= items[i-1][1];
				i--;
			}
		}
		return indices;
	}
}

// // recursive solution
// // base case: 0 val/items at max weight of 0
// // memoize the max value and the array of indices

// function knapsackProblem(items, capacity) {
// 	const maxVal = helper(items, capacity, 0, [], []);
// 	console.log([maxVal[0], maxVal[1]])
// 	return [maxVal[0], maxVal[1]];

// 	function helper(items, capacity, i, cache, storedItems) {
// 		let valueIfAdded = [0, []], valueNotAdded = [0, []];
// 		if (capacity === 0 || i > items.length-1) return [0, storedItems];
// 		if (capacity >= items[i][1]) {
// 			valueIfAdded = helper(items, capacity - items[i][1], i + 1, cache, [...storedItems, i]);
// 			if (valueIfAdded) valueIfAdded[0] = valueIfAdded[0] + items[i][0];
// 		}
// 		valueNotAdded = helper(items, capacity, i+1, cache, [...storedItems]);
// 		return valueNotAdded[0] < valueIfAdded[0] ? [valueIfAdded[0], valueIfAdded[1]] : [valueNotAdded[0], valueNotAdded[1]];
// 	}
// }
