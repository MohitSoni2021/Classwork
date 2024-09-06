// 12. **Generate Fibonacci Sequence**  
//     - Task: Write a function that generates the first `n` Fibonacci numbers.  
//     - Test: `fibonacci(5)`  
//     - Expected Output: `[0, 1, 1, 2, 3]`


let arr = [0, 1]
let count = 10;
for (let i = 0; i<count-arr.length+1; i++){
    arr.push(arr[arr.length - 1]+arr[arr.length-2]);
}

console.log(arr)