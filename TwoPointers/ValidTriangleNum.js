// ****
// LeetCode Problem: 611. Valid Triangle Number
// ****
// Valid Triangle Number
// Given an array of non-negative integers,
// representing side length,count how many tripletes can form a valid triangle.
// Askend at AMAZON GOOGLE MICROSOFT Meta
// Optimized two pointer approach, O(n2) time complexity and O(1) space complexity.


                      // Input array containing possible triangle side lengths
let arr = [2, 3, 4, 4, 5];

                      // Function to count the number of valid triangles
function validTriangleNumber(arr) {

                      // Sort the array in ascending order, Result: [2, 3, 4, 4, 5]
    arr.sort((a, b) => a - b);

                     // Store the total number of valid triangles
    let count = 0;

                     // Store the length of the array
    let n = arr.length;

                    // Start from the last element and treat arr[k],as the largest side of the triangle
    for (let k = n - 1; k >= 2; k--) {

                    // Left pointer starts from the beginning of the array
        let left = 0;
                    // Right pointer starts one position before k
        let right = k - 1;
                    // Continue until the two pointers meet
        while (left < right) {

                    // Check the triangle condition:smallest side + middle side > largest side
            if (arr[left] + arr[right] > arr[k]) {

                    // If this condition is true, then all elements, from left to right - 1 can pair with arr[right] and arr[k] to form valid triangles
                count += right - left;

                     // Move right pointer to the left, to check the next possible combination
                right--;

            } else {
                    // If the sum is too small to form a triangle, move left pointer right to get a larger value
                left++;
            }
        }
    }

    // Return the total number of valid triangles
    return count;
}

// Call the function and display the result
console.log(validTriangleNumber(arr));

// Expected Output: 9
