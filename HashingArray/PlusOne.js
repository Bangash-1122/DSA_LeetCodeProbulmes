// ** **
// LeetCode #66 'easy'
// ****
// PLUS ONE
// The carry that runs off the front
// A non - negative integer is given ar an array of digits, most significent first.
// Add one to it and return the resulting array of digits.
// Asked At Google, Amazon, Meta

// [1, 2, 9, 9]
let arr = [1, 2, 9, 9];

function PlusOne(arr) {

    // Start from the last digit and move backward
    for (let i = arr.length - 1; i >= 0; i--) {

        // If current digit is less than 9,
        // add 1 and return the array
        if (arr[i] < 9) {

            arr[i] = arr[i] + 1;

            return arr;
        }

        // If digit is 9, change it to 0
        // and continue carrying 1 to the left
        arr[i] = 0;
    }

    // If all digits were 9,
    // add 1 at the beginning
    return [1, ...arr];
}

console.log(PlusOne(arr));

// Output:
// [1, 3, 0, 0]
