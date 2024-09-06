// 27. **Find the Missing Number in an Array**  
//     - Task: Write a function that finds the missing number in a sequence from 1 to n.  
//     - Test: `findMissingNumber([1, 2, 4, 5, 6])`  
//     - Expected Output: `3`

let array = [1,2,4,5,6,7,8,9]

const findTheMissingNumber = (array)=>{

    for(let i=0; i<Math.max(... array); i++){
        if(array[i]!=i+1){
            return i+1
        }
    }
    
}

console.log(findTheMissingNumber(array)) 