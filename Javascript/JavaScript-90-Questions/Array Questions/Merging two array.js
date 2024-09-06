// 10. **Merge Two Arrays**  
//     - Task: Write a function that merges two arrays into one.  
//     - Test: `mergeArrays([1, 2, 3], [4, 5, 6])`  
//     - Expected Output: `[1, 2, 3, 4, 5, 6]`


const mergeArrays = (arr1, arr2)=>{
    return [...arr1,...arr2];
}

const mergeArrays2 = (arr1, arr2)=>{
    return arr1.concat(arr2)
}

const mergeArrays3 = (arr1, arr2)=>{
    for(let ele of arr2){
        arr1.push(ele)
    }
    return arr1
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]))
console.log(mergeArrays2([1, 2, 3], [4, 5, 6]))
console.log(mergeArrays3([1, 2, 3], [4, 5, 6]))