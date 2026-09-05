// ****
// Leet Code # 283. Move Zeroes
// ****

// In-Place keep non-zeroes in order,
// given an integer array, move all zeroes to the end in Place While keeping the relative order of the non-zero elements.
// Asked in: Amazon, Microsoft, Google, Meta.
// Optimized Two-Pointer Approach Time Complexity: O(n) and Space Complexity: O(1)

// Input array containing integers with zeroes
let arr = [0, 1, 0, 3, 12];

function moveZeroes(arr) {
    let slow = 0; // Pointer to track the position for non-zero elements
    for (let fast = 0; fast < arr.length; fast++) {
        if (arr[fast] !== 0) {
            // Swap the non-zero element with the element at the slow pointer
            [arr[slow], arr[fast]] = [arr[fast], arr[slow]];
            slow++; // Move the slow pointer to the next position
        }
    }
}
// Call the function to move zeroes in the array
moveZeroes(arr);
console.log(arr); // Output: [1, 3, 12, 0, 0]
