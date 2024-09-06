// 6. **Reverse an Array**  
//    - Task: Write a function that reverses the elements of an array.  
//    - Test: `reverseArray([1, 2, 3, 4, 5])`  
//    - Expected Output: `[5, 4, 3, 2, 1]`


let testarr  = ["This", "is", "a", "array", "too"];

// console.log(testarr.reverse())

for(let i=0; i<parseInt(testarr.length/2); i++){
    let temp = testarr[i]
    testarr[i] = testarr[testarr.length-1-i]
    testarr[testarr.length-1-i] = temp
}

console.log(testarr)