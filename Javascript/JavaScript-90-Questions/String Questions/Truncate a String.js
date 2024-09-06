// 16. **Truncate a String**
//     - Task: Write a function that truncates a string to a specified length and adds "..." at the end.
//     - Test:
//       ```javascript
//       console.log(truncateString("This is a long string", 10));
//       ```
//     - Expected Output: `"This is a..."`


const TruncateString = (str, value)=>{
    return str.slice(0, value)+"..."
}

console.log(TruncateString("This is a long string", 10));