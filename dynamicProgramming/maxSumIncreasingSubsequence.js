/* Max Sum Increasing Subsequence

Given a non-empty array of integers, write a function that returns an array of length 2. The first
element in the array should be an integer representing the greatest sum that can be made from an
increasing subsequence in the array. (The numbers do not have to be adjacent.) The second should be
an array of the numbers in said subsequence. Assume that there will only be one increasing subsequence
with the greatest sum.

          [10, 70, 20, 30, 50, 11, 30] // [110, [10,20,30,50]]
sum[i]    [10  80  30  60 110  21  60]
sequence    0   0   0   0   0   0   0
                1   2   2   2   5   2
								        3   3       6
												    4

														    j   i
			    [10, 70, 20, 30, 50, 11, 30]

		num j   num i  sums j  sums i   included?
		   10      30      10      30      y
			 70                              n (num j is greater than num i)
			 20      30      30      40      y                          sums i < num 1 + sums j
			 30                              n (greater than)
			 50                              n (greater than)
			 11      30      21      60      n (11 breaks subsequence - sums i > num i + sums j)


// create two arrays to track the sum and the sequence to make up each sum
// create a var to track the current max sum's idx
// loop through the input array (i)
	// set var to store num i
	// double loop (j)
		// find the max sum where this number is the last in the subsequence
		// only add num j if 1) it's less than num i and 2 sums[i] < num 1 + sums[j]
		// store its sum in sum array
		// if sum is higher than sum at max sum idx, reassign idx
// find the sequence (while loop through previous idxs)
// return the sum and sequence at max sum idx

*/

function maxSumIncreasingSubsequence(array) {
  const sequences = new Array(array.length);
	const sums = array.map(num => num);
	let maxSumIdx = 0;
	for (let i = 0; i < array.length; i++) {
		const currNum = array[i];
		for (let j = 0; j < i; j++) {
			const numToAdd = array[j];
			// add number to sum if it's less than currNum && sums[i] < num i + sums[j]
			if (numToAdd < currNum && sums[i] < currNum + sums[j]) {
				sums[i] = sums[j] + currNum;
				sequences[i] = j;
			}
		}
		if (sums[i] >= sums[maxSumIdx]) maxSumIdx = i;
	}
	console.log(sequences)
	return [sums[maxSumIdx], findSequence(maxSumIdx)];

	function findSequence(idx) {
		const sequence = [];
		while (idx !== undefined) {
			sequence.unshift(array[idx]);
			idx = sequences[idx];
		}
		return sequence;
	}
}
