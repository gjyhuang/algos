/* Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

["flower","flow","flight"] // "fl"
["dog","racecar","car"] // ""

*/

const longestCommonPrefix = (strs) => {
  if (!strs[0].length) return "";
  let result = "";
  for (let i = 0; i < strs[0].length; i++) {
      let curr = strs[0][i];
      for (let j = 1; j < strs.length; j++) {
          if (strs[j][i] !== curr) return result;
      }
      result += curr;
  }
  return result;
};
