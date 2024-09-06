// 12. **Convert an Array of Objects to a Single Object**
//     - Task: Write a function that converts an array of objects into a single object. Assume each object in the array has a unique `key` property.
//     - Test:
//       ```javascript
//       const arr = [{ key: 'a', value: 1 }, { key: 'b', value: 2 }];
//       console.log(arrayToObject(arr));
//       ```
//     - Expected Output: `{ a: 1, b: 2 }`

const arr = [{ key: 'a', value: 1 }, { key: 'b', value: 2 }];
const ObjArrToObj = (arrObj)=>{
    let finalObj = {};
    for (let ele of arrObj){
        finalObj[ele.key] = ele.value;
    }
    return finalObj
}

console.log(ObjArrToObj(arr))