// 16. **Find the Maximum Difference Between Two Elements in an Array**  
//     - Task: Write a function that finds the maximum difference between any two elements in an array.  
//     - Test: `maxDifference([2, 3, 10, 6, 4, 8, 1])`  
//     - Expected Output: `9`


const MaxDifferenceBetweenElements = (arr)=>{
    let arr1 = [];
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            Math.abs(arr[j] - arr[i])
            arr1.push(Math.abs(arr[j] - arr[i]));
        }
    }
    console.log(arr1)
    return Math.max(...arr1);
}

console.log(MaxDifferenceBetweenElements([2, 3, 10, 6, 4, 8, 1]))
