// ****
// Leet Code # 15
// ****

// Find all unique triplets sum of Zero gevin an integer array,
// find all unique triplets that sum of zero with no duplicate triplets in the result.
// Asked AMAZON GOOGLE MICROSOFT Meta
// Optimized two pointer approach, O(n3) time complexity and O(1) space complexity.


arr = [-1, 0, 1, 2, -1, -4];

function threeSum(arr) {
    let num = arr.length;
    if(num < 3) return [];

    let result = [];
    let seen = new Set(); // To track unique triplets
    // Sort the array to handle duplicates and use two pointers
    for (let i = 0; i < num - 2; i++) {
        for (let j = i + 1; j < num - 1; j++) {
            for (let k = j + 1; k < num; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    let triplet = [arr[i], arr[j], arr[k]].sort((a, b) => a - b); // Sort the triplet to handle duplicates
                    let tripletKey = triplet.join(',');
                    if (!seen.has(tripletKey)) {
                        seen.add(tripletKey);
                        result.push(triplet);
                    }
                }
            }
        }

    }
    return result;
}

// Example usage:
console.log(threeSum(arr)); // Output: [[-1, -1, 2], [-1, 0, 1]]
