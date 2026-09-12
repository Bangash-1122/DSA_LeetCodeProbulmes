// ****
// LeetCode # 347 'medium'
// ****

// TOP K Frequent Elements:
// frequency map return the k most common values
// Given an integer array and a number k, return the k most frequent elements.
// The answers is guaranteed to be unique; it may be returned in my order.
//  ASKED at Amazon, Facebook, Yelp.

function TopKFrequent(arr, k) {

    // Step 1: Create a frequency map
    // Key = number, Value = how many times it appears
    let frequentMap = new Map();

    // Count frequency of every number
    for (const num of arr) {

        frequentMap.set(
            num,
            (frequentMap.get(num) || 0) + 1
        );
    }


    // Step 2: Create buckets
    // Index represents frequency
    // Example: buckets[3] contains numbers appearing 3 times
    const buckets = Array.from(
        { length: arr.length + 1 },
        () => []
    );


    // Step 3: Put each number inside its frequency bucket
    for (const [num, frequency] of frequentMap) {

        buckets[frequency].push(num);
    }


    // Step 4: Store final answer
    let result = [];


    // Step 5: Start from highest frequency
    // and move toward the lowest frequency
    for (let frequency = arr.length; frequency >= 1; frequency--) {

        // Check every number inside this frequency bucket
        for (const num of buckets[frequency]) {

            result.push(num);

            // When we have collected k numbers, return answer
            if (result.length === k) {
                return result;
            }
        }
    }


    return result;
}


// Example
console.log(
    TopKFrequent([1, 1, 1, 2, 2, 3], 2)
);

// Output:
// [1, 2]
