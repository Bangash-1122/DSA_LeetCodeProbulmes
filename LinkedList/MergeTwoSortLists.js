// ****
// Leet Code #21  'easy'
//Merge two sorted list
// Asked at Amazon, Microsoft,Apple, adobe.
//  Time complexity O(n+m) space O(n+m) optimized Two Pointers

// Splice two smaller head dummy node
// Merge two sorted linked lists, into one sorted list by splicing their nodes togher, and return it's head. 


//Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]


function mergeTwoSortedLists(list1, list2) {
    // Create a dummy node to store the merged list
    let dummy = new ListNode(0);
    let tail = dummy;

    // Iterate while both lists have nodes
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }

    // Append remaining nodes from either list
    if (list1 !== null) {
        tail.next = list1;
    } else {
        tail.next = list2;
    }

    // Return the head of the merged list (skip dummy node)
    return dummy.next;
}

// all most output is 1->1->2->3->4->4->
