// ****
// LEET CODE QS_num
// # 167 num
// *******
// Sorted Input find indeces that add up to target:
// given a 1-indexed array of integers nums sorted in non-decreasing order,
//  return the 1 based indices of the two numbers that add up to given target,
// so the first element is index 1, not index 0. Exactly one solution exists, and you may not use the same element twice. You can return the answer in any order.

// 2 5 8 11 15 19

function  twoSum(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === target) {
            return [left + 1, right + 1]; // Convert to 1-indexed
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return null;
}

console.log(twoSum([2, 5, 8, 11, 15, 19], 7)); // Output: [1, 2]

// Time Complexity: O(n)
// Space Complexity: O(1)
