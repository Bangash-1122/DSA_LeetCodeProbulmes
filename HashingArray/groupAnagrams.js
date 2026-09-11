// ** **
// LeetCode # 49 'medium' 
// ** **
//Groups Anagrams: 
// Bucket words by their sorted-letter signature
// Given an array of stings, group together the ones that are anagrams of each other
// (use every word exactly once), return the groups in any order
// Asked Amazon , Uber, Facebook
//Time complexity: O(N*K logK), 
//Space complexity: O(N*K)



// Array of words
let words = ["eat", "tea", "tan", "ate", "nat", "bat"];

function groupAnagrams(words) {

    // Create an empty Map to store grouped anagrams
    const map = new Map();

    // Go through each word in the array
    for (const word of words) {

        // Sort the letters of the word
        // This sorted word will be used as the key/signature
        const sortedWord = word.split('').sort().join('');

        // If this sorted word is not already in the map,
        // create a new empty array for it
        if (!map.has(sortedWord)) {
            map.set(sortedWord, []);
        }

        // Add the original word to its anagram group
        map.get(sortedWord).push(word);
    }

    // Return all grouped anagrams as an array
    return Array.from(map.values());
}

// Call the function and display the result
console.log(groupAnagrams(words));

// Output:
// [
//   [ 'eat', 'tea', 'ate' ],
//   [ 'tan', 'nat' ],
//   [ 'bat' ]
// ]
