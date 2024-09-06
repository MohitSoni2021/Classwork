// 13. **Check if a Number is Prime**  
//     - Task: Write a function that checks if a number is prime.  
//     - Test: `isPrime(7)`  
//     - Expected Output: `true`


let num = 15
const isPrime = (num)=>{
    for (let i=2; i<num; i++){
        if(num%i==0){
            return `${num} is not a prime number`
        }
    }
    return `${num} is a prime number`
}

console.log(isPrime(num))