// 5. **Sort an Array in Descending Order**  
//    - Task: Write a function that sorts an array in descending order.  
//    - Test: `sortArrayDescending([5, 2, 9, 1, 5, 6])`  
//    - Expected Output: `[9, 6, 5, 5, 2, 1]`

let arr = [1,2,4,5,3,1,5,8,2,2,5,4,6,3,10]

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length-1; j++){
        if(arr[j]<arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

console.log(arr)