// 2. **Check if a String is a Palindrome**
//    - Task: Write a function that checks if a given string is a palindrome (reads the same forward and backward).
//    - Test:
//      ```javascript
//      console.log(isPalindrome("racecar"));
//      console.log(isPalindrome("hello"));
//      ```
//    - Expected Output:
//      ```javascript
//      true
//      false
//      ```


const checkPalindrome = (str)=>{
    return str==str.split("").reverse().join("")
}

console.log(checkPalindrome("racecar"));