// 19. **Insert a Substring at a Specific Position in a String**
//     - Task: Write a function that inserts a substring at a specific position in a string.
//     - Test:
//       ```javascript
//       console.log(insertSubstring("Hello World", "Beautiful ", 6));
//       ```
//     - Expected Output: `"Hello Beautiful World"`


const addSubstring = (str, position, substring)=>{
    return str.slice(0, position) + substring + str.slice(position);
}
console.log(addSubstring("Hello World",6, "Beautiful "))