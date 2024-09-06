// 17. **Check if a String Starts with a Specific Substring**
//     - Task: Write a function that checks if a string starts with a given substring.
//     - Test:
//       ```javascript
//       console.log(startsWith("hello world", "hello"));
//       console.log(startsWith("hello world", "world"));
//       ```
//     - Expected Output:
//       ```javascript
//       true
//       false


const checksuffix = (str, suffix)=>{
    for (let i=0; i<suffix.length; i++){
        if (str[str.length-1-i]!== suffix[suffix.length-1-i]) return false;
    }
    return true;
}

console.log(checksuffix("hello world", "world"))


// method 2 
let testStr = "hello world";
console.log(testStr.endsWith("world"))