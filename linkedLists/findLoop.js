/* Find Loop

Write a function that takes in the head of a SLL that contains a loop (where the list's tail node points to
a node in the list rather than null). The function should return the node (not just its value) from which
the loop originates.

O(n) time | O(1) space, where n is the number of nodes in the SLL

                     P
        D        > 4 > 5 \       loop starts at 4, tail is 9
 0 > 1 > 2 > 3 /          6
               < 9       /
								  \ 8 < 7
                  R
D - distance to start of loop
P - first pointer's distance
R - needed distance to find loop
T - total
1st =  T =  D +  P
2nd = 2T = 2D + 2P
T = 2D + P
R = T - P - D       -> R = 2D + P - P - D
                    -> R = D

*/

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findLoop(head) {
  // have two pointers - 2 moves at 2x spd as 1
	// when both point to the same pointer
		// distance to the loop is same as unknown distance you're looking for
		// set 1 to head
		// move 1 and 2 forward until 1 and 2 are set to the same node
		// return 1

	let first = head.next;
	let second = head.next.next;
	while (first !== second) {
		first = first.next;
		second = second.next.next;
	}
	first = head;
	while (first !== second) {
		first = first.next;
		second = second.next;
	}
	return first;
}
