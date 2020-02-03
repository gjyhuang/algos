/* Kth Smallest Element in a BST

Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note:
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3

Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

*/

// recursive, O(n) time & space
var kthSmallest = function(root, k) {
  const vals = [];
  depthFirst(vals, root, k);
  console.log(vals)
  return vals[k-1];
};

function depthFirst(vals, tree, k) {
  if (tree) {
      depthFirst(vals, tree.left, k)
      if (vals.length >= k) return;
      vals.push(tree.val);
      depthFirst(vals, tree.right, k)
  }
}

// // iterative, O(N+k) time (O(logN+k) best case), O(n+k) space
// var kthSmallest = function(root, k) {
//     const stack = [];
//     while(true) {
//         while (root) {
//             stack.push(root);
//             root = root.left;
//         }
//         root = stack.pop();
//         k--;
//         // console.log(k, root.val)
//         if (k === 0) return root.val;
//         root = root.right;
//     }
// }
