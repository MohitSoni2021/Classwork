// 7. **Check if an Array Contains a Specific Element**  
//    - Task: Write a function that checks if an array contains a specific element.  
//    - Test: `containsElement([1, 2, 3, 4, 5], 3)`  
//    - Expected Output: `true`

let testarr = [1,2,3,4,5,6,7,8,9,10]

console.log(testarr.includes(2))

// Method 2
let checknum = 2
for(let i=0; i<testarr.length; i++){
    if(testarr[i] == checknum){
        console.log(true);
        break;
    }
}