// ****
// LeetCode # 575 'easy'
// ****
// Distribute Candies
// Whichever ceilling bind first
// alice has n candies of various types and her doctor tells her to eat only n/2 of them.
// return the maximum number of different types she can keep while eating exectly n/2 candies.
// ASked At Amzon,
// Optimized min of two limits

let arr = [1, 1, 2, 2, 3, 3];

function DistributeCandies(arr) {

    // Create a Set to store unique candy types
    let candyTypes = new Set();

    // Go through every candy in the array
    for (const num of arr) {

        // Add candy type to the Set
        candyTypes.add(num);
    }

    // Maximum number of candies allowed
    let maxAllowed = arr.length / 2;

    // Number of different candy types
    let differentTypes = candyTypes.size;

    // Return the smaller value
    return Math.min(differentTypes, maxAllowed);
}

console.log(DistributeCandies(arr));

// Output:
// 3
