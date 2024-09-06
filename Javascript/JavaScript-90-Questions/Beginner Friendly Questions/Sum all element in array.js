// 11. **Sum All Elements in an Array**  
//     - Task: Write a function that returns the sum of all numbers in an array.  
//     - Test: `sumArray([1, 2, 3, 4, 5])`  
//     - Expected Output: `15`


let arr = [1, 2, 3, 4, 5];
let sum = 0;

for(let ele of arr){
    sum += ele;
}

console.log(sum);