// 25. **Find the Second Largest Number in an Array**  
//     - Task: Write a function that returns the second largest number in an array.  
//     - Test: `secondLargest([1, 2, 3, 4, 5])`  
//     - Expected Output: `4`




const findNthLargestElement = (arr)=>{
    arr = arr.sort((a,b)=>a-b);
    arr.splice(arr.indexOf(Math.max(... arr)), 1)
    return Math.max(... arr)
}

console.log(findNthLargestElement([1, 2, 3, 4, 5]))