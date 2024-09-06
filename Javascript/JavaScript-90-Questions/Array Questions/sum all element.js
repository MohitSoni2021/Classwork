// 1. **Sum All Elements in an Array**  
//    - Task: Write a function that returns the sum of all numbers in an array.  
//    - Test: `sumArray([1, 2, 3, 4, 5])`  
//    - Expected Output: `15`

let arr = [1, 2, 3, 4, 5];

//Method 1
const FindSum1 = (arr)=>{
    return arr.reduce((ele, sum) => {
        return ele + sum;
    })
}


// Method 2


const FindSum = (arr) => {
    let sum = 0;
    arr.forEach(ele => {
        sum += ele;
    })
    return sum;
}



console.log(FindSum(arr))