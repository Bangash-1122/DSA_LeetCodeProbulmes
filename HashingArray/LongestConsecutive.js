function longestConsecutive(arr) {

    // Put all array values into a Set
    const numberSet = new Set(arr);

    // Store the longest sequence length
    let longestLength = 0;

    // Check every number in the Set
    for (const num of numberSet) {

        // If num - 1 does not exist,
        // then num is the start of a sequence
        if (!numberSet.has(num - 1)) {

            let currentNumber = num;
            let currentLength = 1;

            // Keep checking the next consecutive number
            while (numberSet.has(currentNumber + 1)) {

                currentNumber = currentNumber + 1;
                currentLength = currentLength + 1;
            }

            // Update longest sequence length
            longestLength = Math.max(
                longestLength,
                currentLength
            );
        }
    }

    return longestLength;
}


// Input array
let arr = [100, 4, 200, 1, 3, 2];

console.log(longestConsecutive(arr));

// Output:
// 4
