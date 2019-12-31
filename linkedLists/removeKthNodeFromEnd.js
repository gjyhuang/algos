/* Remove Kth Node From End

Write a function that takes in the head of a SLL and an integer k (assume the list
has at least k nodes). It should remove the kth node from the list.

Sample input: 0 -> 1 -> 2  -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9, 4
Sample output: 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 8 -> 9

*/

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {  // use two pointers, current and beforeRemove, and point them at the head
	// make current move k nodes forward (so that beforeRemove is at the k-1th node)
	// keep moving both forward until current hits the last node in the SLL
	// edge case - if the kth node is the last node, at the end of the loop current will be undefined
		// aka the head node is the one to remove
		// return to avoid the final reassignment

  let current = head;
	let beforeRemove = head;
	for (let i = 1; i <= k; i++) {
		current = current.next;
	}
	if (!current) {
		// this means first pointer is already pointing at the node to remove, aka the head node
		head.value = head.next.value;
		head.next = head.next.next;
		return;
	}
	while (current.next) {
		current = current.next;
		beforeRemove = beforeRemove.next;
	}
	beforeRemove.next = beforeRemove.next.next;
}

