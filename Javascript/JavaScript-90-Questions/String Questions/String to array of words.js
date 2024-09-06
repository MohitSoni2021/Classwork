// 15. **Convert a String to an Array of Words**
//     - Task: Write a function that converts a string to an array of words.
//     - Test:
//       ```javascript
//       console.log(stringToWords("This is a test"));
//       ```
//     - Expected Output: `["This", "is", "a", "test"]`


const words = (str)=>{
    return str.split(" ");
}

console.log(words("This is a test"));