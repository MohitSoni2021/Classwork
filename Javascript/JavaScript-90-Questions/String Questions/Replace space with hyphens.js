// 7. **Replace All Spaces in a String with Hyphens**
//    - Task: Write a function that replaces all spaces in a string with hyphens (`-`).
//    - Test:
//      ```javascript
//      console.log(replaceSpaces("Hello World"));
//      ```
//    - Expected Output: `"Hello-World"`


const replaceSpacewithHypen = (str)=>{
    return str.replace(" ", "-")
}

console.log(replaceSpacewithHypen("Hello World"))