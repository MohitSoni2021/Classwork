// 11. **Find the Intersection of Two Arrays**  
//     - Task: Write a function that returns the intersection of two arrays.  
//     - Test: `findIntersection([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[2, 3]`


const intersection = (arr1, arr2)=>{
    arr1 = [... new Set(arr1)]
    arr2 = [... new Set(arr2)]
    let intersectionArr = [];
    for(let i=0; i<arr1.length; i++){
        if(arr2.includes(arr1[i])){
            intersectionArr.push(arr1[i]);
        }
    }
    return intersectionArr
}

console.log(intersection([1, 2, 3], [2, 3, 4]))
