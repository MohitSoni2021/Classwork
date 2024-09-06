// 6. **Check if Two Strings are Anagrams**
//    - Task: Write a function that checks if two strings are anagrams (contain the same characters in different orders).
//    - Test:
//      ```javascript
//      console.log(areAnagrams("listen", "silent"));
//      console.log(areAnagrams("hello", "world"));
//      ```
//    - Expected Output:
//      ```javascript
//      true
//      false
//      ```


const areAnagrams = (str1, str2) => {
    if (str1.length!== str2.length) {
        return false;
    }
    for(let ele of str1){
        if(!str2.includes(ele)){
            return false
        }
    }
    return true;
}

console.log(areAnagrams("listen", "silent"));