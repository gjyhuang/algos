/* Four Number Sum

Write a function that takes in a non-empty array of distinct integers and an integer
representing a target sum. The function should find all quadruplets

[7,6,4,-1,1,2], 16 // [[7,6,4,-1], [7,6,1,2]]

   0, 1, 2,  3, 4, 5,
  [7, 6, 4, -1, 1, 2], 16
populating the hash table:
  i = 1
  j = i + 1
  k = 0
  when i = 1 and arr[i] = 6
    currSum = 6 + 4 = 10
    10 not in hash table, move on
    k = 0, arr[k] = 7
      currSum = 7 + 6 = 13
      if 13 not in hash table, add [[array[k], array[i]]]
      else add 13 to it + [[array[k], array[i]]]
*/

function fourNumberSum(array, targetSum) {
	// create results array, and hash table to hold all possible pairs
	// iterate through the array (i)
    // double for loop through (j, starts at i+1)
      // check if the targetSum - arr[i] + arr[j] is in the hash table
      // if not, move on
    // double for loop through (k, starts at 0)
      // this time iterate through the #s before that iteration, sum to curr, and add to hash table
      // we do this to avoid a duplicate push of that pair

	const pairSums = {};
	const results = [];
	for (let i = 1; i < array.length-1; i++) {
    // check if the difference of the curr sum is in the hash table
		for (let j = i + 1; j < array.length; j++) {
			const currSum = array[i] + array[j];
			const difference = targetSum - currSum;
			if (pairSums[difference]) {
				for (const pair of pairSums[difference]) {
					results.push(pair.concat([array[i], array[j]]));
				}
			}
    }
    // push the combo of num behind curr num + curr num to hash table
		for (let k = 0; k < i; k++) {
			const currSum = array[i] + array[k];
			if (!(pairSums[currSum])) {
				pairSums[currSum] = [[array[k], array[i]]];
			} else {
				pairSums[currSum].push([array[k], array[i]]);
			}
		}
	}
	return results;
}
