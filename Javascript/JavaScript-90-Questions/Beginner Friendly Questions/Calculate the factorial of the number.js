// 5. **Calculate the Factorial of a Number**  
//    - Task: Write a function that returns the factorial of a number.  
//    - Test: `factorial(5)`  
//    - Expected Output: `120`


let num = 5;
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log(factorial);
