// 17. **Find the Second Largest Element in an Array**  
//     - Task: Write a function that returns the second largest element in an array.  
//     - Test: `secondLargest([1, 2, 3, 4, 5])`  


const findNthLargestElement = (arr)=>{
    arr = arr.sort((a,b)=>a-b);
    arr.splice(arr.indexOf(Math.max(... arr)), 1)
    return Math.max(... arr)
}

console.log(findNthLargestElement([1, 2, 3, 4, 5]))