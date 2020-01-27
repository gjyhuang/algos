/* Knuth-Morris-Pratt Algorithm (substring matching in linear time)

"aefaefaefaedaefaedaefaefa", "aefaedaefaefa" // true

   j     i       // s[i] === s[j], so the pattern for a (s[4]) is 0 (since s occurred at idx 0)
   a  e  f  a  e  d  a  e  f  a  e  f  a
 [-1,-1,-1, 0]
         j=2      i    // s[j] !== s[i], so j goes back to 0
   a  e  f  a  e  d  a  e  f  a  e  f  a
 [-1,-1,-1, 0, 1]
   j              i    // s[j] !== s[i], so no pattern and pattern[i] should be -1, i++
   a  e  f  a  e  d  a  e  f  a  e  f  a     // but don't increment j
 [-1,-1,-1, 0, 1,-1]
         *        j=4               i        // s[j] !== s[i], j back to 2 --> pattern[j-1] + 1
   a  e  f  a  e  d  a  e  f  a  e  f  a     // don't need to increment i
 [-1,-1,-1, 0, 1,-1, 0, 1, 2, 3, 4]

   a  e  f  a  e  d  a  e  f  a  e  f  a
 [-1,-1,-1, 0, 1,-1, 0, 1, 2, 3, 4, 2, 3]

to build the array tracking the patterns in the substring:
// initialize i and j to (idx) 0 (of s, the substring)
	// if s[j] and s[i] are the same, pattern[i] = j, increment j and i
	// if they're not and j > 0 aka a pattern was underway, j = pattern[j-1] + 1
	// else j = 0 and only increment i

                  i
   a  e  f  a  e  f  a  e  f  a  e  d  a  e  f  a  e  d  a  e  f  a  e  f  a
                  j=5
   a  e  f  a  e  d  a  e  f  a  e  f  a
 [-1,-1,-1, 0, 1,-1, 0, 1, 2, 3, 4, 2, 3]
  // i stays still, j goes to 2 --> pattern[j-1] + 1
                  i
   a  e  f  a  e  f  a  e  f  a  e  d  a  e  f  a  e  d  a  e  f  a  e  f  a
         j=2
   a  e  f  a  e  d  a  e  f  a  e  f  a
 [-1,-1,-1, 0, 1,-1, 0, 1, 2, 3, 4, 2, 3]

checking if the string contains the substring:
	// initialize i and j to 0, have i traverse the string and j the substring
	// loop through both
		// if str[i] === substring[j], keep incrementing
			// if this is the last character of substring, return true
		// if they're not equal and j > 0, j = pattern[j-1] + 1
		// else j = 0 and only increment i
*/

function knuthMorrisPrattAlgorithm(string, substring) {
  const pattern = buildPattern(substring);
	return isMatch(string, substring, pattern);
}

function buildPattern(substring) {
	const pattern = new Array(substring.length).fill(-1);
	let i = 1;
	let j = 0;
	while (i < substring.length) {
		if (substring[i] === substring[j]) {
			pattern[i] = j;
			i++;
			j++;
		} else if (j > 0) {
			j = pattern[j-1] + 1;
		} else {
			i++;
		}
	}
	return pattern;
}

function isMatch(string, substring, pattern) {
	let i = 0;
	let j = 0;
	while (i < string.length) {
		if (string[i] === substring[j]) {
			if (j === substring.length - 1) return true;
			i++;
			j++;
		} else if (j > 0) {
			j = pattern[j-1] + 1;
		} else {
			i++;
		}
	}
	return false;
}

// Do not edit the line below.
exports.knuthMorrisPrattAlgorithm = knuthMorrisPrattAlgorithm;
