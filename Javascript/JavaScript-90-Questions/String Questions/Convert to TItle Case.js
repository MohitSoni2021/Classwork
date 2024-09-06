// 8. **Convert a String to Title Case**
//    - Task: Write a function that converts a string to title case (capitalizes the first letter of each word).
//    - Test:
//      ```javascript
//      console.log(toTitleCase("this is a test string"));
//      ```
//    - Expected Output: `"This Is A Test String"`

let string = "this is a test string";

const toTitleCase = (string)=>{
    let newString = "";
    string = string.split(" ");
    for (let i=0; i<string.length; i++){
        newString += string[i][0].toUpperCase() + string[i].slice(1) + " ";
    }
    return newString
}

console.log(toTitleCase("this is a test string"))