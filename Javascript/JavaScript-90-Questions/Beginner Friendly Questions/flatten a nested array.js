// 20. **Flatten a Nested Array**  
//     - Task: Write a function that flattens a nested array (an array of arrays) into a single array.  
//     - Test: `flattenArray([1, [2, 3], [4, [5, 6]]])`  
//     - Expected Output: `[1, 2, 3, 4, 5, 6]`



let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flatArray = nestedArray.flat(Infinity); // Infinity to flatten all levels
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]