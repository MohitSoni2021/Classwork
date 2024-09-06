// 15. **Rotate an Array by K Positions**  
//     - Task: Write a function that rotates an array by `k` positions.  
//     - Test: `rotateArray([1, 2, 3, 4, 5], 2)`  
//     - Expected Output: `[4, 5, 1, 2, 3]`

const RotateArr = (arr, iterations)=>{
    for (let i=0; i<iterations; i++){
        arr.unshift(arr.pop())
    }
    return arr
}

console.log(RotateArr([1, 2, 3, 4, 5], 2))
