/* Reverse Linked List

Write a function that takes in the head of a SLL (assume the list has at least one node). It should reverse
the list and return its new head. Every node has a "value" and "next" property.

0 -> 1 -> 2 -> 3 -> 4-> 5 // 5 -> 4 -> 3 -> 2 -> 1

O(n) time | O(1) space

// make a new node that refers to the head, and a var reversed set to null
// while node is not null, keep setting nodes onto the new chain
	// set var curr to hold node.next
	// set node.next to equal reversed
	//

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
