// 10. **Remove Duplicates Characters from a String**
//     - Task: Write a function that removes duplicate characters from a string.
//     - Test:
//       ```javascript
//       console.log(removeDuplicates("programming"));
//       ```
//     - Expected Output: `"progamin"`


const removeDuplicates = (str)=>{
    return [...new Set(str.split(""))].join("");
}

const removeDuplicates2 = (str)=>{
    let finalstr = "";
    for(let i=0; i<str.length; i++)
    {
        if(!finalstr.includes(str[i])){
            finalstr += str[i];
        }
    }
    return finalstr;
}

console.log(removeDuplicates2("programming"));