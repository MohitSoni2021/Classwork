
// 22. **Find the Most Frequent Element in an Array**  
//     - Task: Write a function that finds the most frequent element in an array.  
//     - Test: `mostFrequent([1, 2, 2, 3, 3, 3])`  
//     - Expected Output: `3`




const CountFrequency = (arr)=>{
    let Frequency = {};
    for (let data of [... new Set(arr)]){
        Frequency[data] = 0;
    }
    for(let element of arr){
        Frequency[element] +=1
    }
    return Math.max(fre)
}

console.log(CountFrequency([1, 2, 2, 3, 3, 3]))