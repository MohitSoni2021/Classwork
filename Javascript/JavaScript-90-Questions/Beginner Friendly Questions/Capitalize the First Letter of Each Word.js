// 19. **Capitalize the First Letter of Each Word**  
//     - Task: Write a function that capitalizes the first letter of each word in a string.  
//     - Test: `capitalizeWords('hello world')`  
//     - Expected Output: `'Hello World'`


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