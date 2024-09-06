// 29. **Calculate the LCM of Two Numbers**  
//     - Task: Write a function that calculates the least common multiple (LCM) of two numbers.  
//     - Test: `lcm(4, 6)`  
//     - Expected Output: `12`


//important
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b); 
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

console.log(lcm(4, 6)); // Output: 12