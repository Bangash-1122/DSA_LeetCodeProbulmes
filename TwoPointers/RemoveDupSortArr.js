/ ****
// LeetCode Problem: 26. Remove Duplicates from Sorted Easy
// ****

// One write index, no extra array.
// Given a sorted integer array remove the duplicates in-place so each value appears, once keeping the,
// relative order return k the number of distinct values the first k sort of the array must
// hold them time 0(n) space 0(1)
// Asked at Amazon, Microsoft, Adobe.
// [1,1,2,2,2,3,4,4]
// Optimized Write index

let arr = [1, 1, 2, 2, 2, 3, 4, 4];

function removeDupSortArray(arr) {

    // Get the number of elements in the array
    let n = arr.length;

    // If the array is empty, there are no unique values
    if (n === 0) {
        return 0;
    }

    // k is the position where the next unique value will be written
    let k = 1;

    // Start from the second element
    for (let i = 1; i < n; i++) {

        // Compare current value with the last unique value
        if (arr[i] !== arr[k - 1]) {

            // Write the new unique value at index k
            arr[k] = arr[i];

            // Move k to the next available position
            k++;
        }
    }

    // k represents the number of unique values
    return k;
}

let k = removeDupSortArray(arr);

console.log(k);             // 4
console.log(arr.slice(0,k)); // [1, 2, 3, 4]
