// 9. **Check if a String Contains Only Digits**
//    - Task: Write a function that checks if a string contains only numeric digits.
//    - Test:
//      ```javascript
//      console.log(isNumeric("12345"));
//      console.log(isNumeric("123a5"));
//      ```
//    - Expected Output:
//      ```javascript
//      true
//      false
//      ```


const isNumericAvaliable = (str)=>{
    // return /^[0-9]+$/.test(str);
    for(let i=0; i<str.length; i++){
        if(!(str.charCodeAt(i)>47 && str.charCodeAt(i)<58)){
            return false;
        }
    }
    return true;
}

console.log(isNumericAvaliable("123456"));