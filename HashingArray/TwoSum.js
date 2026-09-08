// ****
// Leet Code problem # 1 'easy'
// ****
// Unsorted find a pair adding to target
// Given an array of integers and a target, return the indices of the two numbers that add up to target,
// Exactly one solution exists and you may not reuse an element.
// Asked Amazon, Google, apple, Microsoft


function TwoSum(arr, target) {

    // Create an empty hash map to store:
    // number -> its index
    let hashmap = new Map();

    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {

        // Calculate the number needed to reach the target
        let need = target - arr[i];

        // Check if the needed number already exists in the hash map
        if (hashmap.has(need)) {

            // Return the index of the needed number
            // and the current index
            return [hashmap.get(need), i];
        }

        // Store the current number and its index in the hash map
        hashmap.set(arr[i], i);
    }

    // Return an empty array if no pair is found
    return [];
}

// example 
console.log(TwoSum([3, 8, 2, 5], 10));
//OutPut [1, 2]
// Because 8 + 2 = 10
