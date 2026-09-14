// ** **
// LeetCode # 349 'easy' 
// ****
// Time O(n + m) Space O(n)
// Intersection of Two Array
// The set is the shape of the answerwer
// Given two integer arrays, return an array of their intersection, Each value in the result must,
// Appear only once and the order does not matter:
// Asked at Amazon, Meta /// Optimized .hash set


let arr1 = [4, 9, 5, 9, 4];
let arr2 = [9, 4, 9, 8, 4];

function IntersectionArray(arr1, arr2) {

    // Create a set from arr1
    // Duplicates are automatically removed
    let set = new Set(arr1);

    // This set will store common values
    let resultSet = new Set();

    // Check every value in arr2
    for (const num of arr2) {

        // If the number exists in arr1's set,
        // add it to the result set
        if (set.has(num)) {
            resultSet.add(num);
        }
    }

    // Convert the result set back into an array
    return Array.from(resultSet);
}

console.log(IntersectionArray(arr1, arr2));

// Output:
// [9, 4]
