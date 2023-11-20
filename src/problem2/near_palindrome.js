/*
A string is called a palindrome if it reads the same forwards and backwards. 
E.g., "a", "noon" and "tacocat" are palindromes but "cocoa" isn't.

A string is called a near-palindrome if we can rearrange its characters to make it a palindrome. 
For example, "aaa", "cocoa" and "xxyyzz" are near-palindromes but "abc" isn't.

You are given a String S of lowercase English letters. You are allowed to perform a sequence of operations. 
In each operation you can choose an index into S and either increment or decrement the character at that index. 
(Incrementing 'a' turns it into 'b', incrementing 'b' gives 'c', ..., and if we increment 'z' we get 'a' again. 
Decrementing is the inverse operation.)
Determine and return the smallest number of operations needed to turn S into a near-palindrome.
 
Definition
    

Class:
NearPalindromesDiv1
Method:
Solve
Parameters:
String
Returns:
Int
Method signature:
int solve(String S)
(be sure your method is public)


Constraints
-
S will contain between 1 and 2, 500 characters, inclusive.
-
Each character of S will be a lowercase English letter ('a'-'z').


Examples

0)

"cocoa"

Returns: 0

This is already a near-palindrome, no operations are needed.

1)

"daddy"

Returns: 2

One optimal solution is to increment S[4] twice, changing the input string into the near-palindrome "dadda".
(The string "dadda" is a near-palindrome because we can rearrange its letters to get a palindrome. 
One of the palindromes we can obtain this way is "dadad".)

2)

"abcdefgh"

Returns: 4

*/

export function minOperationsForNearPalindrome(s) {
    if (isNearPalindrome(s)) {
        return 0;
    }
    
    let left = 0;
    let right = s.length - 1;
    let operations = 0;

    while (left < right) {
        if (s[left] !== s[right]) {
            operations++;
        }
        left++;
        right--;
    }

    return operations;
}

function isNearPalindrome(s) {
    const charCount = {};
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let oddCount = 0;
  
    for (let count of Object.values(charCount)) {
      if (count % 2 !== 0) {
        oddCount++;
      }
    }

    return oddCount <= 1;
}

  
  
  