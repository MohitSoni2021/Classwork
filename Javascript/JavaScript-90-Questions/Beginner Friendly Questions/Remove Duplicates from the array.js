// 16. **Remove Duplicates from an Array**  
//     - Task: Write a function that removes duplicate elements from an array.  
//     - Test: `removeDuplicates([1, 2, 2, 3, 4, 4, 5])`  
//     - Expected Output: `[1, 2, 3, 4, 5]`




let testarr = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(arr) {
  let uniqueArr = [...new Set(arr)];
  return uniqueArr;
}

// console.log(removeDuplicates(testarr))


//Method2
for(let i=0; i<testarr.length-1; i++){
    if(testarr[i]==testarr[i+1]){
        testarr.splice(i, 1)
    }
}

console.log(testarr)