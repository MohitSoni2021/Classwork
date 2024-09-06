// 28. **Calculate the GCD of Two Numbers**  
//     - Task: Write a function that calculates the greatest common divisor (GCD) of two numbers.  
//     - Test: `gcd(12, 18)`  
//     - Expected Output: `6`


// important 
const gcd = (a,b)=>{
    while(b!=0){
        let temp = b;
        b = a%b;
        a = temp;
    }
    return a;
}

console.log(gcd(12, 18)); // Expected Output: 6