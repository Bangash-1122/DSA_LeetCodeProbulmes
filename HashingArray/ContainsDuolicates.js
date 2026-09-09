// ****
// LeetCode problem # 217 'easy'
// ****
//  any value appear twice?
// Given an integer array, return true if any value appears at least twice,
// and false if every element is distinct.
// Asked Amazon Apple Google
// Optimized Set Time O(n) space O(n)

function ContainsDup(arr) {

    // Create an empty Set to store unique values
    let emptySet = new Set();

    // Loop through each element in the array
    for (let element of arr) {

        // Check if the element already exists in the Set
        if (emptySet.has(element)) {

            // Duplicate found, so return true
            return true;
        }

        // Add the current element to the Set
        emptySet.add(element);
    }

    // No duplicate was found
    return false;
}

// Example
console.log(ContainsDup([3, 1, 4, 1, 5]));

// Output:
// true
