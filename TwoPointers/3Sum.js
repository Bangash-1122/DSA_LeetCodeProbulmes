// ****
// Leet Code # 15
// ****

// Find all unique triplets sum of Zero gevin an integer array,
// find all unique triplets that sum of zero with no duplicate triplets in the result.
// Asked AMAZON GOOGLE MICROSOFT Meta
// Optimized two pointer approach, O(n3) time complexity and O(1) space complexity.


arr = [-1, 0, 1, 2, -1, -4];

function threeSum(arr) {
    let num = arr.length; // store the total number of elements in the array

    if(num < 3) return [];//we need at least 3 elements to form a triplet, if fewer than 3 elements return empty array

    let result = []; // This Array will store the unique triplets

    let seen = new Set(); // Set is to remember triplets we have already added, This prevents duplicates in the result.

    for (let i = 0; i < num - 2; i++) { // select the first num of the triplet, Stop at num - 2 because we still and j and k to select after i

        for (let j = i + 1; j < num - 1; j++) { //selcet the second num j always start one position after i.

            for (let k = j + 1; k < num; k++) { //select the thrid num k always start one position after j.

                if (arr[i] + arr[j] + arr[k] === 0) { // check whether the three selected numbers add up to zero.

                    //create a triplet containing the  three numbers. sort it so equivalent triplets have the same order.
                    let triplet = [arr[i], arr[j], arr[k]].sort((a, b) => a - b);

                    //convert the triplet into a string , Example [-1, -1, 2] => "-1, -1, 2" to use as a key in the set to check for duplicates.
                    let tripletKey = triplet.join(',');

                    // Check whether this triplet has already been found.
                    if (!seen.has(tripletKey)) {

                        // Remember this triplet to avoid duplicates in the future.
                        seen.add(tripletKey);

                        // Add the unique triplet to the result array.
                        result.push(triplet);
                    }
                }
            }
        }

    }
    // Return of all unique triplets.
    return result;
}

// Example usage:
console.log(threeSum(arr)); // Output: [[-1, -1, 2], [-1, 0, 1]]
