// 5. **Check if an Object has a Property**
//    - Task: Write a function that checks if an object has a specific property.
//    - Test:
//      ```javascript
//      const obj = { name: 'Alice', age: 30 };
//      console.log(hasProperty(obj, 'age'));
//      ```
//    - Expected Output: `true`
const obj = { name: 'Alice', age: 30, cls:"12th" };

// console.log(Object.keys(obj))

console.log(Object.keys(obj))

const hasProperty = (obj, target)=>{
    return Object.keys(obj).includes(target)
}

console.log(hasProperty(obj, "adfasdf"))