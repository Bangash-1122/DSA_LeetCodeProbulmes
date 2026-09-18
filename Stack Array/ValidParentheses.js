//  *****
//  LeetCode # 20 'easy' 
//  *****
// Valid Parentheses

// The top is the bracket that must close next
// Given a string of brackets containing the characters (),[],and {},
// determine whether it is valid; every opening bracked must be closed by 
// a matching bracket of the same type, and brackets must close in the correct order.
// ASKED AT Amazon, Meta, Google, Microsoft.
// Optimized STACK of open brackets time O(n) space O(n)

let str = '([{}])';

function ValidParentheses(str) {

    // Create a stack to store open brackets
    let stack = [];

    // Create a map of open to close brackets
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    // Go through every character in the string
    for (let char of str) {

        // If char is an open bracket, push it to the stack
        if (map[char]) {

            stack.push(char);

        } else {

            // If char is a close bracket

            // If the stack is empty, return false
            if (stack.length === 0) {
                return false;
            }

            // Pop the last open bracket from the stack
            let lastOpen = stack.pop();

            // If the closing bracket does not match the open bracket, return false
            if (map[lastOpen] !== char) {
                return false;
            }
        }
    }

    // If the stack is empty, all brackets were matched
    return stack.length === 0;
}

console.log(ValidParentheses(str)); // Output: true