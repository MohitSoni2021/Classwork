// 20. **Remove All Instances of a Substring**
//     - Task: Write a function that removes all instances of a substring from a string.
//     - Test:
//       ```javascript
//       console.log(removeSubstring("This is a test. This is only a test.", "test"));
//       ```
//     - Expected Output: `"This is a . This is only a ."`


const removeSubstring = (string, substring)=>{
    string = string.split(" ")
    for (let i=0; i<string.length; i++){
        if(string[i]==substring){
            string.splice(i,1)
        }
    }
    return string.join(" ")
}

console.log(removeSubstring("This is a test. This is only a test", "test"))