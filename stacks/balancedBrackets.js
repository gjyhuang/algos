/* Balanced brackets

Write a function that takes in a string made up of brackets ('(', '[', '{', ')', ']', '}').
The function should return a boolean representing whether or not the string is balanced re:
its brackets. It is balanced if each opening bracket matches with a subsequent closing bracket
and no brackets are unmatched.

Brackets cannot overlap, e.g. '([)]' is not balanced.

Returns true: '([{}])'

*/

function balancedBrackets(string) {
	// create variable to hold all closing brackets
	// make object to hold matching bracket pairs
	// make a stack
	// loop through the string
		// if the current char is in brackets aka is an opening bracket, push to stack
		// else if it's a closing bracket
			// if it doesn't match with the bracket at the top of the stack, return false
	// return true only if the stack is empty

  const closingBrackets = ')]}';
	const brackets = {
		'(': ')',
		'[': ']',
		'{': '}'
	}
	const stack = [];

	for (let i = 0; i < string.length; i++) {
		let curr = string[i];
		if (brackets[curr]) {
			stack.push(curr);
		}
		if (closingBrackets.includes(curr)) {
			if (!stack.length) return false;
			let stackTop = stack.pop();
			if (brackets[stackTop] !== curr) return false;
		}
	}
	return stack.length === 0;
}
