// 24. **Remove a Specific Element from an Array**  
//     - Task: Write a function that removes a specific element from an array.  
//     - Test: `removeElement([1, 2, 3, 4, 5], 3)`  
//     - Expected Output: `[1, 2, 4, 5]`


const removeElement = (array, element)=>{
    return array.filter(num=>num!=element)
}

console.log(removeElement([1, 2, 3, 4, 5], 3)) 