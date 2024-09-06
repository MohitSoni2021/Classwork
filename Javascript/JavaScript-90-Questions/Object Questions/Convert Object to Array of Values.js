// 11. **Convert Object to Array of Values**
//     - Task: Write a function that converts an object to an array of its values.
//     - Test:
//       ```javascript
//       const obj = { name: 'Alice', age: 30, city: 'NYC' };
//       console.log(objectValuesToArray(obj));
//       ```
//     - Expected Output: `['Alice', 30, 'NYC']`

const obj = { name: 'Alice', age: 30, city: 'NYC' };
console.log(Object.values(obj))