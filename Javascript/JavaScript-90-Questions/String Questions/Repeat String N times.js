// 13. **Repeat a String N Times**
//     - Task: Write a function that repeats a given string `n` times.
//     - Test:
//       ```javascript
//       console.log(repeatString("abc", 3));
//       ```
//     - Expected Output: `"abcabcabc"`


const repeatString = (str, n) => str.repeat(n);

console.log(repeatString("abc", 7));