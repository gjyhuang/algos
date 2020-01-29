/* Group Anagrams

Write a function that takes in an array of strings and returns a list of groups of anagrams - strings
made up of exactly the same letters.

["yo", "act", "flop", "tac", "cat", "oy", "olfp"] // [["yo", "oy"],["flop", "olfp"],["act", "tac", "cat"]]

// use a hash table
// sort each word in the array, make it a value in the table
// each value is an array that you push each word into
// return Object.values
*/

function groupAnagrams(words) {
  const anagrams = {};
	for (const word of words) {
		const sortedWord = word
			.split('')
			.sort()
			.join('');
		if (sortedWord in anagrams) {
			anagrams[sortedWord].push(word);
		} else {
			anagrams[sortedWord] = [word];
		}
	}
	return Object.values(anagrams);
}

// Do not edit the line below.
exports.groupAnagrams = groupAnagrams;
