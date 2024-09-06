// 12. **Find the Union of Two Arrays**  
//     - Task: Write a function that returns the union of two arrays.  
//     - Test: `findUnion([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[1, 2, 3, 4]`


const union = (arr1, arr2)=>{
    return [...new Set(arr1.concat(arr2))]
}

console.log(union([1, 2, 3], [2, 3, 4]))


const union2 = (arr1, arr2)=>{
    for(let i=0; i<arr1.length; i++){
        arr2.push(arr1[i])
    }
    return [...new Set(arr2)]
}


const union3 = (arr1, arr2)=>{
    for(let i=0; i<arr1.length; i++){
        arr2.push(arr1[i])
    }
    arr2.sort((a,b)=>a-b) 
    for(let i=0; i<arr2.length-1; i++){
        if(arr2[i]==arr2[i+1]){
            arr2.splice(i, 1)
        }
    }
    return arr2
}

console.log(union3([1, 2, 3], [2, 3, 4]))
console.log(union2([1, 2, 3], [2, 3, 4]))
