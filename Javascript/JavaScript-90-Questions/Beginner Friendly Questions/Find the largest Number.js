// 3. **Find the Largest Number**  
//    - Task: Write a function that takes three numbers and returns the largest.  
//    - Test: `findLargest(2, 8, 5)`  
//    - Expected Output: `8`


const findLargest = (a, b, c) => {
    if(a>b && a>c){
        console.log(a+" is the largest number");
    }else if(b>a && b>c){
        console.log(b+" is the largest number");
    }else{
        console.log(c+" is the largest number");
    }
}

findLargest(2, 8, 5);