/* String Compression

Given an array of characters, compress it in place. The length after compression must always be
smaller than or equal to the original array.

Every element of the array should be a string character (not integer) of length 1.

After the in-place compression, the function should return the new length of the array.

Input:
["a","a","b","b","c","c","c"]

Output:
Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

Explanation:
"aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".

O(n^2) time | O(1) space

*/


var compress = function(chars) {
  let i = 0, j = 0;
  let total = 1;
  let totalStr = '';
  while (j < chars.length + 1) {
      if (chars[i] === chars[j+1]) {
          j++;
          total++;
      } else {
          totalStr = String(total);
          if (totalStr.length > 1) {
              const totalStrArr = totalStr.split('');
              chars.splice(i+1, 0, ...totalStrArr);
          } else if (total > 1) {
              chars.splice(i+1, 0, totalStr);
          }
          if (total > 1) {
              chars.splice(i + totalStr.length + 1, total - 1)
          } else {
              totalStr = '';
          }
          i = i + totalStr.length + 1;
          j = i;
          total = 1;
      }
  }
  return chars.length;
};
