// 9. **Count the Number of Properties in an Object**
//    - Task: Write a function that counts the number of properties in an object.
//    - Test:
//      ```javascript
//      const obj = { name: 'Alice', age: 30, city: 'NYC' };
//      console.log(countProperties(obj));
//      ```
//    - Expected Output: `3`


const obj = { name: 'Alice', age: 30, city: 'NYC' };
const propertiesCount = (obj)=>{
    return Object.keys(obj).length;
}

console.log(propertiesCount(obj));

