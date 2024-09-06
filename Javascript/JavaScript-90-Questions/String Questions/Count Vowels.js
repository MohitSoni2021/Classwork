// 3. **Count the Number of Vowels in a String**
//    - Task: Write a function that counts the number of vowels (`a, e, i, o, u`) in a given string.
//    - Test:
//      ```javascript
//      console.log(countVowels("hello world"));
//      ```
//    - Expected Output: `3`

const countVowels = (str)=>{
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let ele of str){
        if(vowels.includes(ele)){
            count++;
        }
    }
    return count;
}

console.log(countVowels("hello world")); // 3
