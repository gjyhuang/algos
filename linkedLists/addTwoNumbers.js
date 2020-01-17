/* Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

O(n*m) time | O(n) space

2->4->3 + 5->6->4 // 7->0->8
(342 + 465 = 807)

1 + 9->9 // 0->0->1

*/

var addTwoNumbers = function(l1, l2) {
  let currOne = l1;
  let currTwo = l2;
  let list = null;
  let lastNode;
  let carry = 0;
  while (currOne !== null || currTwo !== null) {
      let valOne = currOne ? currOne.val : 0;
      let valTwo = currTwo ? currTwo.val : 0;
      const currSum = valOne + valTwo + carry;
      carry = currSum >= 10 ? 1 : 0;
      const node = new ListNode(currSum % 10);
      if (!list) {
          list = node;
          lastNode = node;
      } else {
          lastNode.next = node;
          lastNode = node;
      }
      if (currOne) currOne = currOne.next;
      if (currTwo) currTwo = currTwo.next;
  }
  if (carry) lastNode.next = new ListNode(carry);
  return list;
};
