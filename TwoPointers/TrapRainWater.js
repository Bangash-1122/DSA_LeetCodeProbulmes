// ****
// LeetCode # 42. Trapping Rain Water
// ****

// water held between bars of verying heights.
// given an elevation map of bar heights, compute how much units of water can be trapped between the bars after rain.
// Asked in: Amazon, Microsoft, Google, Goldman Sachs.
// optimized two pointer approach, O(n) time complexity and O(1) space complexity.

let arr = [2,0,4,1,0,3,1]

function trapRainWater(arr) {
    let left = 0;
    let right = arr.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let totalWater = 0;

    while (left < right) { // Continue until the left and right pointers meet

        if (arr[left] < arr[right]) { //process the left side if the height at the left pointer is less than the height at the right pointer

            if (arr[left] >= leftMax) { // If the current height is greater than or equal to the leftMax, update leftMax
                leftMax = arr[left];
            } else {
                //otherwise, calculate the water trapped at the current position and add it to totalWater
                totalWater += leftMax - arr[left];
            }
            left++;
        } else {
            //if current right height is less than or equal to the left height, process the right side
            if (arr[right] >= rightMax) {
                rightMax = arr[right];
            } else {
                totalWater += rightMax - arr[right];
            }
            // Move the right pointer to the left to check the next position
            right--;
        }
    }
     // Return the total amount of trapped water
    return totalWater;
}
// Call the function to calculate trapped rain water
console.log(trapRainWater(arr)); // Output: 9
