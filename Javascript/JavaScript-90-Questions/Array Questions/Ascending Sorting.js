// 4. **Sort an Array in Ascending Order**  
//    - Task: Write a function that sorts an array in ascending order.  
//    - Test: `sortArray([5, 2, 9, 1, 5, 6])`  
//    - Expected Output: `[1, 2, 5, 5, 6, 9]`


let arr = [2,4,5,6,8,2,2,10,1,78,12,14]
// console.log(arr.sort((a,b)=>a-b))

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length-1; j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

console.log(arr)
