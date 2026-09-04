// ****
// Leet Code # 11
// ****

// Container with most water :
// Pick two lines that hold the most water given height represented vertical lines,
// pick two lines that together with the x-axis form a container, such that the container holding the most water.
// and return that maximum area.
// Asked AMAZON GOOGLE META
// Optimized two pointer approach, O(n) time complexity and O(1) space complexity.

function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        // Calculate the area with the current pointers
        let width = right - left;
        let currentArea = Math.min(height[left], height[right]);
        let area = width * currentArea;
        // Update the maximum area if the current area is larger
        maxArea = Math.max(maxArea, area);

        // Move the pointer with the smaller height inward
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

// Example usage:
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height)); // Output: 49
