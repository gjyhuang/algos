/* Longest Substring Without Duplication

Write a function that takes in a string and returns its longest substring without duplicate characters.
Assume that there will only be one longest substring without duplicates.

"clementisacap" // "mentisac"

 [0, 3] = "clem"    // keep updating longest every time
 { c:0, l:1, e:2, m:3 }
          i
 c  l  e  m  e  n  t  i  s  a  c  a  p

 [0, 3] = "clem" // curr is [3,4] "me"
 { c:0, l:1, e:2->4, m:3 }
             i
 c  l  e  m  e  n  t  i  s  a  c  a  p

 [3, 10] = "mentisac" // curr is the same
 { c:0->10, l:1, e:4, m:3, t:6, i:7, s:8, a:9 }
                               i
 c  l  e  m  e  n  t  i  s  a  c  a  p

 [3, 10] = "mentisac" // curr becomes [10, 12] "ca"
 { c:10, l:1, e:4, m:3, t:6, i:7, s:8, a:9->11, p:12 }
                                  i
 c  l  e  m  e  n  t  i  s  a  c  a  p
 			// old "a" idx: 9, which is within 3-10
			// if an existing letter's idx updates (< longest[1] && > longest[0]), curr needs to be updated
				// track curr only via its starting idx - end will be i


	// use a hash table storing the last seen idx for the letter
	// initialize array storing the idxs of the longest substring at [0,1], and the idx of the current string
	// loop through the string, storing the current letter in the hash table
		// if the letter already is in the table
			// startIdx is either the existing one or value+1 (last time this letter was seen)
				// if the letter is a duplicate, the latter will be greater = Math.max
			// check whether i-startIdx+1 > longest[1]-longest[0] - if so, update longest
			// change startIdx
			// update hash table value for letter
		// set letter in hash table to equal i
	// return slice via longest
*/

function longestSubstringWithoutDuplication(string) {
  const lastSeen = {};
	let longest = [0, 1]
	let startIdx = 0;
	for (let i = 0; i < string.length; i++) {
		let char = string[i];
		if (lastSeen[char] >= 0) {
			startIdx = Math.max(startIdx, lastSeen[char] + 1);
		}
		if (i - startIdx + 1 > longest[1] - longest[0]) {
			longest = [startIdx, i + 1];
		}
		lastSeen[char] = i;
	}
	return string.slice(longest[0], longest[1]);
}
