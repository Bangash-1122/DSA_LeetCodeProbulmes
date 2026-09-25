// ****
//  LeetCode # 2 'Medium'
// Add Two Numbers  // optimized appraoch //
// Elementry addition.carry // Time O(max(n, m)). Space O(1)
//****
// Two non-negative numbers are stored as linked lists of didits in reverse order,
// Add them and return the sim as a linked list, also in reverse order.

// for e.g., 342 -> 2 -> 4 -> 3, and 465 -> 5 -> 6 -> 4
// then 342 + 465 = 807 -> 7 -> 0 -> 8


class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    const dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    // Iterate while either list has nodes or there is a carry
    while (l1 !== null || l2 !== null || carry !== 0) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;

        // Perform addition with carry
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10); // Calculate new carry
        const digit = sum % 10; // Calculate digit for the new node

        // Create new node with the digit
        current.next = new ListNode(digit);
        current = current.next;

        // Move to the next nodes in the input lists if they exist
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummyHead.next; // Return the head of the result list
}

// Example Usage:
// Helper function to create a linked list from an array
function createLinkedList(arr) {
    const dummy = new ListNode(0);
    let current = dummy;
    for (const val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert a linked list to an array
function linkedListToArray(head) {
    const arr = [];
    let current = head;
    while (current !== null) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

// Example 1: (2 -> 4 -> 3) + (5 -> 6 -> 4) = (7 -> 0 -> 8)
l1 = createLinkedList([2, 4, 3]);
l2 = createLinkedList([5, 6, 4]);
result = addTwoNumbers(l1, l2);
console.log(linkedListToArray(result)); // Output: [7, 0, 8]

// Example 2: (0) + (0) = (0)
l1 = createLinkedList([0]);
l2 = createLinkedList([0]);
result = addTwoNumbers(l1, l2);
console.log(linkedListToArray(result)); // Output: [0]

// Example 3: (9 -> 9 -> 9 -> 9 -> 9 -> 9 -> 9) + (9 -> 9 -> 9 -> 9) = (8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1)
l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
l2 = createLinkedList([9, 9, 9, 9]);
result = addTwoNumbers(l1, l2);
console.log(linkedListToArray(result)); // Output: [8, 9, 9, 9, 0, 0, 0, 1]
