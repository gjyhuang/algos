/* Min Number Of Coins For Change

Given an array of positive integers representing coin denominations and a single
non-negative integer representing a target amount of money, write a function that
returns the smallest number of coins needed to make change for that target amount
using the given denominations. An unlimited number of coins is at your disposal.
If it is impossible to make change given the amount, return -1.

O(nd) time | O(n) space, where n is the target amt and d the number of denominations

7, [1, 5, 10] // 3 (1x5 + 2x1)

idx   0, 1, 2, 3, 4, 5, 6, 7
1:  [ 0, 1, 2, 3, 4, 5, 6, 7  ]
5:  [ 0, 1, 2, 3, 4, 1, 2, 3  ]
                 [amt]        [amt - denom]
            combos[5] = 1 = combos[5-5] + 1
            combos[6] = 2 = combos[6-5] + 1
                                      1 + 1 = 2
            combos[7] = 3 = combos[7-5] + 1
                                      2 + 1 = 3
10: [ 0, 1, 2, 3, 4, 1, 2, 3  ]
*/

function minNumberOfCoinsForChange(n, denoms) {
	// create an array from 0 to n, initialized to infinity
	// [0] is initialized to 0
	// iterate through the denoms
		// at each idx (amt), find the min number of coins needed to make change for that amt for that denom
	// if combos[n] is infinity, return -1; else, return combos[n]

  const combos = new Array(n+1).fill(Infinity);
	combos[0] = 0;
	for (const denom of denoms) {
		for (let amt = 0; amt < combos.length; amt++) {
			if (denom <= amt) {
				combos[amt] = Math.min(combos[amt], combos[amt - denom] + 1);
			}
		}
	}
	return combos[n] !== Infinity ? combos[n] : -1;
}
