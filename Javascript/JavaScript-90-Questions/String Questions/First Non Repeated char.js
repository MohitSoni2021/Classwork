// 4. **Find the First Non-Repeated Character in a String**
//    - Task: Write a function that finds the first non-repeated character in a string.
//    - Test:
//      ```javascript
//      console.log(firstNonRepeatedCharacter("swiss"));
//      ```
//    - Expected Output: `"w"`

const FirstNonRepeatedWord = (str)=>{
    for (let i = 0; i < str.length; i++) {
        if(str.indexOf(str[i]) == str.lastIndexOf(str[i])){
            return str[i];
        }
        
    }
}

console.log(FirstNonRepeatedWord("swiss")); // Output: "w"
