// ** ** *
// LeetCode # 643 'easy'
// *****
// Sliding Window time O(n) space O(1)
// MAX SUM of a subArray of size K
// Find the k-length contiguous subArray with the largest sum
// Given an integer array a window size k,file find the maximum su among all contiguous subarrays of length k:
// Optimized sliding window // Asked at Amazon, Bloomberg.
let arr = [1, 12, -5, -6, 50, 3];
let k = 4;

function findMaxSum(arr, k) {
    let maxSum = -Infinity;
    let windowSum = 0;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {

        // Add the next element to the current window
        windowSum += arr[windowEnd];

        // Process the window once it reaches size k
        if (windowEnd >= k - 1) {

            // Update the maximum sum
            maxSum = Math.max(maxSum, windowSum);

            // Remove the leftmost element
            windowSum -= arr[windowStart];

            // Move the window forward
            windowStart++;
        }
    }

    return maxSum;
}

console.log(findMaxSum(arr, k)); // 51