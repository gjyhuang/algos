/* Longest Palindromic Substring

Write a function that returns a string's longest palindromic substring. Assume that there
will only be one.

"abaxyzzyxf" // "xyzzyx"

	// initialize array, longest, with placeholders for left and right indices (to 0 and 1)
	// at each letter:
		// it can be the center of a palindrome
		// or it can be one of two letters at the center of a palindrome
		// check for both at each letter
	// compare longest to the left and right indices for any palindrome you've found
		// if the new one has a longer length, update it
	// return string slice via those indices
*/

function longestPalindromicSubstring(string) {
	let longest = [0, 1];
	for (let i = 1; i < string.length; i++) {
		const odd = getPalindrome(string, i - 1, i + 1);
		const even = getPalindrome(string, i - 1, i);
		const currLongest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
		longest = longest[1] - longest[0] > currLongest[1] - currLongest[0] ? longest : currLongest;
	}
	return string.slice(longest[0], longest[1]);
}

function getPalindrome(string, leftIdx, rightIdx) {
	while (leftIdx >= 0 && rightIdx < string.length) {
		if (string[leftIdx] !== string[rightIdx]) break;
		leftIdx--;
		rightIdx++;
	}
	return [leftIdx + 1, rightIdx];
}

// // O(n^3) time solution:
// function longestPalindromicSubstring(string) {
// 	// start with variable to hold longest substring
// 	// generate all substrings via nested loops
// 		// check if substring is palindrome or not
// 		// if it is and its length is longer than 'longest', reassign
// 	// when resetting, set start pointer to current end pointer

//   let longest = '';
// 	for (let i = 0; i < string.length; i++) {
// 		for (let j = i; j < string.length; j++) {
// 			const substring = string.slice(i, j+1);
// 			if (substring.length > longest.length && isPalindrome(substring)) {
// 				longest = substring;
// 			}
// 		}
// 	}
// 	return longest;
// }

// function isPalindrome(str) {
// 	let left = 0;
// 	let right = str.length-1;
// 	while (left < right) {
// 		if (str[left] !== str[right]) return false;
// 		left++;
// 		right--;
// 	}
// 	return true;
// }
