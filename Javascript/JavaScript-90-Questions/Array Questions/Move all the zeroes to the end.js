// 20. **Move All Zeros to the End of an Array**  
//     - Task: Write a function that moves all zeros in an array to the end, preserving the order of the other elements.  
//     - Test: `moveZeros([0, 1, 0, 3, 12])`  
//     - Expected Output: `[1, 3, 12, 0, 0]`


const MoveZeroesToEnd = (arr)=>{
    for(let i=0; i<arr.length; i++){
        if(arr[i]==0){
            arr.splice(i,1)
            arr.push(0)
        }
    }
    return arr
}


console.log(MoveZeroesToEnd([0, 1, 0, 3, 12]))