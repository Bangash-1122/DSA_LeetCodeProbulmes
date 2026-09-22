// ****
// LeetCode #206 'easy'
// Reverse Linked listeners
// ****
// Flip every arrow Prev/Curr/next
// Given the head of a singly list, reverse the list and return the new head.
//  Asked at Amazon, Microsoft, Apple, Google
//Recursive approch

function reverseLinkedList(head) {

    // Base case
    if (head == null || head.next == null) {
        return head;
    }

    // Reverse remaining list
    let newHead = reverseLinkedList(head.next);

    // Reverse the link
    head.next.next = head;

    // Remove old link
    head.next = null;

    // Return new head
    return newHead;
}

/*
Input:
1 -> 2 -> 3 -> 4 -> 5 -> null

Output:
5 -> 4 -> 3 -> 2 -> 1 -> null
*/
