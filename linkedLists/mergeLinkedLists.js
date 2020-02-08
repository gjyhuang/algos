/* Merge Linked Lists

Write a function that takes in the heads of two SLLs that are in sorted order, respectively
(assume that the lists have at least 1 node and the heads will never be null values). It should
merge the lists and return the head of the merged list. The list should be in sorted order.

2 -> 6 -> 7 -> 8
1 -> 3 -> 4 -> 5 -> 9 -> 10 // 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10

n1 (1) < n2 (2), prev1 = null              list 1: 1      -> 3 -> 4 -> 5 -> 9 -> 10
	set prev1 to n1                                 [1]     -> 3 -> 4 -> 5 -> 9 -> 10
	set n1 to n1.next
n1 (3) > n2 (2), prev1 = 1                 list 1:[1]->      3 -> 4 -> 5 -> 9 -> 10
  set prev1.next to n2                            [1]-> 2 (->6 -> 7 -> 8)
	set prev1 to n2                                  1 ->[2](->6 -> 7 -> 8)
	set n2 to n2.next (before next step)
	set prev1.next to n1                             1 ->[2]-> 3 -> 4 -> 5 -> 9 -> 10
n1 (3) < n2 (4), prev1 = 2

	// merge both lists into list one
	// set variables, n1 and n2, to both heads
	// need to assign a variable to the prev of n1 (default is null)
	// while these nodes exist, check which one's value is lower
		// if n1 < n2, set prev1 to n1 and n1 is the .next node
		// if n2 < n1
			// if prev1 is not null, prev1.next is n2
			// set prev1 to n2
			// set prev1.next to n1, to finish connecting the node to the rest of n1
	// if there are more nodes left in list 2 even when list 1 is empty, add them all
	// return whichever of headOne or headTwo has lower value
*/

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function mergeLinkedLists(headOne, headTwo) {
	let n1 = headOne;
	let n2 = headTwo;
	let prev1 = null;
  while (n1 && n2) {
		if (n1.value < n2.value) {
			prev1 = n1;
			n1 = n1.next;
		} else {
			if (prev1) prev1.next = n2;
			prev1 = n2;
			n2 = n2.next;
			prev1.next = n1;
		}
	}
	if (n2) prev1.next = n2;
	return headOne.value < headTwo.value ? headOne : headTwo;
}
