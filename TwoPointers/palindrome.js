// ****
// Leet Code  # 125
// ****
// valid  palindrome :
// Using two pointers, skip non-alphanumeric characters, return true if it is a palindrome,
// palindrome considering only alphanumeric characters and ignoring case.
// Optimized two pointer approach, O(n) time complexity and O(1) space complexity.

//  R A C E -s- C A R

function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Move left pointer to the next alphanumeric character
        if (!isAlphanumeric(s[left])) {
            left++;
            continue;
        }
        // Move right pointer to the previous alphanumeric character
        if (!isAlphanumeric(s[right])) {
            right--;
            continue;
        }
        // Compare characters (case-insensitive)
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function isAlphanumeric(char) {
    return /^[a-z0-9]$/i.test(char);
}

console.log(isPalindrome("race car")); // Output: true

