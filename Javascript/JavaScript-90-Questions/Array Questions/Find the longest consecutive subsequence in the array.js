// 24. **Find the Longest Consecutive Sequence in an Array**  
//     - Task: Write a function that finds the longest consecutive sequence in an array.  
//     - Test: `longestConsecutive([100, 4, 200, 1, 3, 2])`  
//     - Expected Output: `4` (sequence is `[1, 2, 3, 4]`)


let array = [100, 4, 200, 1, 3, 2];

const longestConsecutive = (array) => {
    let max = 0;
    array = [... new Set(array)].sort((a, b) =>a-b)
    let sequence;
    let tempSequence = [];
    let s=0;

    for(let i=0; i<array.length; i++){
        if(i==0 || array[i]===array[i-1]+1){
            tempSequence.push(array[i]);
            if(tempSequence.length>max){
                max = tempSequence.length;
                sequence = [...tempSequence];
            }
        } else {
            tempSequence = [];
        }
    }

    return sequence

}


console.log(longestConsecutive(array))