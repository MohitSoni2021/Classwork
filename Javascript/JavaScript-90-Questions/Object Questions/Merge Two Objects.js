// 6. **Merge Two Objects**
//    - Task: Write a function that merges two objects into one.
//    - Test:
//      ```javascript
//      const obj1 = { a: 1, b: 2 };
//      const obj2 = { b: 3, c: 4 };
//      console.log(mergeObjects(obj1, obj2));
//      ```
//    - Expected Output: `{ a: 1, b: 3, c: 4 }`


const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergeObjects = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

console.log(mergeObjects(obj1, obj2));


// Method2;

const mergeObjects2 = (obj1, obj2) => {
    for(let key in obj2){
        obj1[key] = obj2[key];
    }
    return obj1;
}

console.log(mergeObjects2(obj1, obj2));

