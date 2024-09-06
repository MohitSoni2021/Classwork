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


let string = "hello world";
console.log(string.startsWith("hello"))



//Method 2 
const Prefix_Check = (str, prefix)=>{
    for(let i=0; i<prefix.length; i++){
        if(str[i]!=prefix[i]) return false;
    }
    return true;
}

console.log(Prefix_Check(string, "hello"))