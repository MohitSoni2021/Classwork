// 14. **Find the Difference of Two Arrays**  
//     - Task: Write a function that returns the difference of two arrays (elements in the first array that are not in the second array).  
//     - Test: `findDifference([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[1]`


let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];
let subarr = []
for(let i=0; i<arr1.length; i++){
    if(!arr2.includes(arr1[i])){
        subarr.push(arr1[i])
    }
}

console.log(subarr)