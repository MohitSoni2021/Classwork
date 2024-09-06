// 8. **Find the Index of a Specific Element in an Array**  
//    - Task: Write a function that returns the index of a specific element in an array. If the element is not found, return -1.  
//    - Test: `findIndex([1, 2, 3, 4, 5], 3)`  
//    - Expected Output: `2`

let testarr = [1, 2, 3, 4, 5];
let target = 3
console.log(testarr.indexOf(3))
for (let i=0; testarr.length; i++){
    if(testarr[i]==target){
        console.log(i)
        break;
    }
}