// 8. **Loop Through Object Properties**
//    - Task: Write a function that loops through all the properties of an object and prints them.
//    - Test:
//      ```javascript
//      const user = { name: 'John', age: 30, city: 'New York' };
//      printProperties(user);
//      ```
//    - Expected Output:
//      ```
//      name: John
//      age: 30
//      city: New York
//      ```
// // 

const printProperties = (obj)=>{
    for(let ele of Object.keys(obj)){
        console.log(`${ele}:${obj[ele]}`)
    }
}
printProperties({name: 'John', age: 30, city: 'New York' })