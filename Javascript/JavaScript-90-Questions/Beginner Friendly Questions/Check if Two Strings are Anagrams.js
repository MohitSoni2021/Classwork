// 18. **Check if Two Strings are Anagrams**  
//     - Task: Write a function that checks if two strings are anagrams of each other.  
//     - Test: `areAnagrams('listen', 'silent')`  
//     - Expected Output: `true`


const areAnagrams = (str1, str2) => {
    if (str1.length!== str2.length) {
        return false;
    }
    for(let ele of str1){
        if(!str2.includes(ele)){
            return false
        }
    }
    return true;
}

console.log(areAnagrams("listen", "silent"));