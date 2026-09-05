// ****
// Leet Code # 75. Sort Colors 'md'
// ****

//  Dutch National Flag in place three pointers given an array of objects colored 0, 1, and 2 sort them in place 
// so equal colors are grouped in that order ideally in an single pass.
// Asked in: Amazon, Microsoft, Meta.
// Optimized dutch national flag(in place, one pass) approach Time Complexity: O(n) and Space Complexity: O(1)

// Input array containing integers with colors 0, 1, and 2
let arr = [2, 0, 2, 1, 1, 0];

function sortColors(arr) {
    let low = 0; // Pointer for the next position of 0
    let mid = 0; // Pointer for the current element
    let high = arr.length - 1; // Pointer for the next position of 2

    while (mid <= high) {
        if (arr[mid] === 0) {
            // Swap the current element with the element at the low pointer
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 2) {
            // Swap the current element with the element at the high pointer
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        } else {
            mid++;
        }
    }
    return arr; // Return the sorted array
}

// Call the function to sort colors in the array
sortColors(arr);
console.log(arr); // Output: [0, 0, 1, 1, 2, 2]
