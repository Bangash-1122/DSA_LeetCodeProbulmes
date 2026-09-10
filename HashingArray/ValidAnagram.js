/ ****
// LeetCode # 242 'easy'
// ****

// Sale letters, same counts?
// Given two strings s and t, return true if t is an anagram of s(a rearrangment
// using all the original letters exactly once)
//ASKED AMAZON, BLOOMBERG, UBER
//Optimized .count map time O(n), spaceO(1),

function isAnagram(s, t){

    if(s.length !== t.length){
        return false;
    }

    let count = {};

    for (let char of s){
        count[char] = (count[char] || 0) + 1;
    }

    for(let char of t){
        if(!count[char]) {
            return false;
        }
        count[count]--;
    }
    return true
}
// Example
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car"));         // false
