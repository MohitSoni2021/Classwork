// 14. **Check if a String Contains a Substring**
//     - Task: Write a function that checks if a string contains a given substring.
//     - Test:
//       ```javascript
//       console.log(containsSubstring("hello world", "world"));
//       console.log(containsSubstring("hello world", "planet"));
//       ```
//     - Expected Output:
//       ```javascript
//       true
//       false
//       ```


const findSubstring = (str, substring) => {
    return str.includes(substring);
}

console.log(findSubstring("hello world", "world"));