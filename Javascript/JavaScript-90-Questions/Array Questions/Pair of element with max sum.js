// 18. **Find the Pair of Elements with the Maximum Sum in an Array**  
//     - Task: Write a function that finds the pair of elements with the maximum sum in an array.  
//     - Test: `maxSumPair([1, 2, 3, 4, 5])`  
//     - Expected Output: `[4, 5]`


const MaxSumPair = (arr)=>{
    let pair = [];
    let maxsum = -Infinity;
    for (let i=0; i<arr.length; i++){
        for (let j=0; j<i; j++){
            if (arr[i]+arr[j]>maxsum){
                maxsum = arr[i]+arr[j];
                pair = [arr[i], arr[j]];
            }
        }
    } 
    return pair;
}



const MaximumSum = (arr)=>{
    arr = arr.sort((a,b)=>a-b);
    return [arr[arr.length-2], arr[arr.length-1]]
}
console.log(MaximumSum([1,2,3,4,5,9]))




console.log(MaxSumPair([1,2,3,4,5,9]))