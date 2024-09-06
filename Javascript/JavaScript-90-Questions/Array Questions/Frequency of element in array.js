// 21. **Count the Frequency of Each Element in an Array**  
//     - Task: Write a function that counts the frequency of each element in an array.  
//     - Test: `countFrequency([1, 2, 2, 3, 3, 3])`  
//     - Expected Output: `{1: 1, 2: 2, 3: 3}`
const CountFrequency = (arr)=>{
    let Frequency = {};
    for (let data of [... new Set(arr)]){
        Frequency[data] = 0;
    }
    for(let element of arr){
        Frequency[element] +=1
    }
    return Frequency
}

console.log(CountFrequency([1, 2, 2, 3, 3, 3]))
