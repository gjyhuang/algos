/* Number Of Ways To Make Change

Given an array of positive integers representing coin denominations and a single
non-negative integer representing a target amount of money, write a function that
returns the number of ways to make change for that target amount using the given
coin denominations. An unlimited amount of coins is at your disposal.

O(nd) time | O(n) space, where n is the target amount and d the number of denominations

*/

function numberOfWaysToMakeChange(n, denoms) {
  // 10, [1, 2, 5, 10]
  // combos array: [  0   1   2   3   4   5   6   7   8   9   10  ]
  // at denom 1:      1   1   1   1   1   1   1   1   1   1   1
  // at denom 2:      1   1   2   2   2   3   3   4   5   5   6
  /*
                   2 - 2 = 0,       5 - 3 = 2
    new combos[amt] = combos[amt] + combos[amt-denom]
  */

	// make an array that holds number of ways to make change from 0 to n
	// 0 is set to 1 (1 way to make 0 coins)
	// loop through n
		// nested loop through the denoms
		// for each amt, the number of combos is += combos[amt-denom]
  const combos = new Array(n+1).fill(0);
	combos[0] = 1;
	for (let coin of denoms) {
		for (let amt = 0; amt <= n; amt++) {
			if (amt >= coin) {
				// console.log('amt:', amt, ', coin:', coin)
				combos[amt] += combos[amt - coin];
			}
		}
	}
	return combos[n];
}
