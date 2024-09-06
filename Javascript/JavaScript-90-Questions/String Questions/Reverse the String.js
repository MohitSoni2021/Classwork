// 1. **Reverse a String**
//    - Task: Write a function that reverses a given string.
//    - Test:
//      ```javascript
//      console.log(reverseString("hello"));
//      ```
//    - Expected Output: `"olleh"`


let testStr = "This is a string";

const reverseString1 = (string)=>{
    return string.split("").reverse().join("")
}

// console.log(reverseString1(testStr))
