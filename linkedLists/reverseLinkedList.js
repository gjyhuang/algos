/* Reverse Linked List

Write a function that takes in the head of a SLL (assume the list has at least one node). It should reverse
the list and return its new head. Every node has a "value" and "next" property.

0 -> 1 -> 2 -> 3 -> 4-> 5 // 5 -> 4 -> 3 -> 2 -> 1

O(n) time | O(1) space


0 -> 1 -> 2 -> 3

current 0  - .val = 0, .next = 1      nextNode = null
reversed 0 - .val = 0, .next = null   nextNode = 0
  save the 1, will be the next node in the while loop

current 3  - .val = 3, .next = null   nextNode = 2
reversed 3 - .val = 3, .next = 2      nextNode = 3


// make a new node that refers to the head
// set a var nextNode set to null - will keep reassigning .next to this
// while node is not null, keep reversing nodes
	// set nowPrevNode to hold node.next
	// set node.next to equal nextNode and nextNode to equal node
  // set node to nowPrevNode
// return nextNode
*/

function reverseLinkedList(head) {
  let nextNode = null;
	let node = head;
	while (node) {
		const nowPrevNode = node.next;
		node.next = nextNode;
		nextNode = node;
		node = nowPrevNode;
	}
	return nextNode;
}
