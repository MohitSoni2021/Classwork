// 21. **Generate a Random Number within a Range**  
//     - Task: Write a function that generates a random number between a given range.  
//     - Test: `randomNumber(1, 10)`  
//     - Expected Output: `A random number between 1 and 10`


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  // Example: Random integer between 1 and 10
  let randomInt = getRandomInt(1, 10);
  console.log(randomInt); // e.g., 7
  