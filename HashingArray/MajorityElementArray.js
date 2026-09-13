// ** **
// LeetCode # 169 easy
// ****

// Majority Element : Boyer-Moore Voting one candidate, one countter
// given an array of size n return the majority element that appears more then Ln/2J times.
// You may assume such an element awlays exists in the array.
// Asked Amazon, adobe, google.
// Time complexity: O(N)
// Space complexity: O(1)

let arr = [2, 2, 1, 3, 2, 2, 1, 2, 2];

function majorityElement(arr) {

    // Keeps track of the current candidate's vote count
    let count = 0;

    // Stores the possible majority element
    let candidate = null;

    // Go through every element in the array
    for (let i = 0; i < arr.length; i++) {

        // If count becomes 0,
        // choose the current element as the new candidate
        if (count === 0) {
            candidate = arr[i];
        }

        // If current element matches the candidate,
        // increase the count
        if (arr[i] === candidate) {
            count++;
        }

        // If current element is different,
        // decrease the count
        else {
            count--;
        }
    }

    // The remaining candidate is the majority element
    return candidate;
}

console.log(majorityElement(arr));

// Output: 2
