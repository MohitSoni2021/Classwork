// 14. **Find the Object with the Maximum Value of a Property**
//     - Task: Write a function that finds the object with the maximum value of a given property in an array of objects.
//     - Test:
//       ```javascript
//       const users = [
//         { name: 'Alice', age: 30 },
//         { name: 'Bob', age: 20 },
//         { name: 'Charlie', age: 35 }
//       ];
//       console.log(findMax(users, 'age'));
//       ```
//     - Expected Output: `{ name: 'Charlie', age: 35 }`


let user = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 35 }
 ];


const FindMax = (obj, property)=>{
    let arr = [];
    for (let ele of obj){
        arr.push(ele[property]);
    }
    return Math.max(... arr)
}

console.log(FindMax(user, 'age'))