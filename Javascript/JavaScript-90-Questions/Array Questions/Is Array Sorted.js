// 13. **Check if an Array is Sorted**  
//     - Task: Write a function that checks if an array is sorted in ascending order.  
//     - Test: `isSorted([1, 2, 3, 4, 5])`  
//     - Expected Output: `true`


let testarr = [1,2,9,4,5,6,7,8]

const IsSorted = (arr)=>{
    return arr.every((val, index, arr) => index === 0 || val >= arr[index - 1]);
}

console.log(IsSorted(testarr))

const IsSorted2 = (arr)=>{
    let copy = arr
    let sorted = copy.sort((a,b)=>a-b)
    console.log(sorted)
    console.log(arr)
    sorted.forEach((ele, id)=>{
        if(ele != arr[id]){
            return false
        }
    })
    return true
}

console.log(IsSorted2(testarr))