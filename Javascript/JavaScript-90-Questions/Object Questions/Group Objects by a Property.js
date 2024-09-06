// 13. **Group Objects by a Property**
//     - Task: Write a function that groups an array of objects by a specific property.
//     - Test:
//       ```javascript
//       const users = [
//         { name: 'Alice', age: 30 },
//         { name: 'Bob', age: 20 },
//         { name: 'Charlie', age: 30 }
//       ];
//       console.log(groupBy(users, 'age'));
//       ```
//     - Expected Output:
//       ```javascript
//       {
//         20: [{ name: 'Bob', age: 20 }],
//         30: [{ name: 'Alice', age: 30 }, { name: 'Charlie', age: 30 }]
//       }
//       ```


const users = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 30 }
];

// console.log(Object.groupBy(users, 'age'));

const GroupBy = (obj, property)=>{
    let data = [];
    let groupBy = {};
    for (let d of obj){
        data.push(d[property])
    }
    for (let d of [... new Set(data)]){
        groupBy[d] = []
    }
    for (let d of obj){
        groupBy[d[property]].push(d)
    }
    return groupBy;
}

console.log(GroupBy(users, 'age'));