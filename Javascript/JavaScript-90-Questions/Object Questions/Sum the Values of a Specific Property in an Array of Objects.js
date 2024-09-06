// 15. **Sum the Values of a Specific Property in an Array of Objects**
//     - Task: Write a function that sums the values of a specific property in an array of objects.
//     - Test:
//       ```javascript
//       const items = [
//         { name: 'item1', price: 10 },
//         { name: 'item2', price: 15 },
//         { name: 'item3', price: 20 }
//       ];
//       console.log(sumProperty(items, 'price'));
//       ```
//     - Expected Output: `45`


const items = [
  { name: 'item1', price: 10 },
  { name: 'item2', price: 15 },
  { name: 'item3', price: 20 }
];

let total = 0;

for(let ele of items){
    total+=ele.price
}

console.log(total)