// 19. **Find the Pair of Elements with the Minimum Sum in an Array**  
//     - Task: Write a function that finds the pair of elements with the minimum sum in an array.  
//     - Test: `minSumPair([1, 2, 3, 4, 5])`  
//     - Expected Output: `[1, 2]`



const MinSumPair = (arr)=>{
    let pair = [];
    let maxsum = Infinity;
    for (let i=0; i<arr.length; i++){
        for (let j=0; j<arr.length; j++){
            if(i==j){
                continue;
            }
            if (arr[i]+arr[j]<maxsum){
                maxsum = arr[i]+arr[j];
                pair = [arr[i], arr[j]];
            }
        }
    } 
    return pair;
}

console.log(MinSumPair([1,2,3,4,5]))