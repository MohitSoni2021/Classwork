// 5. **Count the Number of Words in a String**
//    - Task: Write a function that counts the number of words in a string. Assume words are separated by spaces.
//    - Test:
//      ```javascript
//      console.log(countWords("This is a test string"));
//      ```
//    - Expected Output: `5`


const wordCount = (str)=>{
    return str.split(" ").length;
}

console.log(wordCount("This is a test string"))