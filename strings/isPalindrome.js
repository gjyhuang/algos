/* Palindrome Check

Write a function that takes in a non-empty string which returns a boolean
re: is the string a palindrome.

O(n) time | O(1) space (where n is the length of the input string)

*/

function isPalindrome(string) {
  let start = 0;
	let end = string.length-1;
	while (start < end) {
		if(string[start] !== string[end]) return false;
		start++;
		end--;
	}
	return true;
}
